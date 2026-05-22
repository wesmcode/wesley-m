/**
 * Lightweight Lexical → React renderer for v0.
 * Handles paragraph, heading 1–3, list, listitem, link, blockquote, horizontalrule,
 * upload (image), code, line break, and our custom blocks: pullQuote, callout,
 * embed, divider.
 *
 * Keeps text formatting flags (bold/italic/underline/strikethrough/code/sub/sup)
 * via Lexical's bitmask. We do not render comment marks, mentions, or other
 * decorator-only nodes since v0 doesn't enable them.
 */
import type { ReactNode } from 'react'
import { mediaAlt, mediaCredit, mediaUrl, focalPointStyle } from '@/lib/media'
import { resolveEmbed } from '@/lib/embed'

// Lexical text format bitmask — see @lexical/core/LexicalConstants.
const IS_BOLD = 1
const IS_ITALIC = 1 << 1
const IS_STRIKETHROUGH = 1 << 2
const IS_UNDERLINE = 1 << 3
const IS_CODE = 1 << 4
const IS_SUBSCRIPT = 1 << 5
const IS_SUPERSCRIPT = 1 << 6

interface LexicalRoot {
  root?: { children?: LexicalNode[] }
}

interface LexicalNode {
  type?: string
  version?: number
  children?: LexicalNode[]
  // text node
  text?: string
  format?: number | string
  // heading
  tag?: string
  // list
  listType?: 'bullet' | 'number' | 'check'
  // link
  url?: string
  fields?: Record<string, unknown>
  rel?: string
  target?: string
  // upload / block — Payload-specific shape
  relationTo?: string
  value?: Record<string, unknown> | string | number
  // block (custom blocks attach a "fields" object with the block data and a "blockType")
  blockType?: string
}

const wrapText = (text: string, format: number, key: string): ReactNode => {
  let node: ReactNode = text
  if (format & IS_CODE) node = <code key={`${key}-c`}>{node}</code>
  if (format & IS_BOLD) node = <strong key={`${key}-b`}>{node}</strong>
  if (format & IS_ITALIC) node = <em key={`${key}-i`}>{node}</em>
  if (format & IS_UNDERLINE) node = <u key={`${key}-u`}>{node}</u>
  if (format & IS_STRIKETHROUGH) node = <s key={`${key}-s`}>{node}</s>
  if (format & IS_SUBSCRIPT) node = <sub key={`${key}-sub`}>{node}</sub>
  if (format & IS_SUPERSCRIPT) node = <sup key={`${key}-sup`}>{node}</sup>
  return <span key={key}>{node}</span>
}

const renderChildren = (children: LexicalNode[] | undefined, keyPrefix: string): ReactNode => {
  if (!children) return null
  return children.map((child, idx) => renderNode(child, `${keyPrefix}-${idx}`))
}

const renderNode = (node: LexicalNode, key: string): ReactNode => {
  if (!node || !node.type) return null

  switch (node.type) {
    case 'text': {
      const fmt = typeof node.format === 'number' ? node.format : 0
      return wrapText(node.text ?? '', fmt, key)
    }
    case 'linebreak':
      return <br key={key} />
    case 'paragraph':
      return <p key={key}>{renderChildren(node.children, key)}</p>
    case 'heading': {
      const tag = (node.tag as 'h1' | 'h2' | 'h3') || 'h2'
      const Tag = tag
      return <Tag key={key}>{renderChildren(node.children, key)}</Tag>
    }
    case 'quote':
      return <blockquote key={key}>{renderChildren(node.children, key)}</blockquote>
    case 'list': {
      const Tag = node.listType === 'number' ? 'ol' : 'ul'
      return <Tag key={key}>{renderChildren(node.children, key)}</Tag>
    }
    case 'listitem':
      return <li key={key}>{renderChildren(node.children, key)}</li>
    case 'link':
    case 'autolink': {
      const fields = (node.fields as { url?: string; newTab?: boolean } | undefined) || {}
      const href = fields.url || node.url || '#'
      const target = fields.newTab ? '_blank' : undefined
      const rel = fields.newTab ? 'noopener noreferrer' : undefined
      return (
        <a key={key} href={href} target={target} rel={rel}>
          {renderChildren(node.children, key)}
        </a>
      )
    }
    case 'horizontalrule':
      return <hr key={key} />
    case 'upload': {
      const value = node.value as Record<string, unknown> | undefined
      if (!value) return null
      const fields = (node.fields as { caption?: string; size?: string } | undefined) || {}
      const sizeClass = fields.size === 'wide' ? 'size-wide' : fields.size === 'fullBleed' ? 'size-fullBleed' : 'size-inline'
      const credit = mediaCredit(value)
      return (
        <figure key={key} className={sizeClass}>
          <img
            src={mediaUrl(value, 'inline')}
            alt={mediaAlt(value)}
            style={focalPointStyle(value)}
            loading="lazy"
          />
          {(fields.caption || credit) ? (
            <figcaption>
              {fields.caption || ''}
              {credit ? <span className="credit">{credit}</span> : null}
            </figcaption>
          ) : null}
        </figure>
      )
    }
    case 'block': {
      const fields = (node.fields as Record<string, unknown> | undefined) || {}
      const blockType = (node as LexicalNode & { fields?: { blockType?: string } }).fields?.blockType
      if (blockType === 'pullQuote') {
        const f = fields as { quote?: string; attribution?: string; attributionSource?: string }
        const cite = [f.attribution, f.attributionSource].filter(Boolean).join(', ')
        return (
          <figure key={key} className="pull-quote">
            <div className="pull-quote-text">{f.quote}</div>
            {cite ? <figcaption className="pull-quote-attribution">{cite}</figcaption> : null}
          </figure>
        )
      }
      if (blockType === 'callout') {
        const f = fields as { variant?: string; title?: string; body?: string }
        const variant = f.variant || 'note'
        return (
          <aside key={key} className={`callout callout--${variant}`}>
            {f.title ? <div className="callout-title">{f.title}</div> : null}
            <div className="callout-body">
              <p>{f.body}</p>
            </div>
          </aside>
        )
      }
      if (blockType === 'embed') {
        const f = fields as { url?: string; caption?: string }
        if (!f.url) return null
        const info = resolveEmbed(f.url)
        return (
          <div key={key} className={`embed-wrapper embed-${info.kind}`}>
            <div className="embed-frame">
              {info.kind === 'twitter' ? (
                <blockquote dangerouslySetInnerHTML={{ __html: info.html ?? '' }} />
              ) : (
                <iframe
                  src={info.src}
                  title={f.caption || `${info.kind} embed`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
            {f.caption ? <figcaption>{f.caption}</figcaption> : null}
          </div>
        )
      }
      if (blockType === 'divider') {
        const f = fields as { style?: string }
        return f.style === 'asterisks' ? (
          <p key={key} style={{ textAlign: 'center', letterSpacing: '0.6em' }}>
            * * *
          </p>
        ) : (
          <hr key={key} />
        )
      }
      return null
    }
    default:
      // Unknown nodes still render their children so we don't drop content.
      return <span key={key}>{renderChildren(node.children, key)}</span>
  }
}

export const RichText = ({ data }: { data: LexicalRoot | null | undefined }) => {
  const root = data?.root
  if (!root || !Array.isArray(root.children)) return null
  return <>{root.children.map((n, i) => renderNode(n, `n-${i}`))}</>
}
