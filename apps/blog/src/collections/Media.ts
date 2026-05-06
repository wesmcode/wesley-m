import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'credit', 'updatedAt'],
    description:
      'Every image needs alt text and a credit. Decorative images: tick the decorative flag and leave alt blank.',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
    imageSizes: [
      // Hero (16:9) — featured area on blog index and post header.
      { name: 'hero', width: 1600, height: 900, position: 'centre' },
      // Card (4:3) — card grid on the blog index.
      { name: 'card', width: 800, height: 600, position: 'centre' },
      // Thumb (1:1) — reading list, social fallback.
      { name: 'thumb', width: 400, height: 400, position: 'centre' },
      // Inline — full-bleed source for in-article use, capped width.
      { name: 'inline', width: 1400, height: undefined, position: 'centre' },
    ],
    formatOptions: {
      format: 'webp',
      options: { quality: 82 },
    },
  },
  fields: [
    {
      name: 'decorative',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Tick if this image is purely decorative — alt will be saved as empty per WCAG.',
      },
    },
    {
      name: 'alt',
      type: 'text',
      required: false,
      admin: {
        description: 'Describe the image for screen readers. Required unless decorative.',
        condition: (data) => !data?.decorative,
      },
      validate: (value: unknown, { data }: { data: Record<string, unknown> }) => {
        if (data?.decorative) return true
        if (typeof value !== 'string' || value.trim().length === 0) {
          return 'Alt text is required (or mark this image as decorative).'
        }
        return true
      },
    },
    {
      name: 'credit',
      type: 'text',
      required: true,
      admin: {
        description: 'Photographer / source attribution. Required for every image.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption rendered under the image.',
      },
    },
    {
      name: 'focalPoint',
      type: 'group',
      admin: {
        description: 'Override the focal point used by object-position. Defaults to centre.',
      },
      fields: [
        {
          name: 'x',
          type: 'number',
          min: 0,
          max: 1,
          defaultValue: 0.5,
        },
        {
          name: 'y',
          type: 'number',
          min: 0,
          max: 1,
          defaultValue: 0.5,
        },
      ],
    },
  ],
}
