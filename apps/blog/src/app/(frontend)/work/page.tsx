import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { mediaAlt, mediaUrl } from '@/lib/media'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Case studies — Wesley Melo',
  description:
    'Selected work from agency, platform, and AI engagements. The proof is in the shipping.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case studies — Wesley Melo',
    description:
      'Selected work from agency, platform, and AI engagements. The proof is in the shipping.',
    type: 'website',
  },
}

const CARD_TONES = ['', 'case-card-figure--alt']

interface PageProps {
  searchParams?: Promise<{ preview?: string }>
}

export default async function WorkIndex({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {}
  const isPreview = params.preview === '1' || params.preview === 'true'
  const payload = await getPayload({ config })

  const { docs: cases } = await payload.find({
    collection: 'case-studies',
    where: isPreview ? {} : { status: { equals: 'published' } },
    sort: isPreview ? '-updatedAt' : '-publishDate',
    depth: 1,
    limit: 100,
  })

  return (
    <>
      <section className="case-hero-band case-hero-band--index" aria-label="Case studies header">
        <div className="case-hero-band-inner">
          <nav className="top-bar" aria-label="Breadcrumb">
            <Link href="/" className="link">
              ← Home
            </Link>
          </nav>

          <p className="case-hero-eyebrow">Selected work</p>
          <h1 className="case-hero-title">Case studies</h1>

          <div className="case-hero-row">
            <div className="case-hero-chip" aria-label="Satisfied clients">
              <span className="case-hero-chip-dots" aria-hidden="true">
                <span className="case-hero-chip-dot">C</span>
                <span className="case-hero-chip-dot">L</span>
                <span className="case-hero-chip-dot">T</span>
              </span>
              <span className="case-hero-chip-meta">
                <strong>Engagements that shipped</strong>
                <span>agency · platform · AI</span>
              </span>
            </div>
            <p className="case-hero-lede">
              The proof is in the shipping. A decade of product work — read how the engagements
              actually went, the calls that mattered, and the numbers that moved.
            </p>
          </div>
        </div>
      </section>

      <main id="main-content" className="case-section">
        <div className="case-section-inner">
          <p className="case-section-eyebrow">Case studies</p>
          <h2 className="case-section-title">Recent work</h2>

          {cases.length === 0 ? (
            <p className="empty-state">
              No case studies published yet. Visit <code>/admin</code> to add the first one.
            </p>
          ) : (
            <section aria-label="Case studies" className="case-grid">
              {cases.map((cs, idx) => {
                const hero = cs.heroImage && typeof cs.heroImage === 'object' ? cs.heroImage : null
                const tone = CARD_TONES[idx % CARD_TONES.length]
                return (
                  <Link key={cs.id} href={`/work/${cs.slug}`} className="case-card">
                    {hero && mediaUrl(hero, 'card') ? (
                      <div className="case-card-figure">
                        <img src={mediaUrl(hero, 'card')} alt={mediaAlt(hero)} loading="lazy" />
                      </div>
                    ) : (
                      <div
                        className={`case-card-figure case-card-figure--empty ${tone}`}
                        aria-hidden="true"
                      />
                    )}
                    <div className="case-card-body">
                      {cs.client ? <p className="case-card-client">{cs.client}</p> : null}
                      <h3 className="case-card-title">{cs.summary || cs.title}</h3>
                    </div>
                  </Link>
                )
              })}
            </section>
          )}
        </div>
      </main>

      <section className="case-cta-wrap" aria-label="Get in touch">
        <div className="case-cta">
          <div className="case-cta-copy">
            <h2>
              Got a product that needs a <span className="accent">clearer next quarter?</span>
            </h2>
            <p>
              Two ways in — a fractional engagement or a focused product audit. Discovery first,
              evidence second, opinion last.
            </p>
            <div className="case-cta-actions">
              <Link href="/about" className="case-cta-btn">
                Get in touch →
              </Link>
              <Link href="/about#engage" className="case-cta-btn case-cta-btn--ghost">
                Engagement tracks
              </Link>
            </div>
          </div>
          <div className="case-cta-mark" aria-hidden="true">
            <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
              <g fill="#E8C9A6">
                <rect x="44" y="10" width="12" height="80" rx="2" />
                <rect
                  x="44"
                  y="10"
                  width="12"
                  height="80"
                  rx="2"
                  transform="rotate(45 50 50)"
                />
                <rect
                  x="44"
                  y="10"
                  width="12"
                  height="80"
                  rx="2"
                  transform="rotate(90 50 50)"
                />
                <rect
                  x="44"
                  y="10"
                  width="12"
                  height="80"
                  rx="2"
                  transform="rotate(135 50 50)"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <footer id="site-footer" aria-label="Site footer">
        <div className="footer-inner">
          <div className="footer-row">
            <Link href="/" className="footer-brand">
              Wesley Melo
            </Link>
            <nav className="footer-nav" aria-label="Footer navigation">
              <Link href="/" className="link">
                Home
              </Link>
              <Link href="/work" className="link">
                Case studies
              </Link>
              <Link href="/blog" className="link">
                Blog
              </Link>
            </nav>
          </div>
          <div className="footer-meta">© 2026 Wesley Melo</div>
        </div>
      </footer>
    </>
  )
}
