import type { Block } from 'payload'

const supported = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com|twitter\.com|x\.com|spotify\.com|open\.spotify\.com)/i

export const EmbedBlock: Block = {
  slug: 'embed',
  interfaceName: 'EmbedBlock',
  labels: { singular: 'Embed', plural: 'Embeds' },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'Paste a link to a YouTube, Vimeo, X/Twitter, or Spotify item.',
      },
      validate: (value: unknown) => {
        if (typeof value !== 'string' || value.length === 0) return 'URL is required.'
        if (!supported.test(value)) {
          return 'Only YouTube, Vimeo, X/Twitter, and Spotify links are supported in v0.'
        }
        return true
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: { description: 'Optional caption rendered under the embed.' },
    },
  ],
}
