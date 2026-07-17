import type { MetadataRoute } from 'next'

import { CASES } from '@/app/(work)/work/case-data'
import { getAllPosts } from '@/lib/blog'
import { urls } from '@/lib/urls'

// urls.* return relative paths outside subdomain mode; sitemap entries must
// be absolute. The resume stays out on purpose: it holds personal data.
const abs = (u: string): string =>
  u.startsWith('http') ? u : `https://www.wesley-m.com${u === '/' ? '' : u}`

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: abs(urls.home) },
    { url: abs(urls.services) },
    { url: abs(urls.contact) },
    { url: abs(urls.playground) },
    { url: abs(urls.work) },
    ...Object.keys(CASES).map((slug) => ({ url: abs(urls.workCase(slug)) })),
    { url: abs(urls.blog) },
    ...getAllPosts().map((post) => ({
      url: abs(urls.blogPost(post.slug)),
      lastModified: post.date,
    })),
  ]
}
