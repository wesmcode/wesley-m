import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  draft: boolean
}

export interface Post {
  meta: PostMeta
  content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

// Filenames may carry a date prefix for chronological sorting on disk
// (2026-07-the-blog-is-back.mdx); the slug is the part after it.
const slugFromFilename = (filename: string): string =>
  filename.replace(/\.mdx$/, '').replace(/^\d{4}-\d{2}(-\d{2})?-/, '')

const readPost = (dir: string, filename: string): Post => {
  const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
  const { data, content } = matter(raw)

  for (const field of ['title', 'description', 'date'] as const) {
    if (!data[field]) {
      throw new Error(`content/blog/${filename}: missing required frontmatter field "${field}"`)
    }
  }

  return {
    meta: {
      title: String(data.title),
      description: String(data.description),
      date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
      slug: data.slug ? String(data.slug) : slugFromFilename(filename),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      draft: data.draft === true,
    },
    content,
  }
}

const readPosts = (dir: string): Post[] => {
  const posts = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => readPost(dir, f))
    .filter((p) => !(p.meta.draft && process.env.NODE_ENV === 'production'))
  return posts.sort((a, b) => b.meta.date.localeCompare(a.meta.date))
}

export const getAllPosts = (dir: string = CONTENT_DIR): PostMeta[] =>
  readPosts(dir).map((p) => p.meta)

export const getPost = (slug: string, dir: string = CONTENT_DIR): Post | null =>
  readPosts(dir).find((p) => p.meta.slug === slug) ?? null
