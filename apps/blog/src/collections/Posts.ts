import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'
import { buildEditor } from '../editor/buildEditor'

const slugify = (input: string): string =>
  input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)

const countWordsFromLexical = (root: unknown): number => {
  if (!root || typeof root !== 'object') return 0
  let total = 0
  const walk = (node: unknown): void => {
    if (!node || typeof node !== 'object') return
    const n = node as Record<string, unknown>
    if (typeof n.text === 'string') {
      total += n.text.trim().split(/\s+/).filter(Boolean).length
    }
    if (Array.isArray(n.children)) n.children.forEach(walk)
  }
  walk(root)
  return total
}

const collectTKsFromLexical = (root: unknown): number => {
  if (!root || typeof root !== 'object') return 0
  let count = 0
  const walk = (node: unknown): void => {
    if (!node || typeof node !== 'object') return
    const n = node as Record<string, unknown>
    if (typeof n.text === 'string') {
      const matches = n.text.match(/\bTK\b|\[TK\]/g)
      if (matches) count += matches.length
    }
    if (Array.isArray(n.children)) n.children.forEach(walk)
  }
  walk(root)
  return count
}

// Publish gate: enforce the 8 required editorial fields plus zero TKs before
// allowing status to flip to "published".
const enforcePublishGate: CollectionBeforeChangeHook = async ({ data, originalDoc, req }) => {
  const next = { ...(originalDoc ?? {}), ...data } as Record<string, unknown>
  const wantsPublish = next.status === 'published'

  // Auto-derive slug from title when missing.
  if (typeof next.title === 'string' && (!next.slug || typeof next.slug !== 'string' || !next.slug)) {
    next.slug = slugify(next.title)
    data.slug = next.slug
  }

  // Compute word count and reading time on every save.
  const wordCount = countWordsFromLexical(next.body)
  data.wordCount = wordCount
  data.readingTime = Math.max(1, Math.ceil(wordCount / 225))

  // First-published timestamp is set once and never changes.
  if (wantsPublish && !originalDoc?.firstPublishedAt) {
    data.firstPublishedAt = new Date().toISOString()
  }
  if (wantsPublish) {
    data.publishedAt = new Date().toISOString()
  }

  if (!wantsPublish) return data

  const missing: string[] = []
  const isFilled = (v: unknown): boolean =>
    v !== undefined && v !== null && (typeof v === 'string' ? v.trim().length > 0 : true)

  if (!isFilled(next.title)) missing.push('title')
  if (!isFilled(next.dek)) missing.push('dek')
  if (!Array.isArray(next.byline) || next.byline.length === 0) missing.push('byline')
  if (!isFilled(next.primarySection)) missing.push('primary section')
  if (!isFilled(next.featuredImage)) missing.push('featured image')
  if (!isFilled(next.seoTitle)) missing.push('SEO title')
  if (!isFilled(next.seoDescription)) missing.push('SEO description')
  if (!isFilled(next.publishDate)) missing.push('publish date')

  // Pull featured-image alt + credit through the relation to ensure they exist.
  if (isFilled(next.featuredImage)) {
    try {
      const featuredId = typeof next.featuredImage === 'object' && next.featuredImage !== null && 'id' in (next.featuredImage as Record<string, unknown>)
        ? ((next.featuredImage as { id: string | number }).id)
        : (next.featuredImage as string | number)
      const media = await req.payload.findByID({ collection: 'media', id: featuredId, depth: 0 })
      const decorative = (media as { decorative?: boolean }).decorative
      const altOk = decorative || (typeof (media as { alt?: string }).alt === 'string' && (media as { alt?: string }).alt!.trim().length > 0)
      const creditOk = typeof (media as { credit?: string }).credit === 'string' && (media as { credit?: string }).credit!.trim().length > 0
      if (!altOk) missing.push('featured image alt text')
      if (!creditOk) missing.push('featured image credit')
    } catch {
      missing.push('featured image (could not load)')
    }
  }

  const tkCount = collectTKsFromLexical(next.body)
  if (tkCount > 0) missing.push(`${tkCount} unresolved TK${tkCount === 1 ? '' : 's'}`)

  if (missing.length > 0) {
    throw new Error(
      `Cannot publish — missing or invalid: ${missing.join(', ')}.`,
    )
  }

  return data
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'primarySection', 'publishDate', 'updatedAt'],
    description:
      'Articles. Save as draft any time; publish only when the 8 required fields are filled and there are no TKs left.',
  },
  access: {
    read: ({ req }) => {
      // Authenticated users see everything; the public can only see published.
      if (req.user) return true
      return { status: { equals: 'published' } }
    },
  },
  hooks: {
    beforeChange: [enforcePublishGate],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Write',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              maxLength: 100,
              admin: {
                description: 'The headline. Max 100 characters.',
              },
            },
            {
              name: 'dek',
              type: 'textarea',
              admin: {
                description:
                  'A one- to two-sentence summary that hooks the reader. Required to publish.',
              },
            },
            {
              name: 'kicker',
              type: 'text',
              maxLength: 30,
              admin: {
                description:
                  'Optional metadata above the headline (e.g., OPINION, CULTURE). Max 30 characters.',
              },
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description:
                  'Hero image used at the top of the post and in social cards. Required to publish.',
              },
            },
            {
              name: 'body',
              type: 'richText',
              required: true,
              editor: buildEditor(),
              admin: {
                description: 'The article body. Use / for the block menu.',
              },
            },
          ],
        },
        {
          label: 'Metadata',
          fields: [
            {
              name: 'byline',
              type: 'array',
              minRows: 1,
              labels: { singular: 'Author', plural: 'Authors' },
              admin: {
                description: 'One or more author names. The first is the primary author.',
              },
              fields: [
                { name: 'name', type: 'text', required: true },
              ],
            },
            {
              name: 'primarySection',
              type: 'relationship',
              relationTo: 'sections',
              admin: {
                description: 'The post’s home section. Required to publish.',
              },
            },
            {
              name: 'tags',
              type: 'array',
              admin: {
                description: 'Free-form tags.',
              },
              fields: [{ name: 'tag', type: 'text', required: true }],
            },
            {
              name: 'publishDate',
              type: 'date',
              admin: {
                description: 'When this post should appear as published. Required to publish.',
                date: { pickerAppearance: 'dayAndTime' },
              },
            },
            {
              name: 'slug',
              type: 'text',
              unique: true,
              index: true,
              admin: {
                description: 'URL slug. Auto-derived from title if left blank.',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoTitle',
              type: 'text',
              maxLength: 70,
              admin: { description: 'Title for search results & social cards. Required to publish.' },
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              maxLength: 200,
              admin: { description: 'Description for search results & social cards. Required to publish.' },
            },
          ],
        },
        {
          label: 'Status',
          fields: [
            {
              name: 'status',
              type: 'select',
              required: true,
              defaultValue: 'draft',
              options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
              ],
              admin: {
                description:
                  'Switch to Published when ready. Save will fail if any required field is missing.',
              },
            },
            {
              name: 'firstPublishedAt',
              type: 'date',
              admin: {
                readOnly: true,
                description: 'Set once when the post is first published. Never changes.',
                position: 'sidebar',
              },
            },
            {
              name: 'publishedAt',
              type: 'date',
              admin: {
                readOnly: true,
                description: 'Updated each time the post is republished.',
                position: 'sidebar',
              },
            },
            {
              name: 'wordCount',
              type: 'number',
              admin: {
                readOnly: true,
                description: 'Computed from body on save.',
                position: 'sidebar',
              },
            },
            {
              name: 'readingTime',
              type: 'number',
              admin: {
                readOnly: true,
                description: 'Minutes, computed from body word count at 225 wpm.',
                position: 'sidebar',
              },
            },
          ],
        },
      ],
    },
  ],
}
