import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { mediaAlt, mediaUrl } from '@/lib/media'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Case studies — Wesley Melo',
  description:
    'Selected work from fractional and advisory engagements. The proof is in the shipping.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case studies — Wesley Melo',
    description:
      'Selected work from fractional and advisory engagements. The proof is in the shipping.',
    type: 'website',
  },
}

export default async function WorkIndex() {
  const payload = await getPayload({ config })

  const { docs: cases } = await payload.find({
    collection: 'case-studies',
    where: { status: { equals: 'published' } },
    sort: '-publishDate',
    depth: 1,
    limit: 100,
  })

  return (
    <div className="page page--wide">
      <nav className="top-bar" aria-label="Breadcrumb">
        <Link href="/" className="link">
          ← Home
        </Link>
      </nav>

      <header className="vertical-header">
        <p className="vertical-eyebrow">Case studies</p>
        <h1 className="vertical-title">Success stories</h1>
        <p className="vertical-lede">
          Selected work from fractional and advisory engagements. The proof is in the shipping —
          real outcomes from clients I&rsquo;ve helped grow.
        </p>
      </header>

      <main id="main-content">
        {cases.length === 0 ? (
          <p className="empty-state">
            No case studies published yet. Visit <code>/admin</code> to add the first one.
          </p>
        ) : (
          <section aria-label="Case studies" className="case-grid">
            {cases.map((cs) => {
              const hero = cs.heroImage && typeof cs.heroImage === 'object' ? cs.heroImage : null
              return (
                <Link key={cs.id} href={`/work/${cs.slug}`} className="case-card">
                  {hero ? (
                    <div className="case-card-figure">
                      <img
                        src={mediaUrl(hero, 'card')}
                        alt={mediaAlt(hero)}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="case-card-figure case-card-figure--empty" aria-hidden="true" />
                  )}
                  <div className="case-card-body">
                    {cs.client ? <p className="case-card-client">{cs.client}</p> : null}
                    <h2 className="case-card-title">{cs.title}</h2>
                    {cs.summary ? <p className="case-card-summary">{cs.summary}</p> : null}
                  </div>
                </Link>
              )
            })}
          </section>
        )}
      </main>
    </div>
  )
}
