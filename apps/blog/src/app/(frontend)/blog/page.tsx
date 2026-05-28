import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Footer } from '@/components/shared'
import { formatDate, readingTimeLabel } from '@/lib/format'
import { mediaUrl } from '@/lib/media'

export const dynamic = 'force-dynamic'

const sectionName = (section: unknown): string => {
  if (!section || typeof section !== 'object') return ''
  const s = section as { name?: string }
  return typeof s.name === 'string' ? s.name : ''
}

export default async function BlogIndex() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    sort: '-publishDate',
    depth: 1,
    limit: 50,
  })

  const [featured, ...rest] = posts

  return (
    <>
      <div className="page">
        <header className="site-header">
          <h1>Direction Challenge</h1>
          <p className="site-subtitle">
            free to be chronically-online-tech-savvy-satirist, doom-scrolling specialists on digital
          </p>
        </header>

        <main id="main-content">
          {featured ? (
            <article className="featured" aria-label="Featured post">
              <Link href={`/blog/${featured.slug}`} className="featured-link">
                <div className="featured-grid">
                  <div className="featured-content">
                    {sectionName(featured.primarySection) ? (
                      <p className="card-section">{sectionName(featured.primarySection)}</p>
                    ) : null}
                    <h2 className="featured-title">{featured.title}</h2>
                    {featured.dek ? <p className="featured-dek">{featured.dek}</p> : null}
                    <div className="featured-meta">
                      <span>{formatDate(featured.publishDate)}</span>
                      <span className="sep">·</span>
                      <span>{readingTimeLabel(featured.readingTime)}</span>
                    </div>
                  </div>
                  {featured.featuredImage && typeof featured.featuredImage === 'object' ? (
                    <div className="featured-figure">
                      <img
                        src={mediaUrl(featured.featuredImage, 'card')}
                        alt={featured.featuredImage.alt || ''}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              </Link>
            </article>
          ) : (
            <p style={{ padding: '40px 0', color: 'var(--fg-quiet)' }}>
              No published posts yet. Visit /admin to write your first one.
            </p>
          )}

          {rest.length > 0 ? (
            <section aria-label="More posts">
              {rest.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="archive-row">
                  <div className="archive-meta">
                    {sectionName(post.primarySection) ? (
                      <>
                        <span className="card-section">{sectionName(post.primarySection)}</span>
                        <span className="sep">·</span>
                      </>
                    ) : null}
                    <span>{formatDate(post.publishDate)}</span>
                    <span className="sep">·</span>
                    <span>{readingTimeLabel(post.readingTime)}</span>
                  </div>
                  <h3 className="archive-row-title">{post.title}</h3>
                  {post.dek ? <p className="archive-dek">{post.dek}</p> : null}
                </Link>
              ))}
            </section>
          ) : null}
        </main>
      </div>
      <Footer variant="minimal" wrapperClass="footer-inner" />
    </>
  )
}
