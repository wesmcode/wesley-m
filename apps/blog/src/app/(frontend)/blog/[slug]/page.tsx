import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Footer } from '@/components/shared'
import { RichText } from '@/components/RichText'
import { formatDate, readingTimeLabel } from '@/lib/format'
import { mediaAlt, mediaCredit, mediaUrl } from '@/lib/media'

interface RouteParams {
  params: Promise<{ slug: string }>
}

const fetchPost = async (slug: string) => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }],
    },
    depth: 2,
    limit: 1,
  })
  return docs[0] ?? null
}

export const generateMetadata = async ({ params }: RouteParams): Promise<Metadata> => {
  const { slug } = await params
  const post = await fetchPost(slug)
  if (!post) return { title: 'Not found' }
  const ogImage = post.featuredImage && typeof post.featuredImage === 'object'
    ? mediaUrl(post.featuredImage, 'hero')
    : undefined
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.dek || '',
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.dek || '',
      type: 'article',
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params
  const post = await fetchPost(slug)
  if (!post) notFound()

  const author =
    Array.isArray(post.byline) && post.byline.length > 0
      ? post.byline.map((a: { name: string }) => a.name).join(', ')
      : 'Wesley Melo'

  return (
    <>
      <div className="page">
        <article>
          <header className="post-header">
            {(() => {
              const section =
                post.primarySection && typeof post.primarySection === 'object'
                  ? (post.primarySection as { name?: string }).name
                  : null
              const kicker = post.kicker || section
              return kicker ? <div className="post-kicker">{kicker}</div> : null
            })()}
            <h1 className="post-title">{post.title}</h1>
            {post.dek ? <p className="post-dek">{post.dek}</p> : null}
            <div className="post-meta">
              <span>{author}</span>
              <span className="sep">·</span>
              <span>{formatDate(post.publishDate)}</span>
              <span className="sep">·</span>
              <span>{readingTimeLabel(post.readingTime)}</span>
            </div>
          </header>

          {post.featuredImage && typeof post.featuredImage === 'object' ? (
            <div className="post-hero">
              <div className="post-hero-figure">
                <img
                  src={mediaUrl(post.featuredImage, 'hero')}
                  alt={mediaAlt(post.featuredImage)}
                  loading="eager"
                />
              </div>
              {mediaCredit(post.featuredImage) ? (
                <div className="post-hero-credit">{mediaCredit(post.featuredImage)}</div>
              ) : null}
            </div>
          ) : null}

          <div className="prose" id="main-content">
            <RichText data={post.body as never} />
          </div>
        </article>
      </div>
      <Footer variant="minimal" wrapperClass="footer-inner" />
    </>
  )
}
