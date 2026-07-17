import { Footer, SiteLink } from '@/components/shared'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/format'
import { urls } from '@/lib/urls'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="page">
      <header className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">
          Working notes on product, modernization, growth, and applied AI.
        </p>
      </header>

      <main id="main-content">
        <section aria-label="All posts" className="post-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-row">
              <time className="post-row-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <h2 className="post-row-title">
                <SiteLink href={urls.blogPost(post.slug)} className="post-row-link">
                  {post.title}
                </SiteLink>
              </h2>
              <p className="post-row-desc">{post.description}</p>
            </article>
          ))}
        </section>
      </main>

      <Footer variant="minimal" wrapperClass="page-footer" />
    </div>
  )
}
