import Link from 'next/link'
import { Footer } from '@/components/shared'

const CASES = [
  { num: '01', href: '/work/recon-ai-platform', text: 'Code and Theory · A 2-week manual audit became an AI product clients asked to buy' },
  { num: '02', href: '/work/nfl-design-system', text: '[NDA Client] · US professional sports league: reducing delivery risk across 32 properties' },
  { num: '03', href: '/work/realclear-media-ecosystem', text: '[NDA Client] · US political media network: "modernise the site" became a measurable platform roadmap' },
  { num: '04', href: '/work/planet-fitness-membership', text: '[NDA Client] · Major US fitness franchise: a cancellation crisis became a retention platform' },
  { num: '05', href: '/work/gap-ecommerce-modernisation', text: '[NDA Client] · Global apparel retail group: capturing the 2020 e-commerce surge' },
  { num: '06', href: '/work/liferay-enterprise-dxp', text: 'Liferay · Enterprise DXP vendor: closing platform gaps that drove customer churn' },
  { num: '07', href: '/work/thoughtworks-pm-practice', text: 'ThoughtWorks · Global engineering consultancy: building product capability during a market slowdown' },
  { num: '08', href: '/work/accenture-telecom-chatbot', text: 'Accenture · Telefonica: the technical foundation behind every product call' },
]

export default function WorkPage() {
  return (
    <>
      <section className="hero" aria-label="Case studies">
        <div className="hero-grid hero-index-grid">
          <div className="hero-text">
            <p className="section-label">Case studies</p>
            <h1 className="hero-title">The work<br />I&rsquo;ve<br />shipped</h1>
            <ul className="hero-tags" role="list">
              <li>Product manager &middot; growth &amp; AI consultant</li>
            </ul>
            <p className="hero-lede">Each case followed the same pattern: find the hidden business bottleneck, turn it into a product decision, build the operating model to ship it. AI platforms, CMS migrations, subscription systems, enterprise SaaS roadmaps.</p>
          </div>

          <nav className="hero-index" aria-label="Case index">
            <p className="hero-index-label">Jump to a case</p>
            <ol className="hero-index-list">
              {CASES.map((c) => (
                <li key={c.num}>
                  <Link href={c.href} className="hero-index-item">
                    <span className="hero-index-num">{c.num}</span>
                    <span>{c.text}</span>
                    <span className="hero-index-arrow" aria-hidden="true">{'→︎'}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section className="companies" aria-label="Where the work shipped">
        <div className="companies-strip">
          <span className="companies-label">Shipped inside</span>
          <ul role="list">
            <li>Code and Theory</li>
            <li>ThoughtWorks</li>
            <li>Liferay</li>
          </ul>
        </div>
      </section>

      <Footer variant="minimal" wrapperClass="page" />
    </>
  )
}
