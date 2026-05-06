type SizeKey = 'hero' | 'card' | 'thumb' | 'inline'

interface MediaSize {
  url?: string
  filename?: string
}

interface MediaDoc {
  url?: string
  filename?: string
  alt?: string
  credit?: string
  caption?: string
  focalPoint?: { x?: number; y?: number }
  sizes?: Partial<Record<SizeKey, MediaSize>>
}

export const mediaUrl = (media: MediaDoc | string | null | undefined, size?: SizeKey): string => {
  if (!media || typeof media !== 'object') return ''
  const sized = size && media.sizes?.[size]?.url
  return sized || media.url || ''
}

export const focalPointStyle = (
  media: MediaDoc | string | null | undefined,
): { objectPosition: string } => {
  if (!media || typeof media !== 'object' || !media.focalPoint) {
    return { objectPosition: '50% 50%' }
  }
  const x = typeof media.focalPoint.x === 'number' ? media.focalPoint.x : 0.5
  const y = typeof media.focalPoint.y === 'number' ? media.focalPoint.y : 0.5
  return { objectPosition: `${x * 100}% ${y * 100}%` }
}

export const mediaAlt = (media: MediaDoc | string | null | undefined): string => {
  if (!media || typeof media !== 'object') return ''
  return media.alt ?? ''
}

export const mediaCredit = (media: MediaDoc | string | null | undefined): string => {
  if (!media || typeof media !== 'object') return ''
  return media.credit ?? ''
}
