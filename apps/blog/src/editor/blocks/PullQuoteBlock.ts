import type { Block } from 'payload'

export const PullQuoteBlock: Block = {
  slug: 'pullQuote',
  interfaceName: 'PullQuoteBlock',
  labels: { singular: 'Pull quote', plural: 'Pull quotes' },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: { description: 'The quoted text.' },
    },
    {
      name: 'attribution',
      type: 'text',
      admin: { description: 'Speaker name (optional).' },
    },
    {
      name: 'attributionSource',
      type: 'text',
      admin: { description: 'Title or publication (optional).' },
    },
  ],
}
