import type { Block } from 'payload'

export const DividerBlock: Block = {
  slug: 'divider',
  interfaceName: 'DividerBlock',
  labels: { singular: 'Divider', plural: 'Dividers' },
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'rule',
      options: [
        { label: 'Hairline rule', value: 'rule' },
        { label: 'Three asterisks', value: 'asterisks' },
      ],
    },
  ],
}
