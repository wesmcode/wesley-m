'use client'

import { useState } from 'react'

import { CalEmbed, ContactForm, SectionHead } from '@/components/shared'
import { urls } from '@/lib/urls'

type VariantId = 'a' | 'b' | 'c'

const VARIANT_PILLS: { id: VariantId; label: string }[] = [
  { id: 'a', label: 'Buyer paths' },
  { id: 'b', label: 'Three offers' },
  { id: 'c', label: 'Full menu' },
]

// VARIANT A — buyer columns, one flagship engagement each ------
const A_COLUMNS = [
  {
    id: 'founders',
    label: 'For founder-led teams',
    who: 'You are the product bottleneck and the hire is months away.',
    flagship: {
      title: 'Product audit',
      price: 'from $5k',
      timeline: '3 to 4 weeks',
      summary: 'Top 3 systemic blockers killing adoption, plus a 90-day fix list that goes straight to engineering.',
    },
    also: ['Discovery sprint', 'OKR & roadmap reset'],
    commit: '3 to 6 weeks · fixed scope',
    from: '$5k',
  },
  {
    id: 'enterprise',
    label: 'For established companies',
    who: 'Strategy bought, nothing in production yet.',
    flagship: {
      title: 'AI readiness & pilot roadmap',
      price: 'from $10k',
      timeline: '4 to 8 weeks',
      summary: 'Use-case audit and a pilot-to-production roadmap for your highest-value, lowest-risk AI cases.',
    },
    also: ['Platform modernization assessment', 'Multi-CMS / headless migration'],
    commit: '4 to 8 weeks · fixed scope',
    from: '$10k',
  },
  {
    id: 'advisory',
    label: 'Ongoing support',
    who: 'Senior product leadership without the full-time hire.',
    flagship: {
      title: 'Advisory retainer',
      price: 'from $4k/mo',
      timeline: 'Monthly · 3-month minimum',
      summary: 'A standing senior product partner for roadmap, hiring, and the hard calls. Lighter touch than embedded.',
    },
    also: ['Embedded fractional product lead'],
    commit: 'Monthly retainer · 3-month minimum',
    from: '$4k/month',
  },
]

// VARIANT B — three named offers, secondary work tucked inside -
const B_OFFERS = [
  {
    tag: 'Audit',
    title: 'Product + AI systems audit',
    who: 'For teams shipping fast but unsure what is blocking adoption, growth, or AI execution.',
    includes: ['Top 3 systemic blockers', 'AI opportunity map', 'Roadmap risks', '90-day execution plan'],
    timeline: '2 to 3 weeks',
    price: '$5k',
  },
  {
    tag: 'Assessment',
    title: 'AI & platform assessment',
    who: 'Strategy bought, licenses paid, nothing in production. Decide what to pilot, migrate, or retire.',
    includes: ['AI use-case to production roadmap', 'Platform retire-or-migrate calls', 'Multi-CMS consolidation plan', 'Phased, costed plan'],
    timeline: '4 to 8 weeks',
    price: '$10k',
  },
  {
    tag: 'Reset',
    title: '90-day product reset',
    who: 'Senior product leadership embedded until the work ships and moves a number.',
    includes: ['Roadmap and OKRs', 'Delivery cadence', 'Embedded execution 2 to 3 days a week', 'Full handover'],
    timeline: '3-month minimum',
    price: '$4k/mo',
  },
]

// VARIANT C — full menu by audience (the prior nine, demoted) --
const C_COLUMNS = [
  {
    id: 'founders',
    label: 'For founder-led teams',
    who: 'You are the product bottleneck and the hire is months away.',
    commit: '3 to 6 weeks · fixed scope',
    from: '$5k',
    items: [
      { title: 'Product audit', price: 'from $5k', summary: 'Top 3 systemic blockers killing adoption, plus a 90-day fix list that goes straight to engineering.' },
      { title: 'Discovery sprint', price: 'from $7k', summary: 'Customer research that tells you what to build next and what to retire.' },
      { title: 'OKR & roadmap reset', price: 'from $7k', summary: 'Quarterly planning that produces OKRs and a roadmap your engineering lead agrees with.' },
    ],
  },
  {
    id: 'enterprise',
    label: 'For established companies',
    who: 'Strategy bought, nothing in production yet.',
    commit: '4 to 8 weeks · fixed scope',
    from: '$10k',
    items: [
      { title: 'AI readiness & pilot roadmap', price: 'from $10k', summary: 'Use-case audit and pilot-to-production roadmap for your highest-value, lowest-risk AI cases.' },
      { title: 'Platform modernization assessment', price: 'from $10k', summary: 'A working diagnostic with retire-or-migrate decisions and a phased plan, not a slide deck.' },
      { title: 'Multi-CMS / headless migration', price: 'from $10k', summary: 'Consolidate content systems with traffic and domain authority protected through every phase.' },
    ],
  },
  {
    id: 'advisory',
    label: 'Ongoing support',
    who: 'Senior product leadership without the full-time hire.',
    commit: 'Monthly retainer · 3-month minimum',
    from: '$4k/month',
    items: [
      { title: 'Advisory retainer', price: 'from $4k/mo', summary: 'A standing senior product partner for roadmap, hiring, and the hard calls. Lighter touch than embedded.' },
      { title: 'Embedded fractional product lead', price: 'from $8k/mo', summary: 'I run the product cadence 2 to 3 days a week and ship alongside your engineers.' },
    ],
  },
]

const SEATS = [
  { target: '#founders', label: 'Founder-led teams', bullets: ['You are the only one who can make a product call.', 'You ship every sprint but adoption is flat.', 'The full-time PM hire is still months away.'] },
  { target: '#enterprise', label: 'Established companies', bullets: ['You bought the AI licenses and nothing is in production.', 'Your platform is slowing growth, but migration feels too risky.', 'A Tier-1 strategy deck is gathering dust.'] },
  { target: '#advisory', label: 'Ongoing support', bullets: ['You need a senior read on one specific decision.', 'Your PM is on leave and recruiting will take months.', 'You want senior product leadership without a full-time hire.'] },
]

const PROCESS = [
  { num: '01', title: 'Scope', body: 'A 30-minute call and a one-page proposal. Fixed scope, fixed price, three named assumptions.' },
  { num: '02', title: 'Ship', body: 'Embedded delivery against a metric and a deadline. Hit it and the work stays; miss it and it gets dropped.' },
  { num: '03', title: 'Hand off', body: 'Docs and runbooks live in your tools. The team owns the cadence after I am gone.' },
]

const POV = 'I turn ambiguous, high-stakes briefs into product that ships and moves a number. The proof is in the work, not the pitch.'

const POV_PROOF = [
  { num: '8 AI agents', line: 'shipped in 90 days, with 4 enterprise pilots signed the same quarter.' },
  { num: '65M views', line: 'a media network consolidated, traffic and domain authority held through cutover.' },
  { num: '150% growth', line: 'revenue across three fiscal years on a 15M-member platform.' },
]

type FaqItem = { q: string; a: string; tiers?: { price: string; label: string }[] }

const FAQ: FaqItem[] = [
  { q: 'How do you scope a project before we commit?', a: 'A 30-minute call, then a one-page proposal: scope, deliverable, price, timeline, and the three assumptions I’m making. If an assumption is wrong, I redo the page. Neither side commits until both sign it.' },
  {
    q: 'How do you price?',
    tiers: [
      { price: '$5k', label: 'Fixed-scope audits' },
      { price: '$10k', label: 'AI and platform assessments' },
      { price: '$4k/mo', label: 'Advisory retainers' },
    ],
    a: 'Each figure is a starting point. Final pricing depends on scope, urgency, and whether I’m advising, operating, or owning delivery. Every number lands in the written proposal before you commit.',
  },
  { q: 'What happens after an audit?', a: 'You leave with the top blockers, the bets worth making, and a 90-day execution plan. If it’s worth acting on, I can stay embedded to run the reset or hand it to your team. Either way the plan is yours.' },
  { q: 'Can you start this month?', a: 'Audits and advisory, usually yes. Deeper resets, modernization assessments, and migrations depend on the calendar. I keep one deep engagement at a time. Ask and I’ll tell you what’s open.' },
  { q: 'How do you work alongside our existing PM and engineering team?', a: 'As a peer, not a replacement. Your team keeps ownership. I bring outside judgment and the unhurried hours to turn ambiguity into decisions, specs, and cadence. Every deliverable ends with a read-out so the team owns it after I’m gone.' },
  { q: 'What’s your AI/LLM experience?', a: 'AI in production, not demos. I led product on a multi-agent SaaS platform, shipped live agents, and signed enterprise pilots the same quarter. My focus is the calls that make AI defensible to a buyer, not the prototype that wows a room.' },
  { q: 'What’s your modernization experience?', a: 'Platform modernization across engineering consultancies, enterprise SaaS, and high-traffic media. The reference I point to: a multi-site media network consolidated into one flagship, with traffic and domain authority held through cutover.' },
  { q: 'Who is this not a fit for?', a: 'If you need cheap execution, a quick chatbot build, or someone to take Jira tickets by the hour, I’m not your person. I’m best when the decision is ambiguous, the cost of getting it wrong is high, and the team needs senior product judgment close to the work.' },
  { q: 'Do you sign NDAs?', a: 'Yes. Mutual NDA before the scoping call if you want, standard terms or yours. I can also anonymize case studies, references, and project details.' },
]

const Arrow = () => <span aria-hidden="true">{'→︎'}</span>

function Hero() {
  return (
    <section className="hero snap-section" aria-label="Engagements">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="section-label">Engagements</p>
          <h1 className="hero-title">Decide before<br />you waste a quarter</h1>
          <ul className="hero-tags" role="list">
            <li>Product manager &middot; growth &amp; AI consultant</li>
            <li>Remote &middot; EST/CET overlap</li>
          </ul>
        </div>
        <figure className="hero-figure">
          <img className="hero-figure__img hero-figure__img--default" src="/images/wesley-services.jpg" alt="Black and white portrait of Wesley Melo, arms crossed" loading="eager" fetchPriority="high" width={1200} height={1499} />
          <img className="hero-figure__img hero-figure__img--hover" src="/images/wesley-services-hover.jpg" alt="" aria-hidden="true" loading="lazy" width={1200} height={1721} />
        </figure>
        <p className="hero-lede">Product, AI, and platform decisions get expensive fast. I help founder-led and growth-stage teams decide what to build, automate, migrate, or retire, then stay embedded until it ships.</p>
      </div>
    </section>
  )
}

function POVStatement() {
  return (
    <section className="pov snap-section" aria-label="Who I work with">
      <p className="pov-label">Who I work with</p>
      <p className="pov-text">{POV}</p>
      <ul className="pov-proof" role="list">
        {POV_PROOF.map((p) => (
          <li key={p.num}>
            <span className="pov-proof-num">{p.num}</span>
            <span className="pov-proof-line">{p.line}</span>
          </li>
        ))}
      </ul>
      <a className="pov-link" href={urls.work}>See the case studies <Arrow /></a>
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

function OfferingsA() {
  return (
    <section className="otable-section snap-section" aria-label="Engagements by audience">
      <SectionHead label="Engagements" title={<>One flagship per path,<br />everything else on request</>} />
      <div className="otable">
        {A_COLUMNS.map((c) => (
          <div className="otable-col" id={c.id} key={c.id}>
            <div className="otable-head">
              <h3 className="otable-label">{c.label}</h3>
              <p className="otable-who">{c.who}</p>
            </div>
            <p className="otable-eyebrow">Flagship engagement</p>
            <div className="otable-flagship">
              <div className="otable-row-top">
                <span className="otable-name">{c.flagship.title}</span>
                <span className="otable-price">{c.flagship.price}</span>
              </div>
              <p className="otable-sum">{c.flagship.summary}</p>
              <p className="otable-flagship-meta">{c.flagship.timeline}</p>
            </div>
            {c.also.length ? (
              <p className="otable-also"><span className="otable-also-label">Also</span>{c.also.join(', ')}</p>
            ) : null}
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

function OfferingsB() {
  return (
    <section className="otable-section snap-section" id="offers" aria-label="Three engagements">
      <SectionHead label="Engagements" title={<>Three ways in,<br />priced up front</>} />
      <div className="offers3">
        {B_OFFERS.map((o) => (
          <article className="offer3-card" key={o.title}>
            <p className="offer3-eyebrow">{o.tag}</p>
            <h3 className="offer3-title">{o.title}</h3>
            <p className="offer3-who">{o.who}</p>
            <p className="offer3-sublabel">You leave with</p>
            <ul className="offer3-list" role="list">
              {o.includes.map((i) => (
                <li key={i}><span className="seats-mark" aria-hidden="true">▸</span><span>{i}</span></li>
              ))}
            </ul>
            <div className="offer3-foot">
              <p className="offer3-timeline">{o.timeline}</p>
              <div className="otable-starts">
                <span className="otable-starts-label">From</span>
                <span className="otable-starts-value">{o.price}</span>
              </div>
            </div>
            <a href="#book" className="cta-button"><span>Book a scoping call</span><Arrow /></a>
          </article>
        ))}
      </div>
    </section>
  )
}

function OfferingsC() {
  return (
    <section className="otable-section snap-section" aria-label="Engagements by audience">
      <SectionHead label="Engagements" title={<>Start with the problem,<br />pick the engagement</>} />
      <div className="otable">
        {C_COLUMNS.map((c) => (
          <div className="otable-col" id={c.id} key={c.id}>
            <div className="otable-head">
              <h3 className="otable-label">{c.label}</h3>
              <p className="otable-who">{c.who}</p>
            </div>
            <p className="otable-eyebrow">Engagements</p>
            <ul className="otable-list" role="list">
              {c.items.map((o) => (
                <li className="otable-row" key={o.title}>
                  <div className="otable-row-top">
                    <span className="otable-name">{o.title}</span>
                    <span className="otable-price">{o.price}</span>
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

function MentoringStrip() {
  return (
    <section className="mentoring-section" id="mentoring" aria-label="Mentoring and advisory calls">
      <div className="mentoring-card">
        <div className="mentoring-text">
          <p className="mentoring-eyebrow">Separately</p>
          <h2 className="mentoring-title">Mentoring and advisory calls</h2>
          <p className="mentoring-lede">For PMs leveling up from delivery to strategy, founders coaching a first product hire, and one-off senior reads on a single decision. Individuals or teams.</p>
        </div>
        <div className="mentoring-prices">
          <div className="mentoring-price">
            <span className="mentoring-price-value">from $400</span>
            <span className="mentoring-price-label">single advisory call or mentoring session</span>
          </div>
          <div className="mentoring-price">
            <span className="mentoring-price-value">from $1.5k/mo</span>
            <span className="mentoring-price-label">ongoing mentoring, individual or team</span>
          </div>
          <a className="mentoring-link" href="#book">Book a session <Arrow /></a>
        </div>
      </div>
    </section>
  )
}

function ProcessCards() {
  return (
    <section className="process snap-section" aria-label="How I work">
      <SectionHead label="How it runs" title="Scope, ship, hand off" />
      <div className="process-cards">
        {PROCESS.map((s) => (
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

function FaqSection() {
  return (
    <section className="faq snap-section" id="faq" aria-label="Frequently asked questions">
      <SectionHead label="FAQ" title="What buyers usually ask before we start" />
      <div className="faq-list">
        {FAQ.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary><span>{f.q}</span><span className="faq-icon" aria-hidden="true" /></summary>
            <div className="faq-answer">
              {f.tiers ? (
                <ul className="faq-prices" role="list">
                  {f.tiers.map((t) => (
                    <li key={t.price}>
                      <span className="faq-price">{t.price}</span>
                      <span className="faq-price-label">{t.label}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p>{f.a}</p>
            </div>
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

function VariantSwitch({ active, onChange }: { active: VariantId; onChange: (id: VariantId) => void }) {
  return (
    <div className="variant-switch" role="group" aria-label="Preview a services layout">
      <span className="variant-switch-label">Layout</span>
      <div className="variant-switch-pills">
        {VARIANT_PILLS.map((v) => (
          <button
            key={v.id}
            type="button"
            className={active === v.id ? 'is-active' : undefined}
            aria-pressed={active === v.id}
            onClick={() => onChange(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ServicesVariants() {
  const [variant, setVariant] = useState<VariantId>('a')
  return (
    <>
      <Hero />
      <POVStatement />
      <Seats />
      {variant === 'a' ? <OfferingsA /> : variant === 'b' ? <OfferingsB /> : <OfferingsC />}
      <EngagementCTA />
      <MentoringStrip />
      <ProcessCards />
      <FaqSection />
      <BookCTA />
      <VariantSwitch active={variant} onChange={setVariant} />
    </>
  )
}