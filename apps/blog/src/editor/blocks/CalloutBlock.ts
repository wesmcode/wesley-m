import type { Block } from 'payload'

export const CalloutBlock: Block = {
  slug: 'callout',
  interfaceName: 'CalloutBlock',
  labels: { singular: 'Callout', plural: 'Callouts' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'note',
      options: [
        { label: 'Note', value: 'note' },
        { label: 'Tip', value: 'tip' },
        { label: 'Warning', value: 'warning' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      admin: { description: 'Optional heading.' },
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
  ],
}
