import type { CollectionConfig } from 'payload'

export const Sections: CollectionConfig = {
  slug: 'sections',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order', 'updatedAt'],
    description:
      'Top-level verticals used to group posts (e.g., Briefs, Satire, Essays). Each section gets its own landing page at /<slug>.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'Display name (e.g., "Fractional PM Brief").' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-safe identifier. Lowercase, hyphenated. Becomes /<slug>.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      maxLength: 120,
      admin: {
        description:
          'One-line hook shown under the section title on the landing page (e.g., "Thoughts and learnings from a Fractional PM").',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 320,
      admin: {
        description:
          'Longer pitch for the section. Rendered on the landing page header and in SEO description.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 100,
      admin: {
        description: 'Display order in navigation and section lists. Lower appears first.',
      },
    },
  ],
}
