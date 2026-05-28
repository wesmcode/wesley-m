import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { Footer } from '@/components/shared'
import { CASES } from '../case-data'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params
  const cs = CASES[slug]
  if (!cs) return { title: 'Not found' }
  return {
    title: `${cs.title} | Wesley Melo`,
    description: cs.metaDescription,
    alternates: { canonical: `/work/${slug}` },
  }
}

export default async function CaseStudyPage({ params }: RouteParams) {
  const { slug } = await params
  const cs = CASES[slug]
  if (!cs) notFound()

  return (
    <>
      <main id="main-content">
      <section className="case-hero" aria-label="Case study header">
        <div className="case-hero-inner">
          <p className="case-hero-eyebrow" dangerouslySetInnerHTML={{ __html: cs.eyebrow }} />
          {cs.pillar ? <p className="case-hero-pillar">{cs.pillar}</p> : null}
          <h1 className="case-hero-title" dangerouslySetInnerHTML={{ __html: cs.title }} />
          {cs.tagline ? <p className="case-hero-tagline" dangerouslySetInnerHTML={{ __html: cs.tagline }} /> : null}
          {cs.tags.length > 0 ? (
            <ul className="case-hero-tags" role="list">
              {cs.tags.map((t) => <li key={t} dangerouslySetInnerHTML={{ __html: t }} />)}
            </ul>
          ) : null}
          {cs.outcomes.length > 0 ? (
            <div className="case-outcomes" role="group" aria-label="Headline outcomes">
              {cs.outcomes.map((o, i) => (
                <div className="case-outcome" key={i}>
                  <div className="case-outcome-value" dangerouslySetInnerHTML={{ __html: o.value }} />
                  <div className="case-outcome-label" dangerouslySetInnerHTML={{ __html: o.label }} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="case-article" aria-label="Case study body">
        <div className="case-article-inner">
          <aside className="case-rail" aria-label="Engagement facts">
            {cs.rail.map((r, i) => (
              <dl className="case-rail-block" key={i}>
                <dt>{r.dt}</dt>
                <dd>{r.dd}</dd>
              </dl>
            ))}
          </aside>
          <article className="case-body" dangerouslySetInnerHTML={{ __html: cs.body }} />
        </div>
      </section>

      {cs.related.length > 0 ? (
        <section className="case-related" aria-label="More case studies">
          <div className="case-related-inner">
            <p className="case-related-eyebrow">More cases</p>
            <h2 className="case-related-title">Where the work shipped next</h2>
            <div className="case-related-grid">
              {cs.related.map((r) => (
                <Link key={r.href} href={r.href} className="case-related-card">
                  <p className="case-related-card-num" dangerouslySetInnerHTML={{ __html: r.num }} />
                  <h3 className="case-related-card-title" dangerouslySetInnerHTML={{ __html: r.title }} />
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
      </main>

      <Footer variant="minimal" wrapperClass="page" />
    </>
  )
}
