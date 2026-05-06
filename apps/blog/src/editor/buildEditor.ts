import {
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
  BlockquoteFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { PullQuoteBlock } from './blocks/PullQuoteBlock'
import { CalloutBlock } from './blocks/CalloutBlock'
import { EmbedBlock } from './blocks/EmbedBlock'
import { DividerBlock } from './blocks/DividerBlock'

export const buildEditor = () =>
  lexicalEditor({
    features: () => [
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      InlineCodeFeature(),
      SubscriptFeature(),
      SuperscriptFeature(),
      LinkFeature({
        enabledCollections: ['posts'],
      }),
      OrderedListFeature(),
      UnorderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      UploadFeature({
        collections: {
          media: {
            fields: [
              { name: 'caption', type: 'text' },
              {
                name: 'size',
                type: 'select',
                defaultValue: 'inline',
                options: [
                  { label: 'Inline', value: 'inline' },
                  { label: 'Wide', value: 'wide' },
                  { label: 'Full bleed', value: 'fullBleed' },
                ],
              },
            ],
          },
        },
      }),
      BlocksFeature({
        blocks: [PullQuoteBlock, CalloutBlock, EmbedBlock, DividerBlock],
      }),
      InlineToolbarFeature(),
      FixedToolbarFeature(),
    ],
  })
