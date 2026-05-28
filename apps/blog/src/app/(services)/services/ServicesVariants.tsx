'use client'

import { useEffect, useState } from 'react'
import { CalEmbed, ContactForm, SectionHead } from '@/components/shared'

/* ============================================================
   CONTENT
   ============================================================ */

const OFFERINGS_FOUNDERS = [
  { num: '01', title: 'Product audit', meta: '3 to 4 weeks · from $5k', summary: 'Top 3 systemic blockers killing adoption, plus a 90-day fix list that goes straight to engineering.', detail: 'Walk the funnel, interview 20 churned customers, sit through sprint planning. Deliverable: a Flash Report with top 3 systemic blockers, one symbolic quick win, and a 90-day fix list. Goes straight to engineering, not into a slide deck.' },
  { num: '02', title: 'Discovery sprint', meta: '4 to 6 weeks · from $7k', summary: 'Customer research that tells you what to build next and what to retire.', detail: 'Customer interviews and synthesis. Jobs-to-be-done framing. An opportunity-solution tree. One north-star bet written in a sentence. You leave knowing what to build and which features the data already says to retire.' },
  { num: '03', title: 'OKR & roadmap reset', meta: '4 to 6 weeks · from $7k', summary: 'Quarterly planning that produces OKRs and a roadmap your engineering lead agrees with.', detail: 'Quarterly planning workshop, north-star metric, OKRs that survive the first sprint. Output: a roadmap doc your engineering lead does not argue with and a stakeholder deck that does not need a rerun.' },
]

const OFFERINGS_ENTERPRISE = [
  { num: '04', title: 'AI readiness & pilot roadmap', meta: '4 to 8 weeks · from $10k', summary: 'Use-case audit and pilot-to-production roadmap for your highest-value, lowest-risk AI cases.', detail: 'Use-case audit against your existing investments (Copilot, Einstein, ServiceNow AI, or a custom build). Build/buy/apply framework. Governance gaps mapped against the questions enterprise procurement is asking. Informed by shipping 8 production agents inside a multi-agent SaaS platform, not by another strategy deck.' },
  { num: '05', title: 'Platform modernization assessment', meta: '4 to 8 weeks · from $10k', summary: 'A working diagnostic with retire-or-migrate decisions and a phased plan, not a slide deck.', detail: 'Application portfolio inventory, retirement-vs-migrate calls, SEO and domain authority risk map, and a phased plan where each phase has standalone business value. A working diagnostic, not a slide deck.' },
  { num: '06', title: 'Multi-CMS / headless migration assessment', meta: 'Scoped per system · from $10k', summary: 'Consolidate content systems with traffic and domain authority protected through every phase.', detail: 'CMS consolidation and multi-site migration with traffic protected through every phase. Five subsites into a 65M+ monthly views flagship is the recent reference. CMS-agnostic across Payload, Contentful, Drupal, and enterprise headless DXP. Rollback capability at every step.' },
]

const OFFERINGS_ONGOING = [
  { num: '07', title: 'Advisory retainer', meta: 'Monthly · from $4k/mo', summary: 'A standing senior product partner for roadmap, hiring, and the hard calls. Lighter touch than embedded.', detail: 'A standing senior product partner on a monthly retainer: roadmap, hiring loops, stakeholder calls, and the product decisions that need a second senior head. Lighter touch than embedded. 3-month minimum.' },
  { num: '08', title: 'Embedded fractional product lead', meta: 'Monthly · from $8k/mo', summary: 'I run the product cadence 2 to 3 days a week and ship alongside your engineers.', detail: 'I run the product cadence 2 to 3 days a week and ship alongside your engineers: specs, decisions, sprint rhythm, and Friday written read-outs. Close enough to execution that the work ships. 3-month minimum.' },
  { num: '09', title: 'Executive advisory call', meta: 'Per session · from $400', summary: 'A senior read on one specific decision. Book a session when you need it.', detail: 'A senior read on one specific decision: a hire, a roadmap call, a build-vs-buy, a go or no-go on shipping an AI feature. Book a session when you need it, no retainer required.' },
]

const COLUMNS = [
  { id: 'founders', label: 'For founder-led teams', who: 'You are the product bottleneck and the hire is months away.', from: '$5k', commit: '3 to 6 weeks · fixed scope', items: OFFERINGS_FOUNDERS },
  { id: 'enterprise', label: 'For established companies', who: 'Strategy bought, nothing in production yet.', from: '$10k', commit: '4 to 8 weeks · fixed scope', items: OFFERINGS_ENTERPRISE },
  { id: 'advisory', label: 'Ongoing support', who: 'Senior product leadership without the full-time hire.', from: '$4k/month', commit: 'Monthly retainer · 3-month minimum', items: OFFERINGS_ONGOING },
]

// Merged "where do you sit" + "this is for you if" symptom bullets (variant E).
const SEATS = [
  { target: '#founders', label: 'Founder-led teams', bullets: ['You are the only one who can make a product call.', 'You ship every sprint but adoption is flat.', 'The full-time PM hire is still months away.'] },
  { target: '#enterprise', label: 'Established companies', bullets: ['You bought the AI licenses and nothing is in production.', 'Your platform is slowing growth, but migration feels too risky.', 'A Tier-1 strategy deck is gathering dust.'] },
  { target: '#advisory', label: 'Ongoing support', bullets: ['You need a senior read on one specific decision.', 'Your PM is on leave and recruiting will take months.', 'You want senior product leadership without a full-time hire.'] },
]

const PAIN_ROUTER = [
  { target: '#founders', label: 'Founder-led teams', line: 'You are the product bottleneck and the full-time hire is months away.', quotes: ['I am the only one who can make a product call.', 'We ship every sprint but adoption is flat.'], cta: 'See the founder shapes' },
  { target: '#enterprise', label: 'Established companies', line: 'You bought the strategy. The AI, platform, or migration work is stuck before production.', quotes: ['We have the AI licenses. Nothing is in production.', 'The platform is slowing growth, but migration feels too risky to start.'], cta: 'See the enterprise shapes' },
  { target: '#advisory', label: 'Ongoing support', line: 'You want senior product leadership without committing to a full-time hire.', quotes: ['I need a senior read this week, not a 3-month engagement.', 'Our PM is on leave and recruiting will take months.'], cta: 'See ongoing support' },
]

const QUALIFIERS = [
  { symptom: 'You are the founder still making every product call.', fix: 'Senior product cover until the full-time hire lands.' },
  { symptom: 'You ship every sprint but adoption is flat.', fix: 'A three-week audit and a 90-day reset on what moves the metric.' },
  { symptom: 'You bought the AI licenses. Nothing is in production.', fix: 'A use-case audit and a pilot-to-production roadmap.' },
  { symptom: 'Your platform is slowing growth, but migration feels too risky.', fix: 'A phased plan with traffic and SEO protected at every step.' },
  { symptom: 'Your PM is on leave and recruiting will take months.', fix: 'I pick up the sprint cadence next week.' },
  { symptom: 'You want senior product leadership without a full-time hire.', fix: 'A monthly advisory retainer or an embedded fractional lead.' },
]

const PATHS = [
  { target: '#founders', label: 'Founder-led teams', line: 'Senior product cover until you hire.' },
  { target: '#enterprise', label: 'Established companies', line: 'AI, platform, and migration decisions, de-risked.' },
  { target: '#advisory', label: 'Ongoing support', line: 'Retainer, embedded, or a one-off executive call.' },
]

const PROCESS_3 = [
  { num: '01', title: 'Scope', body: 'A 30-minute call and a one-page proposal. Fixed scope, fixed price, three named assumptions.' },
  { num: '02', title: 'Ship', body: 'Embedded delivery against a metric and a deadline. Hit it and the work stays; miss it and it gets dropped.' },
  { num: '03', title: 'Hand off', body: 'Docs and runbooks live in your tools. The team owns the cadence after I am gone.' },
]

const FAQ = [
  { q: 'How do you scope a project before we commit?', a: "A 30-minute call, then a 1-page proposal: scope, deliverable, price, timeline, and the three assumptions I’m making. If the assumptions are wrong, say so and I redo the page. No commitment until both sides sign it. Enterprise buyers: happy to deliver against an SOW with defined deliverable gates." },
  { q: 'How do you price?', a: 'Fixed-scope audits start at $5k. AI and platform assessments start at $10k. Retainers start at $4k/month. Final pricing depends on scope, timeline, and whether I am advising, operating, or owning delivery. Every number lands in the written proposal before you commit.' },
  { q: 'Can you start this month?', a: "Audits, advisory, and mentoring, usually yes. Sprints, modernization assessments, and migrations depend on the calendar. I keep one deep engagement at a time. Ask and I’ll tell you what’s open." },
  { q: 'How do you work alongside our existing PM and engineering team?', a: "As a peer. Your PM stays the owner; I bring outside eyes and the unhurried hours they don’t have. Every deliverable gets a real handover with a read-out session so the team owns it after I’m gone." },
  { q: "What’s your AI/LLM experience?", a: 'Senior PM on a multi-agent SaaS AI platform: 8 production agents shipped in 90 days, 4 enterprise pilots signed in the same quarter. I resolved a 90%+ confidence-threshold standoff between ML and design with a transparency-first approach the enterprise buyer could defend. I also reframed the prototyping stack mid-sales-cycle so a client could correct dashboard data live before a board presentation.' },
  { q: "What’s your modernization experience?", a: 'Three years as a Consulting PM inside a global engineering consultancy, working alongside the engineering practice that operationalised evolutionary architecture, strangler fig, and fitness functions. Five years before that as a software engineer on platform programs in financial and professional services. Lean Inception Facilitator. Recent reference: five subsites consolidated into a 65M+ monthly views flagship with domain authority preserved through cutover.' },
  { q: 'Do you sign NDAs?', a: 'Yes. Mutual NDA before the scoping call if you want. Standard terms, or yours.' },
]

const POV = 'Two kinds of team hire me. Founders who have become the product bottleneck, and established teams stuck between an AI strategy and anything shipped. Both need someone who scopes the real problem, shapes the plan, and stays embedded until it ships.'

/* ============================================================
   SHARED BITS
   ============================================================ */

const Arrow = () => <span aria-hidden="true">{'→︎'}</span>

function Hero({ withLanes }: { withLanes?: boolean }) {
  return (
    <section className="hero snap-section" aria-label="Engagements">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="section-label">Engagements</p>
          <h1 className="hero-title">Ways to<br />work together</h1>
          <ul className="hero-tags" role="list">
            <li>Product manager &middot; growth &amp; AI consultant</li>
            <li>Remote &middot; EST/CET overlap</li>
          </ul>
          {withLanes ? (
            <div className="hero-lanes">
              {PATHS.map((p) => (
                <a key={p.target} className="hero-lane" href={p.target}>
                  <span>{p.label}</span> <Arrow />
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <figure className="hero-figure">
          <img className="hero-figure__img hero-figure__img--default" src="/images/wesley-services.jpg" alt="Black and white portrait of Wesley Melo, arms crossed" loading="eager" fetchPriority="high" width={1200} height={1499} />
          <img className="hero-figure__img hero-figure__img--hover" src="/images/wesley-services-hover.jpg" alt="" aria-hidden="true" loading="lazy" width={1200} height={1721} />
        </figure>
        <p className="hero-lede">Product, AI, and platform bottlenecks cost quarters. I scope the problem, shape the plan, and stay embedded until the work ships. Founder-led teams and enterprise leaders.</p>
      </div>
    </section>
  )
}

function PainRouter() {
  return (
    <section className="router snap-section" aria-label="Where you sit">
      <SectionHead label="Three seats, one problem" title="Where do you sit?" />
      <div className="router-grid">
        {PAIN_ROUTER.map((r) => (
          <a className="router-card" href={r.target} key={r.target}>
            <p className="router-card-label">{r.label}</p>
            <p className="router-card-line">{r.line}</p>
            <ul className="router-quotes" role="list">
              {r.quotes.map((q) => (
                <li key={q}><span className="router-quote-mark" aria-hidden="true">▸</span><span>{q}</span></li>
              ))}
            </ul>
            <span className="router-card-cta">{r.cta} <span aria-hidden="true">↓</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Qualifier({ compact }: { compact?: boolean }) {
  return (
    <section className="qual snap-section" aria-label="Is this for you">
      <SectionHead label="Is this you?" title={compact ? 'This is for you if' : <>This is for you<br />if any of this is true</>} />
      <div className="qual-grid">
        {QUALIFIERS.map((q) => (
          <article className="qual-card" key={q.symptom}>
            <p className="qual-symptom"><span className="qual-mark" aria-hidden="true">▸</span>{q.symptom}</p>
            <p className="qual-fix">{q.fix}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function POVStatement() {
  return (
    <section className="pov snap-section" aria-label="How I work with teams">
      <p className="pov-label">Who I work with</p>
      <p className="pov-text">{POV}</p>
    </section>
  )
}

function PathSelect() {
  return (
    <section className="pathsel snap-section" aria-label="Choose your lane">
      <SectionHead label="Choose your lane" title="Where do you fit?" />
      <div className="pathsel-grid">
        {PATHS.map((p) => (
          <a className="pathsel-card" href={p.target} key={p.target}>
            <h3>{p.label}</h3>
            <p>{p.line}</p>
            <span className="pathsel-cta">See the shapes <span aria-hidden="true">↓</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function OfferCard({ o }: { o: (typeof OFFERINGS_FOUNDERS)[number] }) {
  return (
    <article className="offer">
      <div className="offer-num" aria-hidden="true">{o.num}</div>
      <h4>{o.title}</h4>
      <p className="offer-meta">{o.meta}</p>
      <p className="offer-summary">{o.summary}</p>
      <details className="offer-expand">
        <summary className="offer-expand-toggle">What you get</summary>
        <p className="offer-expand-body">{o.detail}</p>
      </details>
    </article>
  )
}

function OfferingsCards() {
  return (
    <section className="offerings snap-section" aria-label="Engagement shapes">
      <SectionHead label="Engagements" title={<>Pick the problem,<br />pick the shape</>} />
      {COLUMNS.map((c) => (
        <div key={c.id}>
          <h3 className="offer-group-label" id={c.id}>{c.label}</h3>
          <div className="offer-grid">
            {c.items.map((o) => <OfferCard key={o.num} o={o} />)}
          </div>
        </div>
      ))}
    </section>
  )
}

function Seats() {
  return (
    <section className="seats snap-section" aria-label="Where you sit">
      <SectionHead label="Where do you sit?" title={<>This is for you if<br />any of this is true</>} />
      <div className="seats-grid">
        {SEATS.map((s) => (
          <a className="seats-card" href={s.target} key={s.target}>
            <p className="seats-label">{s.label}</p>
            <ul className="seats-list" role="list">
              {s.bullets.map((b) => (
                <li key={b}><span className="seats-mark" aria-hidden="true">▸</span><span>{b}</span></li>
              ))}
            </ul>
            <span className="seats-cta">See the engagements <span aria-hidden="true">↓</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function OfferingsTable() {
  return (
    <section className="otable-section snap-section" aria-label="Engagements by audience">
      <SectionHead label="Engagements" title={<>Start with the problem,<br />pick the engagement</>} />
      <div className="otable">
        {COLUMNS.map((c) => (
          <div className="otable-col" id={c.id} key={c.id}>
            <div className="otable-head">
              <h3 className="otable-label">{c.label}</h3>
              <p className="otable-who">{c.who}</p>
            </div>
            <p className="otable-eyebrow">Engagements</p>
            <ul className="otable-list" role="list">
              {c.items.map((o) => (
                <li className="otable-row" key={o.num}>
                  <div className="otable-row-top">
                    <span className="otable-name">{o.title}</span>
                    <span className="otable-price">{o.meta.split('·').pop()?.trim()}</span>
                  </div>
                  <p className="otable-sum">{o.summary}</p>
                </li>
              ))}
            </ul>
            <div className="otable-foot">
              <p className="otable-commit">{c.commit}</p>
              <div className="otable-starts">
                <span className="otable-starts-label">Starts at</span>
                <span className="otable-starts-value">{c.from}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProcessCards() {
  return (
    <section className="process snap-section" aria-label="How I work">
      <SectionHead label="How it runs" title="Scope, ship, hand off" />
      <div className="process-cards">
        {PROCESS_3.map((s) => (
          <article className="process-bigcard" key={s.num}>
            <div className="process-bignum" aria-hidden="true">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function EngagementCTA() {
  return (
    <section className="cta-card-section" aria-label="Longer-term engagements">
      <div className="cta-card">
        <div className="cta-card-text">
          <p className="cta-card-eyebrow">Beyond a single project?</p>
          <h2 className="cta-card-title">From project to embedded</h2>
          <p className="cta-card-lede">Founder-led teams: 2 to 3 days a week on a monthly retainer, scoped on the call. Established companies: a phased advisory retainer after the assessment. Both start from a 30-minute scoping call.</p>
        </div>
        <a href="#book" className="cta-button"><span>Book a scoping call</span><Arrow /></a>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="faq snap-section" id="faq" aria-label="Frequently asked questions">
      <SectionHead label="FAQ" title="Your questions, answered" />
      <div className="faq-list">
        {FAQ.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary><span>{f.q}</span><span className="faq-icon" aria-hidden="true" /></summary>
            <div className="faq-answer"><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </section>
  )
}

function BookCTA() {
  return (
    <section className="big-cta snap-section" id="book" aria-label="Book a call or send a message">
      <div className="big-cta-card">
        <p className="big-cta-eyebrow">Ready when you are</p>
        <h2 className="big-cta-title">Book a call or<br />send a message</h2>
        <p className="big-cta-sub">30 minutes to discuss the problem, timing, and fit. Or drop a message. I reply within 24 hours.</p>
      </div>
      <div className="book-grid">
        <CalEmbed />
        <ContactForm variant="sidebar" heading="Send a message" />
      </div>
    </section>
  )
}

/* ============================================================
   COMPOSITIONS
   ============================================================ */

function VariantA() {
  return (<><Hero /><PainRouter /><OfferingsCards /><ProcessCards /><EngagementCTA /><FaqSection /><BookCTA /></>)
}
function VariantB() {
  return (<><Hero /><Qualifier /><OfferingsTable /><ProcessCards /><EngagementCTA /><FaqSection /><BookCTA /></>)
}
function VariantC() {
  return (<><Hero /><OfferingsTable /><Qualifier compact /><ProcessCards /><EngagementCTA /><FaqSection /><BookCTA /></>)
}
function VariantD() {
  return (<><Hero withLanes /><POVStatement /><PathSelect /><OfferingsCards /><ProcessCards /><FaqSection /><BookCTA /></>)
}
function VariantE() {
  return (<><Hero /><POVStatement /><Seats /><OfferingsTable /><EngagementCTA /><ProcessCards /><FaqSection /><BookCTA /></>)
}

const VARIANTS = {
  e: { label: 'Mix', node: <VariantE /> },
  a: { label: 'Problem', node: <VariantA /> },
  b: { label: 'Table', node: <VariantB /> },
  c: { label: 'Catalog', node: <VariantC /> },
  d: { label: 'Stance', node: <VariantD /> },
} as const

type VariantKey = keyof typeof VARIANTS

/* ============================================================
   SWITCHER
   ============================================================ */

export default function ServicesVariants() {
  const [variant, setVariant] = useState<VariantKey>('e')

  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get('v')
    if (v && v in VARIANTS) setVariant(v as VariantKey)
  }, [])

  const choose = (v: VariantKey) => {
    setVariant(v)
    const url = new URL(window.location.href)
    url.searchParams.set('v', v)
    window.history.replaceState(null, '', url)
  }

  return (
    <>
      {VARIANTS[variant].node}
      <div className="var-switch" role="group" aria-label="Preview layout variant">
        <span className="var-switch-label">Layout</span>
        {(Object.keys(VARIANTS) as VariantKey[]).map((k) => (
          <button
            key={k}
            type="button"
            className={`var-switch-btn${variant === k ? ' is-active' : ''}`}
            aria-pressed={variant === k}
            onClick={() => choose(k)}
          >
            <span className="var-switch-key">{k.toUpperCase()}</span>
            <span className="var-switch-name">{VARIANTS[k].label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
