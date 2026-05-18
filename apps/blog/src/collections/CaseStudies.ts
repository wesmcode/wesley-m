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

const enforcePublishGate: CollectionBeforeChangeHook = async ({ data, originalDoc, req }) => {
  const next = { ...(originalDoc ?? {}), ...data } as Record<string, unknown>
  const wantsPublish = next.status === 'published'

  if (
    typeof next.title === 'string' &&
    (!next.slug || typeof next.slug !== 'string' || !next.slug)
  ) {
    next.slug = slugify(next.title)
    data.slug = next.slug
  }

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
  if (!isFilled(next.client)) missing.push('client')
  if (!isFilled(next.summary)) missing.push('summary')
  if (!isFilled(next.heroImage)) missing.push('hero image')
  if (!isFilled(next.seoTitle)) missing.push('SEO title')
  if (!isFilled(next.seoDescription)) missing.push('SEO description')
  if (!isFilled(next.publishDate)) missing.push('publish date')

  if (isFilled(next.heroImage)) {
    try {
      const heroId =
        typeof next.heroImage === 'object' && next.heroImage !== null && 'id' in (next.heroImage as Record<string, unknown>)
          ? ((next.heroImage as { id: string | number }).id)
          : (next.heroImage as string | number)
      const media = await req.payload.findByID({ collection: 'media', id: heroId, depth: 0 })
      const decorative = (media as { decorative?: boolean }).decorative
      const altOk =
        decorative ||
        (typeof (media as { alt?: string }).alt === 'string' &&
          (media as { alt?: string }).alt!.trim().length > 0)
      const creditOk =
        typeof (media as { credit?: string }).credit === 'string' &&
        (media as { credit?: string }).credit!.trim().length > 0
      if (!altOk) missing.push('hero image alt text')
      if (!creditOk) missing.push('hero image credit')
    } catch {
      missing.push('hero image (could not load)')
    }
  }

  if (missing.length > 0) {
    throw new Error(`Cannot publish — missing or invalid: ${missing.join(', ')}.`)
  }

  return data
}

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: { singular: 'Case Study', plural: 'Case Studies' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'status', 'publishDate', 'updatedAt'],
    description:
      'Portfolio case studies. Save as draft any time; publish when title, client, summary, hero image, SEO fields, and publish date are filled.',
  },
  access: {
    read: ({ req }) => {
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
              maxLength: 120,
              admin: { description: 'Headline for the case study. Max 120 characters.' },
            },
            {
              name: 'summary',
              type: 'textarea',
              admin: {
                description:
                  'One- to two-sentence overview that appears under the headline and on the index card. Required to publish.',
              },
            },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Hero illustration / image. Required to publish.',
              },
            },
            {
              name: 'body',
              type: 'richText',
              editor: buildEditor(),
              admin: {
                description:
                  'The case story. Suggested sections: Overview, Challenge, My Role, Strategy & Approach, Results, Why This Worked, Final Takeaway. Use / for the block menu.',
              },
            },
          ],
        },
        {
          label: 'Outcomes',
          fields: [
            {
              name: 'outcomes',
              type: 'array',
              labels: { singular: 'Outcome', plural: 'Outcomes' },
              admin: {
                description:
                  'Highlight metrics shown as stat cards (e.g., "+60,000 customers", "9x growth"). Keep to 2–4 for impact.',
              },
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  maxLength: 24,
                  admin: { description: 'Big number or short phrase (e.g., "+60,000", "9x", "3 quarters").' },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  maxLength: 80,
                  admin: { description: 'What the number means (e.g., "new customers", "organic growth").' },
                },
              ],
            },
          ],
        },
        {
          label: 'Metadata',
          fields: [
            {
              name: 'client',
              type: 'text',
              admin: { description: 'Client or company name. Required to publish.' },
            },
            {
              name: 'role',
              type: 'text',
              admin: { description: 'Role on the engagement (e.g., "Fractional PM", "Growth Advisor").' },
            },
            {
              name: 'year',
              type: 'text',
              maxLength: 16,
              admin: { description: 'Year or year range (e.g., "2024", "2023–2024").' },
            },
            {
              name: 'industries',
              type: 'array',
              labels: { singular: 'Industry', plural: 'Industries' },
              admin: { description: 'Sectors the engagement touched (e.g., Pet care, SaaS).' },
              fields: [{ name: 'name', type: 'text', required: true }],
            },
            {
              name: 'services',
              type: 'array',
              labels: { singular: 'Service', plural: 'Services' },
              admin: { description: 'Services rendered (e.g., Product strategy, Roadmap, Discovery).' },
              fields: [{ name: 'name', type: 'text', required: true }],
            },
            {
              name: 'externalUrl',
              type: 'text',
              admin: {
                description: 'Optional link to the live product or company site.',
              },
            },
            {
              name: 'publishDate',
              type: 'date',
              admin: {
                description: 'When this case study should appear as published. Required to publish.',
                date: { pickerAppearance: 'dayAndTime' },
              },
            },
            {
              name: 'slug',
              type: 'text',
              unique: true,
              index: true,
              admin: { description: 'URL slug. Auto-derived from title if left blank.' },
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
                description: 'Set once when this case study is first published. Never changes.',
                position: 'sidebar',
              },
            },
            {
              name: 'publishedAt',
              type: 'date',
              admin: {
                readOnly: true,
                description: 'Updated each time the case study is republished.',
                position: 'sidebar',
              },
            },
          ],
        },
      ],
    },
  ],
}
