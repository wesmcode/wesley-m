import { ContactForm } from '@/components/shared'

const OFFERINGS_FOUNDERS = [
  { num: '01', title: 'Product audit', meta: '3 to 4 weeks · fixed price · from $5k', body: 'You are shipping but adoption is flat. Nobody owns the north-star metric. Three weeks: I walk the funnel, interview 20 churned customers, sit through sprint planning, and hand you a Flash Report. Top 3 systemic blockers, one symbolic quick win, 90-day fix list. The deliverable goes straight to engineering, not into a slide deck.' },
  { num: '02', title: 'Discovery sprint', meta: '4 to 6 weeks · fixed price · from $7k', body: 'You have a roadmap but no conviction behind it. Customer interviews and synthesis. Jobs-to-be-done framing. An opportunity-solution tree. One north-star bet written in a sentence. You leave knowing what to build and which features the data already says to retire.' },
  { num: '03', title: 'OKR & roadmap reset', meta: '4 to 6 weeks · fixed price · from $7k', body: 'Your team is busy but the quarter keeps ending with the wrong things shipped. Quarterly planning workshop, north-star metric, OKRs that survive the first sprint. Output: a roadmap doc your engineering lead does not argue with and a stakeholder deck that does not need a rerun.' },
]

const OFFERINGS_ENTERPRISE = [
  { num: '04', title: 'Platform modernization assessment', meta: '4 to 8 weeks · fixed price · from $10k', body: 'Your CMS or platform is slowing growth but migration risk is real. A working diagnostic, not a slide deck: application portfolio inventory, retirement-vs-migrate calls, SEO and domain authority risk map, a phased plan where each phase has standalone business value.' },
  { num: '05', title: 'AI readiness & pilot roadmap', meta: '4 to 8 weeks · fixed price · from $10k', body: 'You have AI licenses and a strategy deck but nothing in production yet. Use-case audit against your existing investments (Copilot, Einstein, ServiceNow AI, or a custom build). Build/buy/apply framework. Governance gaps mapped against the questions enterprise procurement is asking. Pilot-to-production roadmap for the highest-value, lowest-risk use cases. Informed by shipping 8 production agents inside a multi-agent SaaS platform, not by another strategy deck.' },
  { num: '06', title: 'Multi-CMS / headless migration', meta: 'Scoped per system · from $10k', body: 'Your content lives across too many systems and the SEO risk of consolidation is keeping you stuck. CMS consolidation and multi-site migration with traffic protected through every phase. Five subsites into a 65M+ monthly views flagship is the recent reference. CMS-agnostic across Payload, Contentful, Drupal, and enterprise headless DXP. Rollback capability at every step.' },
]

const OFFERINGS_EITHER = [
  { num: '07', title: 'Hourly advisory', meta: 'Pay as you go · weekly office hours', body: 'You need a senior product perspective on a specific decision, not a project. 60-minute office hours each week. Hiring loops, roadmap calls, "should we ship this AI feature" decisions, "should we sign this modernization SOW" decisions. Cancel any week.' },
]

const HOW_I_WORK = [
  { title: 'Embedded, not advisory', body: 'I join your Slack, attend standups, and write specs from day one. Friday written read-outs. Decisions land in the doc, not the thread. Close enough to execution that the work actually ships.' },
  { title: 'Outcomes, not hours', body: 'Accountable for outcomes, not time billed. Every bet ships against a metric and a deadline. Hit the metric, the feature stays. Miss it, the feature gets dropped without argument.' },
  { title: 'Clean exit', body: 'Docs, dashboards, decisions, and runbooks live in your tools. When the engagement closes, the team owns the cadence. The goal is to make the role permanent or unnecessary, not to create dependency.' },
]

const BUYERS = [
  { title: 'Founder-led teams, no PM yet', body: 'Series A or pre-A. Engineering is 7 to 12 people. The founder has been doing product and is becoming the bottleneck. Two days a week of senior product cover until the full-time hire lands.' },
  { title: 'AI-curious teams without production LLM experience', body: 'You want to add AI features. Nobody on the team has shipped one. You need someone who has navigated multi-agent orchestration, confidence thresholds, and the harder conversation about what an AI feature costs to run at scale.' },
  { title: 'Mid-market teams covering a leave', body: 'A PM is on parental leave or has moved on. Recruiting takes 3 to 9 months. I pick up the sprint cadence next week.' },
  { title: 'Growth-stage teams stuck shipping the wrong things', body: 'Release velocity is fine. Adoption is flat. Nobody owns the north-star metric. Three weeks of audit; a 90-day reset.' },
]

const BUYER_WIDE = { title: 'Mid-market companies in the AI execution gap', body: "You’ve already paid for the strategy work. Copilot or Einstein licenses, a roadmap from a Tier 1 firm. None of it is in production yet. You don’t want another 12-month consultancy engagement. You need a senior practitioner with shipped systems who can write the phased plan your CFO will sign." }

const FAQ = [
  { q: 'How do you scope a project before we commit?', a: "A 30-minute call, then a 1-page proposal: scope, deliverable, price, timeline, and the three assumptions I’m making. If the assumptions are wrong, say so and I redo the page. No commitment until both sides sign it. Enterprise buyers: happy to deliver against an SOW with defined deliverable gates." },
  { q: 'How do you price?', a: 'Audits, sprints, OKR resets, modernization assessments, and AI readiness work are fixed price. Migrations scope per system. Hourly advisory is a flat weekly rate. Advisory retainers (modernization or fractional) are monthly with a 3-month minimum. Every number lands in the written proposal before you commit.' },
  { q: 'Can you start this month?', a: "Audits and advisory, usually yes. Sprints, modernization assessments, and migrations depend on the calendar. I keep one deep engagement at a time. Ask and I’ll tell you what’s open." },
  { q: 'How do you work alongside our existing PM and engineering team?', a: "As a peer. Your PM stays the owner; I bring outside eyes and the unhurried hours they don’t have. Every deliverable gets a real handover with a read-out session so the team owns it after I’m gone." },
  { q: "What’s your AI/LLM experience?", a: 'Senior PM on a multi-agent SaaS AI platform: 8 production agents shipped in 90 days, 4 enterprise pilots signed in the same quarter. I resolved a 90%+ confidence-threshold standoff between ML and design with a transparency-first approach the enterprise buyer could defend. I also reframed the prototyping stack mid-sales-cycle so a client could correct dashboard data live before a board presentation.' },
  { q: "What’s your modernization experience?", a: 'Three years as a Consulting PM inside a global engineering consultancy, working alongside the engineering practice that operationalised evolutionary architecture, strangler fig, and fitness functions. Five years before that as a software engineer on platform programs in financial and professional services. Lean Inception Facilitator. Recent reference: five subsites consolidated into a 65M+ monthly views flagship with domain authority preserved through cutover. CMS-agnostic across Payload, Contentful, Drupal, and enterprise headless DXP.' },
  { q: 'Do you sign NDAs?', a: 'Yes. Mutual NDA before the scoping call if you want. Standard terms, or yours.' },
]

function OfferGrid({ items, single }: { items: typeof OFFERINGS_FOUNDERS; single?: boolean }) {
  return (
    <div className={`offer-grid${single ? ' offer-grid-single' : ''}`}>
      {items.map((o) => (
        <article className="offer" key={o.num}>
          <div className="offer-num" aria-hidden="true">{o.num}</div>
          <h3>{o.title}</h3>
          <p className="offer-meta">{o.meta}</p>
          <p>{o.body}</p>
        </article>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
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

      <section className="offerings snap-section" aria-label="Engagement shapes">
        <div className="section-head">
          <p className="section-label">Seven shapes</p>
          <h2 className="section-title">Pick the problem,<br />pick the shape</h2>
          <p className="section-sub">Three for founder-led teams who need senior product cover now. Three for established companies facing AI, platform, or migration decisions. One for either side.</p>
        </div>
        <h3 className="offer-group-label">For founder-led teams</h3>
        <OfferGrid items={OFFERINGS_FOUNDERS} />
        <h3 className="offer-group-label">For established companies</h3>
        <OfferGrid items={OFFERINGS_ENTERPRISE} />
        <h3 className="offer-group-label">Either side of the line</h3>
        <OfferGrid items={OFFERINGS_EITHER} single />
      </section>

      <section className="expect snap-section" aria-label="How I work">
        <div className="section-head">
          <p className="section-label">Operating rhythm</p>
          <h2 className="section-title">How I work</h2>
        </div>
        <div className="expect-grid">
          {HOW_I_WORK.map((c) => (
            <article className="expect-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="buyers snap-section" aria-label="Who I work with">
        <div className="section-head">
          <p className="section-label">Who I work with</p>
          <h2 className="section-title">Five kinds of buyer</h2>
        </div>
        <div className="buyers-grid">
          {BUYERS.map((b) => (
            <article className="buyer-card" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
          <article className="buyer-card buyer-card-wide">
            <h3>{BUYER_WIDE.title}</h3>
            <p>{BUYER_WIDE.body}</p>
          </article>
        </div>
      </section>

      <section className="cta-card-section" aria-label="Longer-term engagements">
        <div className="cta-card">
          <div className="cta-card-text">
            <p className="cta-card-eyebrow">Beyond a single project?</p>
            <h2 className="cta-card-title">From project to embedded</h2>
            <p className="cta-card-lede">Founder-led teams: 2 to 3 days a week, 3-month minimum, monthly renewals. Established companies: phased advisory retainer after the assessment. Both start from a 30-minute scoping conversation.</p>
          </div>
          <a href="#book" className="cta-button">
            <span>Book a scoping call</span>
            <span aria-hidden="true">{'→︎'}</span>
          </a>
        </div>
      </section>

      <section className="pricing snap-section" aria-label="Pricing">
        <div className="section-head">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Two ways to engage</h2>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card pricing-card-featured">
            <h3>Embedded</h3>
            <p className="pricing-desc">Ongoing product, AI, and platform execution. I join the team, run the cadence, and ship alongside your engineers.</p>
            <div className="pricing-amount">
              <span className="pricing-value">$4k</span>
              <span className="pricing-unit">/month</span>
            </div>
            <p className="pricing-note">3-month minimum, monthly renewals</p>
            <a href="#book" className="cta-button">
              <span>Book a scoping call</span>
              <span aria-hidden="true">{'→︎'}</span>
            </a>
          </article>
          <article className="pricing-card">
            <h3>Fixed scope</h3>
            <p className="pricing-desc">Audits, discovery sprints, roadmap resets, platform assessments, AI readiness, and migrations. Defined deliverable, defined price.</p>
            <div className="pricing-amount">
              <span className="pricing-value">$5k</span>
              <span className="pricing-unit">minimum</span>
            </div>
            <p className="pricing-note">Scoped per engagement</p>
            <a href="#book" className="cta-button">
              <span>Book a scoping call</span>
              <span aria-hidden="true">{'→︎'}</span>
            </a>
          </article>
        </div>
      </section>

      <section className="faq snap-section" id="faq" aria-label="Frequently asked questions">
        <div className="section-head">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Your questions, answered</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="big-cta snap-section" id="book" aria-label="Book a call or send a message">
        <div className="big-cta-card">
          <p className="big-cta-eyebrow">Ready when you are</p>
          <h2 className="big-cta-title">Book a call or<br />send a message</h2>
          <p className="big-cta-sub">30 minutes to discuss the problem, timing, and fit. Or drop a message. I reply within 24 hours.</p>
        </div>
        <div className="book-grid">
          <div className="booking-embed">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1lPlKSP1kX7W9-_MhnDOrYV-egPzg7FFVxa8v8jC7wpGZ891P8vYuhqbZ7eVa-gSLnK2ykcLpG?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              title="Book a scoping call with Wesley Melo"
              loading="lazy"
            />
          </div>
          <ContactForm variant="sidebar" heading="Send a message" />
        </div>
      </section>
    </>
  )
}
