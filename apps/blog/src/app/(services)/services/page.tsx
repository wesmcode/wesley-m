import { CalEmbed, ContactForm, SectionHead } from '@/components/shared'
import { urls } from '@/lib/urls'

const OFFERINGS_FOUNDERS = [
  { num: '01', title: 'Product audit', meta: '3 to 4 weeks · from $5k', summary: 'Top 3 systemic blockers killing adoption, plus a 90-day fix list that goes straight to engineering.' },
  { num: '02', title: 'Discovery sprint', meta: '4 to 6 weeks · from $7k', summary: 'Customer research that tells you what to build next and what to retire.' },
  { num: '03', title: 'OKR & roadmap reset', meta: '4 to 6 weeks · from $7k', summary: 'Quarterly planning that produces OKRs and a roadmap your engineering lead agrees with.' },
]

const OFFERINGS_ENTERPRISE = [
  { num: '04', title: 'AI readiness & pilot roadmap', meta: '4 to 8 weeks · from $10k', summary: 'Use-case audit and pilot-to-production roadmap for your highest-value, lowest-risk AI cases.' },
  { num: '05', title: 'Platform modernization assessment', meta: '4 to 8 weeks · from $10k', summary: 'A working diagnostic with retire-or-migrate decisions and a phased plan, not a slide deck.' },
  { num: '06', title: 'Multi-CMS / headless migration assessment', meta: 'Scoped per system · from $10k', summary: 'Consolidate content systems with traffic and domain authority protected through every phase.' },
]

const OFFERINGS_ONGOING = [
  { num: '07', title: 'Advisory retainer', meta: 'Monthly · from $4k/mo', summary: 'A standing senior product partner for roadmap, hiring, and the hard calls. Lighter touch than embedded.' },
  { num: '08', title: 'Embedded fractional product lead', meta: 'Monthly · from $8k/mo', summary: 'I run the product cadence 2 to 3 days a week and ship alongside your engineers.' },
  { num: '09', title: 'Executive advisory call', meta: 'Per session · from $400', summary: 'A senior read on one specific decision. Book a session when you need it.' },
]

const COLUMNS = [
  { id: 'founders', label: 'For founder-led teams', who: 'You are the product bottleneck and the hire is months away.', from: '$5k', commit: '3 to 6 weeks · fixed scope', items: OFFERINGS_FOUNDERS },
  { id: 'enterprise', label: 'For established companies', who: 'Strategy bought, nothing in production yet.', from: '$10k', commit: '4 to 8 weeks · fixed scope', items: OFFERINGS_ENTERPRISE },
  { id: 'advisory', label: 'Ongoing support', who: 'Senior product leadership without the full-time hire.', from: '$4k/month', commit: 'Monthly retainer · 3-month minimum', items: OFFERINGS_ONGOING },
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

const FAQ = [
  { q: 'How do you scope a project before we commit?', a: "A 30-minute call, then a 1-page proposal: scope, deliverable, price, timeline, and the three assumptions I’m making. If the assumptions are wrong, say so and I redo the page. No commitment until both sides sign it. Enterprise buyers: happy to deliver against an SOW with defined deliverable gates." },
  { q: 'How do you price?', a: 'Fixed-scope audits start at $5k. AI and platform assessments start at $10k. Retainers start at $4k/month. Final pricing depends on scope, timeline, and whether I am advising, operating, or owning delivery. Every number lands in the written proposal before you commit.' },
  { q: 'Can you start this month?', a: "Audits and advisory, usually yes. Sprints, modernization assessments, and migrations depend on the calendar. I keep one deep engagement at a time. Ask and I’ll tell you what’s open." },
  { q: 'How do you work alongside our existing PM and engineering team?', a: "As a peer. Your PM stays the owner; I bring outside eyes and the unhurried hours they don’t have. Every deliverable gets a real handover with a read-out session so the team owns it after I’m gone." },
  { q: "What’s your AI/LLM experience?", a: 'Senior PM on a multi-agent SaaS AI platform: 8 production agents shipped in 90 days, 4 enterprise pilots signed in the same quarter. I resolved a 90%+ confidence-threshold standoff between ML and design with a transparency-first approach the enterprise buyer could defend. I also reframed the prototyping stack mid-sales-cycle so a client could correct dashboard data live before a board presentation.' },
  { q: "What’s your modernization experience?", a: 'Three years as a Consulting PM inside a global engineering consultancy, working alongside the engineering practice that operationalised evolutionary architecture, strangler fig, and fitness functions. Five years before that as a software engineer on platform programs in financial and professional services. Lean Inception Facilitator. Recent reference: five subsites consolidated into a 65M+ monthly views flagship with domain authority preserved through cutover.' },
  { q: 'Do you sign NDAs?', a: 'Yes. Mutual NDA before the scoping call if you want. Standard terms, or yours.' },
]

const Arrow = () => <span aria-hidden="true">{'→︎'}</span>

function Hero() {
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

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <POVStatement />
      <Seats />
      <OfferingsTable />
      <EngagementCTA />
      <ProcessCards />
      <FaqSection />
      <BookCTA />
    </>
  )
}
