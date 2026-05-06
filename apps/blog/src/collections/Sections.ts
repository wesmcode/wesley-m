import type { CollectionConfig } from 'payload'

export const Sections: CollectionConfig = {
  slug: 'sections',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
    description: 'Top-level sections used as a post’s primary section (e.g., Essays, Notes, Reviews).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-safe identifier. Lowercase, hyphenated.',
      },
    },
  ],
}
