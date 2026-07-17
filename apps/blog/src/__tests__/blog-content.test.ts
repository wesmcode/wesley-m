import { describe, it, expect, vi, afterEach } from 'vitest'
import fs from 'fs'
import os from 'os'
import path from 'path'

import { getAllPosts, getPost } from '@/lib/blog'

const write = (dir: string, name: string, frontmatter: string, body = 'Body text.') =>
  fs.writeFileSync(path.join(dir, name), `---\n${frontmatter}\n---\n\n${body}\n`)

const makeFixtureDir = (): string => fs.mkdtempSync(path.join(os.tmpdir(), 'blog-fixture-'))

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('blog content loader', () => {
  it('returns the seed post from the real content directory', () => {
    const posts = getAllPosts()
    expect(posts.length).toBeGreaterThan(0)
    const seed = posts.find((p) => p.slug === 'the-blog-is-back')
    expect(seed).toBeTruthy()
    expect(seed!.title).toBe('The blog is back')
    expect(seed!.description).toBeTruthy()
    expect(seed!.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('derives the slug from the filename, stripping the date prefix', () => {
    const dir = makeFixtureDir()
    write(dir, '2026-01-15-my-post.mdx', 'title: T\ndescription: D\ndate: 2026-01-15')
    expect(getAllPosts(dir)[0].slug).toBe('my-post')
  })

  it('prefers an explicit frontmatter slug over the filename', () => {
    const dir = makeFixtureDir()
    write(dir, '2026-01-my-post.mdx', 'title: T\ndescription: D\ndate: 2026-01-15\nslug: custom')
    expect(getAllPosts(dir)[0].slug).toBe('custom')
  })

  it('sorts posts by date descending', () => {
    const dir = makeFixtureDir()
    write(dir, 'older.mdx', 'title: Old\ndescription: D\ndate: 2025-01-01')
    write(dir, 'newer.mdx', 'title: New\ndescription: D\ndate: 2026-06-01')
    expect(getAllPosts(dir).map((p) => p.title)).toEqual(['New', 'Old'])
  })

  it('throws at build time on missing required frontmatter', () => {
    const dir = makeFixtureDir()
    write(dir, 'broken.mdx', 'title: Only a title')
    expect(() => getAllPosts(dir)).toThrow(/missing required frontmatter/)
  })

  it('filters drafts in production and keeps them otherwise', () => {
    const dir = makeFixtureDir()
    write(dir, 'live.mdx', 'title: Live\ndescription: D\ndate: 2026-01-01')
    write(dir, 'wip.mdx', 'title: WIP\ndescription: D\ndate: 2026-02-01\ndraft: true')

    expect(getAllPosts(dir)).toHaveLength(2)

    vi.stubEnv('NODE_ENV', 'production')
    expect(getAllPosts(dir).map((p) => p.title)).toEqual(['Live'])
  })

  it('getPost returns meta and content for a known slug, null otherwise', () => {
    const dir = makeFixtureDir()
    write(dir, 'hello.mdx', 'title: Hello\ndescription: D\ndate: 2026-01-01', 'The content.')
    const post = getPost('hello', dir)
    expect(post).toBeTruthy()
    expect(post!.content).toContain('The content.')
    expect(getPost('nope', dir)).toBeNull()
  })
})
