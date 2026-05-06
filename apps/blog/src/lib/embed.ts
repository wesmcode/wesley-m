// Resolve an embeddable URL to an iframe-safe URL for our four supported providers.
// Privacy-preferring where the provider offers it (e.g., youtube-nocookie).

export type EmbedKind = 'youtube' | 'vimeo' | 'twitter' | 'spotify' | 'unknown'

export interface EmbedInfo {
  kind: EmbedKind
  src: string
  html?: string
  rawUrl: string
}

const youtubeIdFrom = (url: URL): string | null => {
  if (url.hostname === 'youtu.be') return url.pathname.slice(1) || null
  if (url.hostname.endsWith('youtube.com')) {
    if (url.pathname.startsWith('/watch')) return url.searchParams.get('v')
    if (url.pathname.startsWith('/embed/')) return url.pathname.split('/')[2] || null
    if (url.pathname.startsWith('/shorts/')) return url.pathname.split('/')[2] || null
  }
  return null
}

const vimeoIdFrom = (url: URL): string | null => {
  if (url.hostname.endsWith('vimeo.com')) {
    const last = url.pathname.split('/').filter(Boolean).pop()
    return last && /^\d+$/.test(last) ? last : null
  }
  return null
}

export const resolveEmbed = (rawUrl: string): EmbedInfo => {
  let url: URL
  try {
    url = new URL(rawUrl.trim())
  } catch {
    return { kind: 'unknown', src: rawUrl, rawUrl }
  }

  const yt = youtubeIdFrom(url)
  if (yt) {
    return {
      kind: 'youtube',
      src: `https://www.youtube-nocookie.com/embed/${yt}`,
      rawUrl,
    }
  }

  const vimeo = vimeoIdFrom(url)
  if (vimeo) {
    return { kind: 'vimeo', src: `https://player.vimeo.com/video/${vimeo}`, rawUrl }
  }

  if (url.hostname.endsWith('twitter.com') || url.hostname === 'x.com' || url.hostname.endsWith('.x.com')) {
    return {
      kind: 'twitter',
      src: rawUrl,
      html: `<blockquote class="twitter-tweet"><a href="${rawUrl}">${rawUrl}</a></blockquote>`,
      rawUrl,
    }
  }

  if (url.hostname.endsWith('spotify.com')) {
    // Spotify share links: https://open.spotify.com/track/<id>  → /embed/track/<id>
    const parts = url.pathname.split('/').filter(Boolean)
    if (parts.length >= 2) {
      return {
        kind: 'spotify',
        src: `https://open.spotify.com/embed/${parts[0]}/${parts[1]}`,
        rawUrl,
      }
    }
  }

  return { kind: 'unknown', src: rawUrl, rawUrl }
}
