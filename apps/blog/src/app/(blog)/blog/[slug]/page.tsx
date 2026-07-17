import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import { Footer } from '@/components/shared'
import { getAllPosts, getPost } from '@/lib/blog'
import { formatDate } from '@/lib/format'
import { urls } from '@/lib/urls'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({ params }: RouteParams): Promise<Metadata> => {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.meta.title}: Wesley Melo`,
    description: post.meta.description,
    alternates: { canonical: urls.blogPost(slug) },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
    },
  }
}

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { content } = await compileMDX({ source: post.content })

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.meta.title,
            description: post.meta.description,
            datePublished: post.meta.date,
            author: {
              '@type': 'Person',
              name: 'Wesley Melo',
              sameAs: 'https://linkedin.com/in/wesmelo',
            },
            mainEntityOfPage: urls.blogPost(slug),
          }),
        }}
      />
      <main id="main-content">
        <article>
          <header className="post-header">
            <h1 className="post-title">{post.meta.title}</h1>
            <p className="post-meta">
              <span>Wesley Melo</span>
              <span className="sep">·</span>
              <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
            </p>
          </header>
          <div className="prose">{content}</div>
        </article>
      </main>
      <Footer variant="minimal" wrapperClass="page-footer" />
    </div>
  )
}
