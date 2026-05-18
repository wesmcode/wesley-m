import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { RichText } from '@/components/RichText'
import { mediaAlt, mediaCredit, mediaUrl } from '@/lib/media'

interface RouteParams {
  params: Promise<{ slug: string }>
}

const fetchCase = async (slug: string) => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: {
      and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }],
    },
    depth: 2,
    limit: 1,
  })
  return docs[0] ?? null
}

const fetchSiblings = async (excludeSlug: string) => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: {
      and: [
        { slug: { not_equals: excludeSlug } },
        { status: { equals: 'published' } },
      ],
    },
    sort: '-publishDate',
    depth: 1,
    limit: 4,
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

export default async function CaseStudyPage({ params }: RouteParams) {
  const { slug } = await params
  const cs = await fetchCase(slug)
  if (!cs) notFound()
  const siblings = await fetchSiblings(slug)

  const industries = Array.isArray(cs.industries)
    ? cs.industries.map((i: { name: string }) => i.name).filter(Boolean)
    : []
  const services = Array.isArray(cs.services)
    ? cs.services.map((s: { name: string }) => s.name).filter(Boolean)
    : []
  const outcomes = Array.isArray(cs.outcomes)
    ? cs.outcomes.filter((o: { value?: string; label?: string }) => o.value && o.label)
    : []

  return (
    <div className="page page--wide">
      <nav className="top-bar" aria-label="Breadcrumb">
        <Link href="/work" className="link">
          ← Case studies
        </Link>
      </nav>

      <article>
        <header className="case-header">
          <p className="vertical-eyebrow">Case study</p>
          <h1 className="case-title">{cs.title}</h1>
          {cs.summary ? <p className="case-summary">{cs.summary}</p> : null}

          {(cs.client || cs.role || cs.year) && (
            <dl className="case-facts">
              {cs.client ? (
                <div>
                  <dt>Client</dt>
                  <dd>{cs.client}</dd>
                </div>
              ) : null}
              {cs.role ? (
                <div>
                  <dt>Role</dt>
                  <dd>{cs.role}</dd>
                </div>
              ) : null}
              {cs.year ? (
                <div>
                  <dt>Year</dt>
                  <dd>{cs.year}</dd>
                </div>
              ) : null}
              {industries.length > 0 ? (
                <div>
                  <dt>Industry</dt>
                  <dd>{industries.join(', ')}</dd>
                </div>
              ) : null}
              {services.length > 0 ? (
                <div>
                  <dt>Services</dt>
                  <dd>{services.join(', ')}</dd>
                </div>
              ) : null}
            </dl>
          )}
        </header>

        {cs.heroImage && typeof cs.heroImage === 'object' ? (
          <div className="case-hero">
            <div className="case-hero-figure">
              <img
                src={mediaUrl(cs.heroImage, 'hero')}
                alt={mediaAlt(cs.heroImage)}
                loading="eager"
              />
            </div>
            {mediaCredit(cs.heroImage) ? (
              <div className="case-hero-credit">{mediaCredit(cs.heroImage)}</div>
            ) : null}
          </div>
        ) : null}

        {outcomes.length > 0 ? (
          <section aria-label="Outcomes" className="case-outcomes">
            {outcomes.map((o: { value: string; label: string }, idx: number) => (
              <div key={idx} className="case-outcome">
                <div className="case-outcome-value">{o.value}</div>
                <div className="case-outcome-label">{o.label}</div>
              </div>
            ))}
          </section>
        ) : null}

        <div className="prose" id="main-content">
          <RichText data={cs.body as never} />
        </div>

        {cs.externalUrl ? (
          <p className="case-external">
            <a href={cs.externalUrl} target="_blank" rel="noopener noreferrer">
              Visit {cs.client || 'the project'} →
            </a>
          </p>
        ) : null}
      </article>

      {siblings.length > 0 ? (
        <section className="case-related" aria-label="More case studies">
          <h2 className="case-related-title">All case studies</h2>
          <div className="case-grid">
            {siblings.map((s) => {
              const hero = s.heroImage && typeof s.heroImage === 'object' ? s.heroImage : null
              return (
                <Link key={s.id} href={`/work/${s.slug}`} className="case-card">
                  {hero ? (
                    <div className="case-card-figure">
                      <img src={mediaUrl(hero, 'card')} alt={mediaAlt(hero)} loading="lazy" />
                    </div>
                  ) : (
                    <div className="case-card-figure case-card-figure--empty" aria-hidden="true" />
                  )}
                  <div className="case-card-body">
                    {s.client ? <p className="case-card-client">{s.client}</p> : null}
                    <h3 className="case-card-title">{s.title}</h3>
                    {s.summary ? <p className="case-card-summary">{s.summary}</p> : null}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}
