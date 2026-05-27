import Link from 'next/link'
import { Footer, CarouselContainer } from '@/components/shared'
import { SITE_NAV } from '@/lib/navigation'

const TIMELINE = [
  { company: 'Code and Theory', href: 'https://www.codeandtheory.com', years: '2025', present: true },
  { company: 'Liferay', href: 'https://www.liferay.com', years: '2023', end: '2025' },
  { company: 'ThoughtWorks', href: 'https://www.thoughtworks.com', years: '2020', end: '2023' },
  { company: 'Accenture', href: 'https://www.accenture.com/', years: '2014', end: '2019' },
]

const ABOUT_CARDS = [
  { title: 'AI from demo to production', body: '8 production AI agents shipped in 90 days. 4 enterprise pilots signed. One buyer requested pricing unprompted during a live C-suite demo. Not a proof of concept. A product.' },
  { title: 'Modernization without destruction', body: '5 subsites consolidated into a 65M+ monthly views flagship. Domain authority held through cutover. Weekly SEO monitoring, rollback ready at every step. The audience never noticed.' },
  { title: 'Right problem, week one', body: 'Customer interviews. Jobs-to-be-done. Opportunity-solution trees. Framing the right problem in week one saves a quarter of wrong-thing build later.' },
  { title: 'Crisis to growth platform', body: 'A membership platform rebuild dropped cancellation complaints 60%+ and grew annual revenue 150%+. The counterintuitive call: make cancellation easy. Members who felt in control stayed.' },
  { title: 'Predictability as infrastructure', body: '200+ backlog items and 40+ written specs across five product areas. Documentation as the unit of communication cut scope misunderstandings 70%+ and cycle time 40%+. Eight consecutive on-time quarterly releases.' },
]

const PROCESS = [
  { word: 'Discover.', desc: 'Walk the funnel. Read the support tickets. Listen to ten customers before anyone touches the roadmap. The bottleneck is rarely where the team thinks it is.' },
  { word: 'Shape.', desc: 'One bet, written in a sentence. OKRs that survive the first sprint. Every feature justifies itself through a metric or an audience need before it gets built.' },
  { word: 'Create.', desc: 'Weekly releases against the hypothesis. Hit the metric, ship. Miss it, drop the feature. No attachment to the plan, only to the outcome.' },
  { word: 'Scale.', desc: 'Dashboards, written specs, decisions in the doc. Your team owns the cadence after I leave. No knowledge-transfer call needed.' },
]

const CAPABILITIES = {
  Strategy: {
    'Discovery': ['Product audit', 'Customer interviews', 'Jobs-to-be-done', 'Problem framing', 'Market & competitive analysis'],
    'Vision & Planning': ['Product strategy', 'Roadmapping', 'OKRs & north-star metrics', 'Prioritisation frameworks', 'Lean Inception facilitation'],
    'Growth': ['Growth strategy', 'PLG & subscription economics', 'Conversion rate optimisation', 'Retention & funnel design', 'Pricing experiments'],
  },
  Execution: {
    'AI Product': ['LLM-powered product design', 'AI agent orchestration', 'RAG applications', 'Evals & observability', 'AI prototyping (Cursor, v0)'],
    'Delivery': ['Scrum & Kanban', 'Backlog & sprint management', 'PRDs & specs', 'Release management', 'Cross-functional leadership'],
    'Experimentation': ['A/B testing', 'Hypothesis-driven development', 'Weekly read-outs', 'Feature flagging', 'Decision frameworks'],
  },
  Operations: {
    'Analytics': ['Product analytics (Pendo, GA, Tableau)', 'KPI instrumentation', 'SQL & dashboards', 'Activation & retention metrics'],
    'Platform': ['CMS architecture (Payload, Contentful, Drupal, headless DXP)', 'Multi-site migration', 'SEO preservation at scale', 'API design & integration'],
    'Leadership': ['PM mentorship & coaching', 'Hiring & org design', 'Stakeholder alignment', 'Remote-first operating rhythms'],
  },
}

const HERO_NAV: Array<{ href: string; label: string; newTab?: boolean }> = [
  ...SITE_NAV.filter((n) => n.href !== '/contact'),
  { href: '/resume', label: 'Resume', newTab: true },
  ...SITE_NAV.filter((n) => n.href === '/contact'),
]

export default function PersonalPage() {
  return (
    <main id="main-content">
      <section id="hero" className="snap-section outer" aria-label="Introduction">
        <div className="inner">
          <header>
            <div className="row"><h1><span>Wesley</span> <span>Melo</span></h1></div>
            <div className="row"><p>Product Manager</p></div>
          </header>
          <div className="row-empty" />

          <section aria-label="Work history">
            {TIMELINE.map((t) => (
              <div className="timeline-row" key={t.company}>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="link company">{t.company}</a>
                <span className="years">
                  {t.years}{' '}
                  <span aria-hidden="true">{'→︎'}</span>
                  <span className="sr-only">to</span>{' '}
                  {t.present ? (
                    <><span aria-hidden="true">{'····'}</span><span className="sr-only">present</span></>
                  ) : t.end}
                </span>
              </div>
            ))}
          </section>

          <div className="row-empty" />

          <nav aria-label="Contact and links">
            {HERO_NAV.map((item) => (
              <div className="row" key={item.href}>
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="link nav-item">
                    <span className="button-label">{item.label}</span>
                    <span className="mobile-only" aria-hidden="true">[{'→︎'}]</span>
                  </a>
                ) : (
                  <Link href={item.href} className="link nav-item" {...(item.newTab ? { target: '_blank', rel: 'noopener' } : {})}>
                    <span className="button-label">{item.label}</span>
                    {item.newTab ? <span className="sr-only"> (opens in new tab)</span> : null}
                    <span className="mobile-only" aria-hidden="true">[{'→︎'}]</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </section>

      <section id="about" className="snap-section" aria-label="About">
        <h2 className="sr-only">About</h2>
        <div className="section-inner">
          <p className="about-statement">Product, AI, and platform decisions get expensive fast. I find the bottleneck before it costs a quarter, turn it into a plan, and stay close enough to execution that the work ships.</p>
          <div className="about-cards-wrapper">
            <CarouselContainer liveRegionId="about-cards-live">
              {ABOUT_CARDS.map((card) => (
                <article className="about-card" key={card.title} role="group" aria-roledescription="slide">
                  <svg className="about-card-icon" viewBox="0 0 36 36" aria-hidden="true">
                    <rect x="5" y="5" width="26" height="26" transform="rotate(45 18 18)" fill="#FFFFFF" />
                  </svg>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </CarouselContainer>
            <span className="sr-only" role="status" aria-live="polite" id="about-cards-live" />
          </div>
        </div>
      </section>

      <section id="process" className="snap-section" aria-label="Process">
        <h2 className="sr-only">Process</h2>
        <div className="section-inner">
          <div className="process-list">
            {PROCESS.map((p) => (
              <div className="process-row" key={p.word}>
                <h3>{p.word}</h3>
                <p className="process-meta">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="snap-section" aria-label="Services">
        <h2 className="sr-only">Services</h2>
        <div className="section-inner">
          <div className="cap-grid">
            {Object.entries(CAPABILITIES).map(([col, groups]) => (
              <div className="cap-col" key={col}>
                <h3>{col}</h3>
                {Object.entries(groups).map(([label, items]) => (
                  <div className="cap-group" key={label}>
                    <div className="cap-group-label">{label}</div>
                    <ul>
                      {items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="cap-cta">
            <Link href="/work" className="cap-cta-link">
              {'See project-based engagements →︎'}
            </Link>
          </div>
        </div>
      </section>

      <Footer currentPath="/" wrapperClass="section-inner" />
    </main>
  )
}
