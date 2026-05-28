import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload, type Where } from 'payload'
import config from '@payload-config'

import { Footer } from '@/components/shared'
import { RichText } from '@/components/RichText'

interface RouteParams {
  params: Promise<{ slug: string }>
}

const fetchCase = async (slug: string) => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } } as Where,
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
    } as Where,
    sort: '-publishDate',
    depth: 1,
    limit: 2,
  })
  return docs
}

export const generateMetadata = async ({ params }: RouteParams): Promise<Metadata> => {
  const { slug } = await params
  const cs = await fetchCase(slug)
  if (!cs) return { title: 'Not found' }
  return {
    title: cs.seoTitle || `${cs.title} | Wesley Melo`,
    description: cs.seoDescription || cs.summary || '',
    alternates: { canonical: `/work/${cs.slug}` },
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
  const tags = Array.isArray(cs.tags)
    ? cs.tags.map((t: { tag: string }) => t.tag).filter(Boolean)
    : industries

  return (
    <>
      <section className="case-hero" aria-label="Case study header">
        <div className="case-hero-inner">
          <p className="case-hero-eyebrow">
            Case study{cs.client ? ` · ${cs.client}` : ''}
          </p>
          {cs.pillar ? <p className="case-hero-pillar">{cs.pillar}</p> : null}
          <h1 className="case-hero-title">{cs.title}</h1>
          {cs.tagline ? <p className="case-hero-tagline">{cs.tagline}</p> : null}
          {tags.length > 0 ? (
            <ul className="case-hero-tags" role="list">
              {tags.map((t: string) => <li key={t}>{t}</li>)}
            </ul>
          ) : null}
          {outcomes.length > 0 ? (
            <div className="case-outcomes" role="group" aria-label="Headline outcomes">
              {outcomes.slice(0, 3).map((o: { value: string; label: string }, i: number) => (
                <div className="case-outcome" key={i}>
                  <div className="case-outcome-value">{o.value}</div>
                  <div className="case-outcome-label">{o.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="case-article" aria-label="Case study body">
        <div className="case-article-inner">
          <aside className="case-rail" aria-label="Engagement facts">
            {cs.client ? (
              <dl className="case-rail-block"><dt>Company</dt><dd>{cs.client}</dd></dl>
            ) : null}
            {cs.role ? (
              <dl className="case-rail-block"><dt>Role</dt><dd>{cs.role}</dd></dl>
            ) : null}
            {industries.length > 0 ? (
              <dl className="case-rail-block"><dt>Industry</dt><dd>{industries.join(', ')}</dd></dl>
            ) : null}
            {cs.year ? (
              <dl className="case-rail-block"><dt>Timeline</dt><dd>{cs.year}</dd></dl>
            ) : null}
          </aside>

          <article className="case-body">
            {cs.summary ? <p className="case-summary">{cs.summary}</p> : null}
            <RichText data={cs.body as never} />
          </article>
        </div>
      </section>

      {siblings.length > 0 ? (
        <section className="case-related" aria-label="More case studies">
          <div className="case-related-inner">
            <p className="case-related-eyebrow">More cases</p>
            <h2 className="case-related-title">Where the work shipped next</h2>
            <div className="case-related-grid">
              {siblings.map((s) => (
                <Link key={s.id} href={`/work/${s.slug}`} className="case-related-card">
                  <p className="case-related-card-num">{s.client || 'Case study'}</p>
                  <h3 className="case-related-card-title">{s.title}</h3>
                  <p className="case-related-card-arrow">{'Read the case →'}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="case-cta" aria-label="Get in touch">
        <div className="case-cta-inner">
          <h2 className="case-cta-title">Got a product that needs a <span className="accent">clearer next quarter?</span></h2>
          <div className="case-cta-actions">
            <Link href="/contact" className="case-cta-btn">
              <span>Get in touch</span>
              <span aria-hidden="true">{'→︎'}</span>
            </Link>
            <Link href="/services" className="case-cta-btn case-cta-btn--ghost">
              <span>See services</span>
              <span aria-hidden="true">{'→︎'}</span>
            </Link>
            <Link href="/work" className="case-cta-btn case-cta-btn--ghost">
              <span>More case studies</span>
              <span aria-hidden="true">{'→︎'}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="minimal" wrapperClass="page" />
    </>
  )
}
