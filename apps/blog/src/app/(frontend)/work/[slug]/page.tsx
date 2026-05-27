import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload, type Where } from 'payload'
import config from '@payload-config'

import { Footer } from '@/components/shared'
import { RichText } from '@/components/RichText'
import { mediaAlt, mediaUrl } from '@/lib/media'

interface RouteParams {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ preview?: string }>
}

const CARD_TONES = ['', 'case-card-figure--alt']

const fetchCase = async (slug: string, includeDrafts = false) => {
  const payload = await getPayload({ config })
  const where: Where = {
    and: includeDrafts
      ? [{ slug: { equals: slug } }]
      : [{ slug: { equals: slug } }, { status: { equals: 'published' } }],
  }
  const { docs } = await payload.find({
    collection: 'case-studies',
    where,
    depth: 2,
    limit: 1,
  })
  return docs[0] ?? null
}

const fetchSiblings = async (excludeSlug: string, includeDrafts = false) => {
  const payload = await getPayload({ config })
  const where: Where = {
    and: includeDrafts
      ? [{ slug: { not_equals: excludeSlug } }]
      : [
          { slug: { not_equals: excludeSlug } },
          { status: { equals: 'published' } },
        ],
  }
  const { docs } = await payload.find({
    collection: 'case-studies',
    where,
    sort: includeDrafts ? '-updatedAt' : '-publishDate',
    depth: 1,
    limit: 2,
  })
  return docs
}

export const generateMetadata = async ({ params }: RouteParams): Promise<Metadata> => {
  const { slug } = await params
  const cs = await fetchCase(slug)
  if (!cs) return { title: 'Not found' }
  const ogImage =
    cs.heroImage && typeof cs.heroImage === 'object' ? mediaUrl(cs.heroImage, 'hero') : undefined
  return {
    title: cs.seoTitle || `${cs.title} — Case study`,
    description: cs.seoDescription || cs.summary || '',
    alternates: { canonical: `/work/${cs.slug}` },
    openGraph: {
      title: cs.seoTitle || cs.title,
      description: cs.seoDescription || cs.summary || '',
      type: 'article',
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  }
}

export default async function CaseStudyPage({ params, searchParams }: RouteParams) {
  const { slug } = await params
  const sp = (await searchParams) ?? {}
  const isPreview = sp.preview === '1' || sp.preview === 'true'
  const cs = await fetchCase(slug, isPreview)
  if (!cs) notFound()
  const siblings = await fetchSiblings(slug, isPreview)

  const industries = Array.isArray(cs.industries)
    ? cs.industries.map((i: { name: string }) => i.name).filter(Boolean)
    : []
  const services = Array.isArray(cs.services)
    ? cs.services.map((s: { name: string }) => s.name).filter(Boolean)
    : []
  const outcomes = Array.isArray(cs.outcomes)
    ? cs.outcomes.filter((o: { value?: string; label?: string }) => o.value && o.label)
    : []
  const hero = cs.heroImage && typeof cs.heroImage === 'object' ? cs.heroImage : null

  return (
    <>
      <section className="case-hero-band case-hero-band--detail" aria-label={`${cs.title} header`}>
        <div className="case-hero-band-inner">
          <nav className="top-bar" aria-label="Breadcrumb">
            <Link href="/work" className="link">
              ← Case studies
            </Link>
          </nav>

          <p className="case-hero-eyebrow">Case study{cs.client ? ` · ${cs.client}` : ''}</p>
          <h1 className="case-hero-title">{cs.title}</h1>

          <div className="case-hero-figure">
            {hero && mediaUrl(hero, 'hero') ? (
              <img src={mediaUrl(hero, 'hero')} alt={mediaAlt(hero)} loading="eager" />
            ) : (
              <div className="case-hero-figure case-hero-figure--empty" aria-hidden="true" />
            )}
            {outcomes.length > 0 ? (
              <div className="case-hero-stats" role="group" aria-label="Headline outcomes">
                {outcomes.slice(0, 3).map((o: { value: string; label: string }, idx: number) => (
                  <div key={idx} className="case-hero-stat">
                    <div className="case-hero-stat-value">{o.value}</div>
                    <div className="case-hero-stat-label">{o.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <main id="main-content">
      <article className="case-article">
        <div className="case-article-inner">
          <aside className="case-rail" aria-label="Engagement facts">
            {industries.length > 0 ? (
              <dl className="case-rail-block">
                <dt>Industry</dt>
                <dd>{industries.join(' · ')}</dd>
              </dl>
            ) : null}
            {services.length > 0 ? (
              <dl className="case-rail-block">
                <dt>Service</dt>
                <dd>{services.slice(0, 4).join(' · ')}</dd>
              </dl>
            ) : null}
            {cs.role ? (
              <dl className="case-rail-block">
                <dt>Role</dt>
                <dd>{cs.role}</dd>
              </dl>
            ) : null}
            {cs.year ? (
              <dl className="case-rail-block">
                <dt>Year</dt>
                <dd>{cs.year}</dd>
              </dl>
            ) : null}
          </aside>

          <div className="case-body">
            {cs.summary ? <p className="case-summary">{cs.summary}</p> : null}
            <div className="prose">
              <RichText data={cs.body as never} />
            </div>
            {cs.externalUrl ? (
              <p className="case-external">
                <a href={cs.externalUrl} target="_blank" rel="noopener noreferrer">
                  Visit {cs.client || 'the project'} →
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </article>

      {siblings.length > 0 ? (
        <section className="case-related" aria-label="More case studies">
          <div className="case-related-inner">
            <p className="case-related-eyebrow">More</p>
            <h2 className="case-related-title">All case studies</h2>
            <div className="case-grid">
              {siblings.map((s, idx) => {
                const sHero = s.heroImage && typeof s.heroImage === 'object' ? s.heroImage : null
                const tone = CARD_TONES[idx % CARD_TONES.length]
                return (
                  <Link key={s.id} href={`/work/${s.slug}`} className="case-card">
                    {sHero && mediaUrl(sHero, 'card') ? (
                      <div className="case-card-figure">
                        <img src={mediaUrl(sHero, 'card')} alt={mediaAlt(sHero)} loading="lazy" />
                      </div>
                    ) : (
                      <div
                        className={`case-card-figure case-card-figure--empty ${tone}`}
                        aria-hidden="true"
                      />
                    )}
                    <div className="case-card-body">
                      {s.client ? <p className="case-card-client">{s.client}</p> : null}
                      <h3 className="case-card-title">{s.summary || s.title}</h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="case-cta-wrap" aria-label="Get in touch">
        <div className="case-cta">
          <div className="case-cta-copy">
            <h2>
              Got a product that needs a <span className="accent">clearer next quarter?</span>
            </h2>
            <p>
              Get a free consultation to learn how I can help your business ship. Discovery first,
              evidence second, opinion last.
            </p>
            <div className="case-cta-actions">
              <Link href="/services" className="case-cta-btn">
                See services →
              </Link>
              <Link href="/work" className="case-cta-btn case-cta-btn--ghost">
                More case studies
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
      </main>

      <Footer currentPath="/work" wrapperClass="footer-inner" />
    </>
  )
}
