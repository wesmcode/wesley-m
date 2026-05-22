# PORTFOLIO WEBSITE — CASE STUDIES

## Site Structure

```
/cases
  /recon-ai-platform
  /nfl-design-system
  /realclear-media-ecosystem
  /planet-fitness-membership
  /gap-ecommerce-modernisation
  /liferay-enterprise-dxp
  /thoughtworks-pm-practice
  /accenture-telecom-chatbot
```

---

# PAGE 1: /cases/recon-ai-platform

**Page Title:** RECON — From Internal Tool to Enterprise AI Platform in 90 Days
**Hero Tagline:** How I turned a 2-week manual audit into a productised B2B SaaS AI platform with 8 agents and 4 enterprise clients.
**Tags:** AI/ML | B2B SaaS | 0→1 | Enterprise | Product Strategy | Go-to-Market
**Company:** Code and Theory (Stagwell)
**Role:** Senior Product Manager
**Timeline:** September 2025 – Present
**Industry:** AI/ML Products, B2B SaaS, Financial Services, Manufacturing

---

### Overview

Code and Theory, a Stagwell (NASDAQ: STGW) subsidiary recognised as Ad Age's 2024 Business Transformation Agency and Fast Company's Most Innovative Companies 2025, had an efficiency problem hiding a product opportunity. Every new client engagement started with a 2-week manual audit — 5-8 team members pulling competitive analysis, UX reviews, keyword research, and analytics benchmarks by hand. I was brought in as Product Manager to figure out whether this internal process could become a product that clients would pay for.

The answer was yes. Within 90 days of implementing the product strategy, we had 4 enterprise clients across financial services and manufacturing, with one buyer requesting pricing unprompted during a live C-suite demo.

### The Challenge

The agency's pre-engagement process was expensive and inconsistent:

- Each audit consumed 2 weeks and 5-8 people — roughly $200K+ in annual opportunity cost across the organisation
- Different teams used different methodologies with no institutional memory
- Strategy work was bottlenecked by data collection
- Zero baseline KPIs to measure whether engagements actually improved client performance
- Enterprise clients (financial services, manufacturing) were asking for ongoing intelligence, not one-off reports — but the agency had no recurring revenue model

### The Solution

RECON — an AI-powered platform with 8 specialised ML agents that automates Day 1 client intelligence delivery:

1. **Crawler Analysis** — Technical infrastructure, site architecture, SEO fundamentals
2. **Keyword Intelligence** — SEMrush integration for competitive keyword positioning
3. **Analytics Benchmarking** — SimilarWeb proxy metrics for competitive landscape
4. **GA4 Deep Dive** — Optional authenticated client analytics exploration
5. **Content Gap Analysis** — Topic coverage mapping vs. competitive set
6. **UX Heuristics Evaluation** — 143+ criteria assessment with industry-vertical variants
7. **User Journey Analysis** — Flow-based friction point identification
8. **Brand Perception** — Reddit-based sentiment and perception intelligence

### My Role

Sole Product Manager owning strategy through execution. I reported to the Product Lead and coordinated with business leaders on commercialisation. The team grew to 8-12 contributors spanning AI/ML engineering, front-end development, platform architecture, design, and business leadership.

### Strategy and Approach

The core insight was that RECON wasn't just an efficiency tool — it was a product that could generate recurring revenue. I defined a dual-track go-to-market:

**Track 1 — Implementation model (Q1 2026):** Sell RECON-powered audits as a service using the existing agency model. No compliance certification needed. Revenue starts immediately.

**Track 2 — SaaS model (Q2 2026+):** After ISO (agency-level) and SOC (product-level) certification, open the platform for direct client access with subscriptions. This was the long-term play requiring security infrastructure that didn't exist.

This prevented a common startup mistake: waiting for perfect compliance before generating any revenue. We could sell today while building toward tomorrow.

### Planning

I defined the Q1 2026 critical path across four priority streams:

**Priority 1 — Security & Compliance:** ISO/SOC certification pathway, Auth0 with Okta SSO, user management dashboard, audit logging, cookie consent (OneTrust), magic link deprecation

**Priority 2 — Multi-Run Comparison:** Historical benchmarks, timeline visualisation, before/during/after analysis. This became the #1 feature because stakeholders agreed: "Without comparison, we've completely missed the mark"

**Priority 3 — Agent Portfolio Completion:** Code conversion from Airtable prototypes to production architecture, UX Heuristics quality enhancement, structured output standardisation

**Priority 4 — Data Architecture:** Multi-run data structure, brand-run relationship modelling, export capabilities, BigQuery + GCS storage strategy

I also established a clear "not now" backlog: learning agenda standardisation, custom agent development, vertical-specific configurations, and client self-service were deferred to Q2+.

### Cross-Functional Alignment

The team had been working in ad-hoc Kanban with documentation scattered across Jira, FigJam, Airtable, and Confluence. I consolidated to Jira + Confluence as single source of truth, established weekly status reporting, and created a decision log for async alignment.

Key alignment sessions:
- Two major strategy sessions with 6-8 stakeholders resolving commercialisation approach
- Weekly coordination with Product Lead on strategic direction
- Regular alignment with Tech Director on architecture feasibility
- Design team collaboration on component prioritisation and design system migration (shadcn/ui foundation)
- Business leader engagement on pricing framework and sales enablement

### Clear Expectations and High Stakeholder Trust

I built trust through a specific sequence. In my first two weeks I completed a comprehensive project review across 20+ transcripts and artefacts, then delivered a roadmap framework proposal by week four. Rapid context acquisition established credibility before I proposed changes.

For client-facing trust, the Payload CMS migration was the defining moment. Mid-sales-cycle, I made the call to migrate from V0 prototypes to production Payload CMS. Engineering had concerns about timing. I argued that staying on V0 (no live updates, manual redeployments before every demo) was riskier than migrating. We ran both in parallel and phased over. The decision proved right when a client needed last-minute data corrections before a board presentation — the new architecture made it possible in minutes instead of hours.

### Before and After

| Dimension | Before RECON | After RECON |
|---|---|---|
| Audit timeline | 2-3 weeks per engagement | Day 1 automated delivery |
| Team required | 5-8 people per audit | Platform + 1 analyst for review |
| Methodology consistency | Variable across teams | Standardised 8-agent framework |
| Baseline KPIs | Zero | 25+ metrics across engagement, discovery, retention, SEO |
| Revenue model | One-off project fees | Recurring pilot structure |
| Client pipeline | Ad hoc | 4 enterprise clients in 90 days |
| Institutional knowledge | Lost between engagements | Stored in platform for multi-run comparison |
| Team process | Ad-hoc Kanban, scattered docs | Structured sprints, Jira + Confluence single source of truth |

### Tooling and Reporting

- **Product Management:** Jira (backlog, sprints), Confluence (PRDs, decision logs, security docs)
- **Design:** Figma (component specs, dashboard UX), FigJam (roadmap visualisation)
- **Data/Analytics:** Google Analytics, Tableau (measurement framework)
- **AI/ML Stack:** BigQuery + GCS (data architecture), SEMrush, SimilarWeb, GA4 (third-party integrations)
- **Platform:** Payload CMS (production), Next.js + shadcn/ui (frontend), Auth0 + Okta (planned auth)
- **Communication:** Weekly status reports, pre-meeting alignment protocols, decision log in Confluence

### Results

- **4 enterprise clients** secured across financial services and manufacturing in 90 days
- One buyer **requested pricing unprompted** during a live C-suite demo
- **2-week manual process → Day 1** automated delivery
- **Dual-track go-to-market** defined and aligned across 8-12 contributors
- Platform migrated from **prototype to production-grade architecture** during active sales cycle
- **AI agent quality framework** with confidence scoring validated by enterprise clients
- **First measurement infrastructure** created for a team with zero prior baseline KPIs
- Multi-run comparison elevated to **#1 Q1 2026 priority** based on measurement framework data
- Transitioned team from **ad-hoc to structured sprint cadence**

### AI Agent Quality — A Decision Worth Documenting

The ML team and design team were deadlocked for weeks. ML wanted 90%+ confidence thresholds — only surface results the system was near-certain about. Design wanted to show more results at lower confidence — giving users a broader view even if some data points were less reliable.

I defined a transparency-first approach: show the confidence score alongside every result, let the user decide what threshold matters to them. This avoided the false choice between accuracy and utility. Enterprise clients confirmed it met their trust requirements because they could see the methodology, not just the output.

This decision unblocked the entire agent portfolio and became the template for how we handled quality trade-offs across all 8 agents.

### Why This Worked

Three things made RECON succeed where most internal-tool-to-product transitions fail:

**1. I didn't wait for perfect.** The dual-track GTM let us sell implementation services immediately while building toward SaaS. Most teams wait for compliance, the perfect feature set, the design system. We sold what we had and improved with client feedback.

**2. I resolved the quality-vs-utility tension early.** The transparency-first confidence scoring approach unblocked the agent portfolio and gave enterprise clients the trust signal they needed.

**3. I made the measurement framework drive prioritisation.** Before I joined, priorities were decided by whoever was loudest. After establishing baselines and KPIs, multi-run comparison rose to #1 because the data showed clients couldn't justify recurring spend without before/after analysis. The framework also killed a feature (learning agenda standardisation) with zero client pull — freeing cycles for security compliance.

### Final Takeaway

The hardest part of 0→1 isn't building the product — it's deciding what the product is. RECON existed as an internal tool for months before I arrived. The shift wasn't technical; it was strategic. Defining the commercial model, the go-to-market, and the quality bar for enterprise clients turned a cost centre into a revenue opportunity. The 90-day client acquisition was the result of strategic clarity, not just product execution.

---

# PAGE 2: /cases/nfl-design-system

**Page Title:** NFL.com — Design System Redesign Across 4 Page Types
**Hero Tagline:** How a two-hour workshop in LA eliminated all clarification cycles between agency design and NFL engineering.
**Tags:** Sports & Entertainment | Design Systems | Enterprise | Cross-Platform | Requirements
**Company:** Code and Theory
**Role:** Senior Product Manager
**Timeline:** April 2025 – Present (Phase 3 of multi-year engagement)
**Industry:** Sports & Entertainment, Media, Digital Experience

---

### Overview

The NFL partnered with Code and Theory on a multi-year digital transformation. The engagement had already delivered a complete mobile app overhaul (2.3 billion minutes streamed, 21.2 minutes average per visit in the 2024 season). I joined during Phase 3 to lead the design system redesign of NFL.com's Team, Player, Stats, and NFL+ pages — bridging the agency's design output with the NFL's internal product and engineering teams.

### The Challenge

Phase 3 inherited complexity from two directions:

**Client side:** The NFL's PM and engineering teams owned Jira, CMS, and QA. The agency designed and specified; the NFL built. Requirements had to be precise enough for another organisation's engineers to implement without clarification.

**Agency side:** A new design team with zero NFL system experience was onboarded. They needed to understand a legacy component library, complex entitlement logic (logged-out vs. NFL+ vs. Premium), seasonal variations (pre/regular/post-season, off-season), and day-parting windows (morning, afternoon, primetime) — all before sprint one.

The risk: ambiguity in requirements would surface as rework on a high-visibility engagement.

### The Solution

A requirements-first approach that locked every component's states, variations, and decisions before design began. The centrepiece was a two-hour in-person requirements workshop in LA.

### My Role

Product Manager embedded within the agency team, partnered directly with the NFL's web PM (Claire) and main client stakeholder (Lauren). I served as the connective layer between design output and development execution without owning the client's Jira, CMS, or QA processes.

### Strategy and Approach

I front-loaded all ambiguity resolution into the first two weeks:

1. **Current-state UX audit** across NFL.com web, NFL mobile app, NFL Pro, and competitive platforms (MLB, NBA, ESPN, Netflix, The Athletic) — surfacing structural gaps, navigation inconsistencies, and off-site link leakage
2. **Legacy component matching** — every existing component categorised as kill, reskin, or redesign against the updated design system
3. **Requirements workshop** — two hours in LA producing a complete component list per page, confirmed states/variations, and clear decisions for each legacy element
4. **Component specification** — 9 detailed specs in Figma across four breakpoints (mobile, tablet, small desktop, large desktop) with element descriptions, required/optional flags, responsiveness notes, and accessibility considerations

### Planning

I established a weekly staggered delivery cadence, prioritising the most complex components first to maximise development lead time. Every Friday the team released a completed component package. This consistent rhythm kept the multi-year engagement on track across both organisations.

Sprint 0 priorities were identified: navigation and the link list were prerequisite foundational elements that unblocked all subsequent work.

### Cross-Functional Alignment

- **Twice-weekly design reviews** with the NFL's web PM and client stakeholder, maintaining 48-hour feedback turnaround
- **48-hour lock rule:** Requirements locked before design started — no late-stage scope additions
- **Accessibility co-authoring:** Component-level requirements written with the accessibility lead
- **New team onboarding:** Brought a design team with no NFL system experience up to speed through component matching and workshop outputs
- **Coordinated delivery** across agency designers, developers, QA, and NFL's Product, Engineering, and Analytics

### Clear Expectations and High Stakeholder Trust

Trust was measured by one outcome: the NFL's internal PM could write development acceptance criteria directly from the Figma documentation I delivered, without needing additional clarification cycles. My specifications crossed organisational boundaries — agency → client → client's engineering — without information loss.

The twice-weekly design reviews and 48-hour feedback SLA created a predictable rhythm. Both sides knew exactly when decisions would be made and when deliverables would arrive.

### Before and After

| Dimension | Before (typical agency handoff) | After (requirements-first) |
|---|---|---|
| Edge case discovery | During development | Before design started |
| Entitlement coverage | Partial (logged-out vs. subscriber) | Full (3 user types × 4 seasons × 3 day-parting windows) |
| Design rework | Frequent mid-sprint | Eliminated through upfront lock |
| Acceptance criteria | Required clarification cycles | NFL PM wrote criteria directly from Figma |
| New team ramp-up | Weeks of context gathering | Compressed into workshop + component matching |
| Legacy decisions | Unclear, debated per component | Kill/reskin/redesign confirmed for every element |

### Tooling and Reporting

- **Requirements:** Figma (component specs, 4 breakpoints), workshop documentation
- **Tracking:** NFL's Jira (agency didn't own), agency-side sprint cadence
- **Communication:** Twice-weekly design reviews, 48-hour feedback SLA
- **Research:** Competitive audit across 6 platforms
- **Accessibility:** Co-authored requirements with accessibility lead

### Results

- **9 component specifications** covering 3 entitlement states, 4 seasonal variations, 3 day-parting windows
- **Kill/reskin/redesign** decided for every legacy component across 4 page types
- **Zero clarification cycles** between agency specs and NFL engineering
- **Consistent Friday delivery** maintained throughout the phase
- **New design team** productive within first sprint despite no prior NFL experience

### Entitlement Logic — A Complexity Worth Documenting

The NFL+ Hub required component states that changed based on three dimensions simultaneously:

- **User type:** Logged-out, NFL+ subscriber, Premium subscriber
- **Season:** Pre-season, regular season, post-season, off-season
- **Time of day:** Morning, afternoon, primetime

A single component could have 36 possible states (3 × 4 × 3). Documenting this in Figma across four breakpoints meant each component spec was essentially a decision tree. Getting this right before design began — rather than discovering edge cases during development — was the entire value of the requirements-first approach.

### Why This Worked

The requirements-first approach inverted the typical agency workflow. Most agencies design first and discover complexity later. By front-loading the workshop, component matching, and entitlement mapping, I eliminated the class of problems that typically causes late-stage rework. The 48-hour lock rule meant design never started on shifting ground.

### Final Takeaway

The value of a PM on a design system engagement isn't design taste — it's requirement precision. When specifications cross two organisations, every ambiguity multiplies. The two-hour LA workshop was the highest-ROI investment of the entire phase because it compressed weeks of back-and-forth into confirmed decisions that held through delivery.

---

# PAGE 3: /cases/realclear-media-ecosystem

**Page Title:** RealClear Media Group — From "Modernise the Site" to 86-Feature Product Inventory
**Hero Tagline:** How I turned a vague directive into a data-driven transformation plan for a 65M+ monthly view media ecosystem.
**Tags:** Media & Publishing | Digital Transformation | Product Strategy | SEO | CMS Migration
**Company:** Code and Theory (Stagwell)
**Role:** Senior Product Manager (70% allocation)
**Timeline:** April – June 2025 (Define Phase)
**Industry:** Media & Publishing, Digital News, Political News Aggregation
**Business Model:** Revenue-sharing partnership with 501(c)(3) foundation-backed client

---

### Overview

RealClear Media Group operates RealClearPolitics (65M+ monthly views) plus 16 additional properties covering defence, markets, polling, energy, health, world, policy, and history. The flagship product is a curated "link list" — three daily editions of editorially selected articles — that has served a loyal audience for over 15 years. Code and Theory was engaged through a revenue-sharing partnership with Stagwell to modernise the ecosystem. I led the Define Phase at 70% allocation.

### The Challenge

The brief was "modernise the site." Behind that:

- **Legacy platform:** 51-second average session duration, 62% engagement rate, 2.48 pages/session. Failing Core Web Vitals, outdated CMS
- **Fragmented ecosystem:** 16 properties with inconsistent design and navigation. 30-65% of subsite traffic depended on RealClearPolitics referrals
- **No measurement culture:** Baselines existed but weren't tracked against targets. Features shipped without feedback loops
- **Conservative client:** Low expectations, cautious about complexity. The editorial link list process was sacred
- **Unusual business model:** Revenue-sharing with Stagwell, not traditional project fees. Features justified by expected revenue/engagement contribution
- **Domain authority at risk:** 65/100 DA that any migration could damage

### The Solution

I transformed the ambiguous directive into an 86-feature product inventory mapped to business outcomes, with a phased migration approach protecting the existing audience.

### My Role

Product Manager at 70% allocation, partnering with a DRI (Senior Creative Strategist), Experience Design leads, Content Strategy, Technology Director, and Executive Producer. I supported two Managing Directors as primary client presenters while providing strategic product inputs.

### Strategy and Approach

I introduced a requirements-first methodology new to the agency:

**Before:** "I need a homepage hero" → design exploration → feature definition
**After:** "I need newsletter promotion" → KPI mapping → requirements documentation → design system component selection

Every feature had to justify its existence through a KPI or audience need before visual exploration. I created five "How We Win" strategic territories: Access to Everything You Need to Know, Clarify Editorial Perspective, Evolving Story Tracking, Dynamic Templates, Ecosystem Clarity.

Key features defined:
- **Topic Tracker** — story-following for evolving news narratives
- **RealClear Perspective** — modernised link list with 4 view options
- **Newsletter Integration** — strategic placement throughout user journey (primary growth KPI)
- **Click-to-Expand Articles** — friction reduction for multi-article consumption
- **Section Pages** — consolidated subsite architecture preserving SEO equity

### Planning

I created a comprehensive CRD (Current Requirements Document) in Airtable: 86 features with acceptance criteria, T-shirt sizing (XS-XXL converted to hours), KPI mappings, strategic pillar alignments, and sprint assignments across a 4-sprint design phase.

Subsite consolidation followed a phased approach: Energy, Health, World, Policy, and History would fold into RealClearPolitics as section pages, one at a time, with weekly SEO monitoring, rollback capability, and traffic checkpoints.

Deliverable gates: Midpoint Presentation (May 5) and Final Define Presentation (May 23).

### Cross-Functional Alignment

- **Experience Strategy:** Shared CRD ownership, audit-first methodology identifying 3-4 redundant link list variations
- **Content Strategy:** Subsite consolidation analysis with data-driven evaluation criteria
- **Technology Director:** Feasibility validation for every feature — consistent "yes, this is possible" responses built client confidence
- **DART (analytics):** Measurement strategy and tracking requirements for all features
- **Workshop facilitation:** Brought Experience Design, Content Strategy, Design, Technology, and Production together for complex feature definition

### Clear Expectations and High Stakeholder Trust

Complex dynamics required careful navigation:

- **Ben (MD):** Ambitious, pushing features the client might reject — useful creative tension
- **Jess (MD, Media):** Pragmatic, focused on deliverability and preventing burnout
- **Anna (DRI):** Strategic, working with a PM for the first time
- **John McIntyre (client):** Low expectations, cautious, conversational feedback over formal written responses

I managed the ambition-realism gap with data-driven scope recommendations. When formal client feedback was slow, I used conversational signals from presentations, meeting transcripts, and proactive tollgate reviews with MDs before client sessions.

### Before and After

| Dimension | Before | After Define Phase |
|---|---|---|
| Feature clarity | "Modernise the site" | 86-feature inventory with KPI traceability |
| Methodology | Design-first | Requirements-first (CRD as single source of truth) |
| Subsite strategy | 16 independent properties | 5-subsite consolidation plan with SEO protection |
| Measurement | Baselines not tracked | 25+ KPIs across engagement, discovery, retention, SEO |
| Feature justification | Design instinct | Every feature mapped to KPI or audience need |
| Scope | Ambiguous | T-shirt sizing, sprint assignments, prioritisation workshop |
| Agency methodology | Design-led | Requirements-first adopted as model for future projects |

### Tooling and Reporting

- **Product Management:** Airtable (86-feature CRD), Confluence (documentation)
- **Design:** Figma (wireframes, component specs), workshop outputs
- **Analytics:** Google Analytics (baselines), DART partnership (measurement strategy)
- **Platform (planned):** Payload CMS, Admiral CMP (auth/consent), MailChimp API (newsletter), React with ISR
- **Frameworks:** OGSM, RICE, MoSCoW, T-shirt sizing, Jobs to Be Done

### Results

- **86-feature product inventory** with 100% feature-to-KPI traceability
- **Requirements-first methodology** adopted as agency model for future projects
- **5-subsite consolidation strategy** with SEO monitoring and rollback protecting 65M+ views and 65/100 DA
- **25+ KPI measurement framework** with documented baselines
- **CRD approach** (Airtable-based) becoming template for Code and Theory projects
- **Design phase transition** defined with 4-sprint structure

### Revenue-Sharing Model — A Context Worth Documenting

This wasn't a traditional agency engagement. Stagwell held a revenue-sharing arrangement with the RealClear Foundation (501(c)(3)). There were no project fees — the agency's return depended on the platform's revenue performance post-launch. This meant every feature decision carried direct financial weight. It also meant scope was determined by the agency's ambition rather than a strict client SOW, creating an unusual dynamic where I had to impose scope discipline from the product side rather than having it imposed by budget.

### Why This Worked

The requirements-first shift was the biggest win. In a design-led culture, introducing "justify this feature with a KPI before we explore it visually" was cultural change, not just process. It worked because I didn't fight the design culture — I gave it better inputs. The CRD became a shared artefact everyone contributed to. By the time we reached the client, alignment was pre-built.

### Final Takeaway

Media modernisation is a trust exercise. The audience doesn't want a new site — they want their site, but better. The 86-feature inventory wasn't about 86 features; it was about having a defensible answer for every design decision. When the client asked "why this?" we could point to a KPI, an audience need, or a competitive gap. Rigour turned a cautious client into a confident one.

---

# PAGE 4: /cases/planet-fitness-membership

**Page Title:** Planet Fitness — From Pandemic Crisis to 164% Revenue Growth
**Hero Tagline:** How I built the membership platform that turned a $406M pandemic low into a $1.07B recovery.
**Tags:** Fitness & Health | Digital Transformation | Growth | A/B Testing | Crisis Response | Remote Teams
**Company:** ThoughtWorks
**Role:** Product Manager
**Timeline:** December 2020 – December 2022 (2 years)
**Industry:** Fitness & Health, Consumer Digital, Subscription
**Client:** Planet Fitness (NYSE: PLNT)

---

### Overview

Planet Fitness, the largest fitness franchise in the US with 2,000+ locations and 15M+ members, faced an existential digital challenge during COVID-19. When all locations suspended operations in March 2020, the company had no online membership management capability. Members who wanted to cancel, freeze, or modify memberships had to visit a physical location — impossible during lockdowns. Fortune magazine publicly criticised Planet Fitness in November 2020 for making cancellation difficult during the pandemic. I joined the ThoughtWorks engagement in December 2020 to lead the product team building the solution.

### The Challenge

- **No online self-service:** 100% of membership changes required in-person visits
- **Revenue collapse:** $688.8M (FY2019) → $406.6M (FY2020) — 41% decline
- **Brand damage:** Peak cancellation complaints, negative press coverage
- **Legacy platform:** Slow, not designed for transactional management
- **Distributed team:** Developers, designers, QA, BAs across the US, India, and Brazil, fully remote

### The Solution

An online membership management platform enabling members to cancel, freeze, upgrade, downgrade, and transfer memberships digitally.

### My Role

Product Manager leading a cross-functional team of developers, product designers, business analysts, and a product owner, plus client stakeholders and other vendors. I owned requirements, delivery planning, sprint execution, and growth experimentation.

### Strategy and Approach

**Phase 1 — Crisis response (first 6 months):** Get core flows online fast. Prioritise cancellation, freeze, and modification over everything else. Reduce complaints and give members control.

**Phase 2 — Growth (months 6-24):** Summer campaign, A/B testing across countries, lifecycle messaging, platform performance (React.js migration).

The counter-intuitive decision: prioritise making it easy to cancel. The complaint volume was destroying the brand, and members who could easily manage their memberships were more likely to pause-and-return than those who felt trapped.

### Planning

Detailed delivery plans in Jira tracking timelines, scope, and capacity. Sprint planning accounted for three time zones with clear documentation consumable asynchronously.

I also led the Kanban → Scrum transition. The existing process lacked forecast accuracy for a platform with hard deadlines (summer campaign, fiscal reporting periods).

### Cross-Functional Alignment

- **Client:** Regular alignment with Planet Fitness product owner and marketing teams
- **Vendors:** Coordinated with other vendors in the broader digital ecosystem
- **Three-timezone management:** US (client, BA), India (engineering), Brazil (design, PM)
- **Marketing:** Partnered on summer campaign — 100k participants on launch day
- **Growth:** Collaborated with marketing and data analytics on acquisition funnels and retention cohorts

### Clear Expectations and High Stakeholder Trust

Trust was built through delivery. Within six months the core flows were live and complaint metrics were already improving. The client expanded engagement scope to include growth experimentation, A/B testing, and the summer campaign — a direct result of seeing the numbers move.

The ThoughtWorks–Planet Fitness relationship was strong enough to become public: CDO Craig Miller appeared on ThoughtWorks' Pragmatism in Practice podcast and spoke at ThoughtWorks' ParadigmShift conference.

### Before and After

| Dimension | Before (Dec 2020) | After (Dec 2022) |
|---|---|---|
| Membership changes | 100% in-person | 70% online |
| Cancellation complaints | Peak, Fortune press criticism | Down 65% |
| Memberships | Declining | Grew 30% |
| Page load | Legacy, slow | 40% faster (React.js) |
| Session duration | Baseline | +25% |
| Summer campaign | No digital infrastructure | 100k participants day one |
| Agile maturity | Kanban, inconsistent | Scrum, 20% better forecasts, 70% fewer meetings |
| Revenue | $406.6M (FY2020) | $1.07B (FY2023) — 164% increase |

### Tooling and Reporting

- **Product Management:** Jira (backlog, sprints, capacity), Confluence (requirements, delivery plans)
- **Design:** Figma
- **Experimentation:** Optimizely (10+ A/B tests), Google Analytics (funnel tracking)
- **Platform:** React.js (frontend migration), Planet Fitness backend systems
- **Growth:** Optimizely, marketing analytics for acquisition and retention cohorts

### Results

- **65% reduction** in cancellation complaints within six months
- **70%** of membership changes moved online
- **30%** membership growth
- **40%** page load improvement (React.js migration)
- **25%** session duration increase
- **100k** summer campaign participants on day one
- **10+ A/B tests** across multiple countries
- **20%** sprint forecast accuracy improvement
- **70%** meeting time reduction (Kanban → Scrum)
- **164%** client revenue growth ($406.6M → $1.07B) verified against 10-K filings

### Growth Experimentation — Worth Documenting

The A/B testing programme covered multiple dimensions:

- **Country-level testing:** Feature variations tested across different markets with different regulatory requirements
- **Pricing pages:** Tested presentation, copy, and CTA placement
- **Lifecycle messaging:** Tested timing, content, and channel for retention messaging
- **Feature changes:** Tested UI variations for membership management flows

I defined OKRs with marketing and data analytics teams and tracked acquisition funnels and retention cohorts to measure the impact of each experiment.

### Industry Context

The fitness industry's COVID trajectory validates the business impact. Planet Fitness's revenue recovery:

| Year | Revenue | Members | Locations |
|---|---|---|---|
| FY2019 | $688.8M | ~14.4M | 2,039 |
| FY2020 | $406.6M | ~13.5M | 2,124 |
| FY2021 | $587.0M | 15.2M | 2,254 |
| FY2022 | $936.8M | 17.0M | 2,410 |
| FY2023 | $1,071.3M | 18.7M | 2,575 |

The digital infrastructure built during 2020-2022 directly enabled the recovery trajectory. By FY2023 Planet Fitness surpassed $1B in annual revenue for the first time.

### Why This Worked

**1. Prioritising cancellation first.** Making it easy to cancel felt counter-intuitive but was the right call. Members who could manage their memberships trusted the brand. The complaint reduction restored reputation.

**2. Shipping fast, then optimising.** Six months for core flows, then 18 months of growth experimentation. The platform earned the right to experiment by first proving it could deliver the basics.

### Final Takeaway

Crisis products become growth platforms if you sequence correctly. The membership tool started as damage control. But the same infrastructure that enabled online cancellation also enabled upgrades, cross-sells, and the summer campaign. The product that saved the brand in 2020 became the growth engine behind $1B+ revenue by 2023.

---

# PAGE 5: /cases/gap-ecommerce-modernisation

**Page Title:** GAP Inc. — 54% Online Sales Growth Through Platform Modernisation
**Hero Tagline:** How checkout optimisation and BNPL integration outpaced the 2020 e-commerce boom by 11 percentage points.
**Tags:** Retail & E-Commerce | Digital Transformation | Checkout | BNPL | Performance | Growth
**Company:** ThoughtWorks
**Role:** Business Analyst
**Timeline:** September 2019 – November 2020
**Industry:** Retail & E-Commerce
**Client:** GAP Inc. (NYSE: GPS)

---

### Overview

GAP Inc., one of the largest US specialty retailers, was restructuring when COVID accelerated their digital transformation. Online represented just 25% of revenue pre-pandemic. I joined the ThoughtWorks engagement to support e-commerce platform modernisation during a critical growth phase.

### The Challenge

- **Low digital penetration:** 25% of revenue from online (FY2019)
- **Peak traffic fragility:** Platform struggled during Black Friday and holiday surges
- **No modern payments:** No Apple Pay, no BNPL — competitors were adopting both
- **Cart abandonment:** Industry average 67.33%, GAP's checkout friction contributing to above-average rates
- **Corporate restructuring:** Already reorganising when COVID hit

### The Solution

Platform modernisation targeting performance, checkout, and payment flexibility simultaneously.

### My Role

Business Analyst bridging into product thinking. I documented requirements as user stories with acceptance criteria, facilitated stakeholder workshops, tracked deliverables, and coordinated between PM, tech lead, and development. This was the role where I started operating as a PM — focused on user outcomes and business impact, not just requirements.

### Strategy and Approach

Three simultaneous layers:

1. **Platform performance:** 40% more peak traffic capacity — capturing Black Friday revenue
2. **Checkout optimisation:** Apple Pay and Afterpay (BNPL) integration
3. **User experience:** Design improvements reducing cart abandonment

### Planning

Coordinated with project manager and tech lead on deliverable tracking and deadlines. Documented requirements as user stories, facilitated stakeholder meetings, presented at demos.

### Cross-Functional Alignment

- **Project manager and tech lead:** Weekly deliverable tracking
- **Development teams:** User stories with acceptance criteria
- **Stakeholders:** Workshops and demos
- **User research:** Interviews analysing pain points for conversion funnel optimisation

### Clear Expectations and High Stakeholder Trust

This was a high-stakes engagement during GAP's restructuring. Trust came from consistent deliverable quality and clear requirements documentation that kept development aligned with business goals during organisational turbulence.

### Before and After

| Dimension | Before | After |
|---|---|---|
| Online revenue share | 25% | 45% (FY2020) |
| Online sales growth | Baseline | +54% YoY |
| E-commerce revenue | Baseline | +20% |
| Peak traffic capacity | Struggled during surges | +40% |
| Payment options | Credit/debit only | Apple Pay + Afterpay (BNPL) |
| Cart additions | Baseline | +17% |
| Sales from payments | Baseline | +12% from flexibility |

### Tooling and Reporting

- **Requirements:** User stories with acceptance criteria
- **Agile:** Daily standups, sprint planning, retrospectives
- **Tracking:** Deliverable tracking with PM and tech lead
- **Research:** User interviews, conversion funnel analysis

### Results

- **54% online sales increase** (GAP 10-K confirmed: ~$4.1B → $6B+)
- **20%** e-commerce revenue growth
- **40%** platform scalability improvement
- **Apple Pay + Afterpay (BNPL)** — GAP was Afterpay's "biggest merchant to date" (November 2020)
- **12%** sales lift from payment flexibility
- **17%** cart additions increase
- Cart abandonment improved against **67.33%** industry benchmark

### Industry Context

US e-commerce grew 43% in 2020. GAP's 54% growth outpaced the market by 11 points — suggesting genuine platform improvements beyond pandemic tailwinds. The digital shift proved permanent: by FY2024 online still represented 41% of revenue, 16 points above pre-transformation baseline. GAP invested $800M in capex in FY2021, primarily in digital infrastructure built on the 2019-2020 foundations.

### BNPL Integration — Worth Documenting

The Afterpay integration was announced November 11, 2020, squarely within my tenure. BNPL was gaining mainstream adoption and GAP moved faster than most retailers at scale. The integration addressed two problems simultaneously: reduced checkout friction (improving abandonment) and increased average order value (BNPL users spend more).

### Why This Worked

Timing. During restructuring and a pandemic, there was less institutional resistance to digital investment. The platform improvements were in place before the 2020 holiday season — if they hadn't been, GAP would have missed the biggest e-commerce surge in retail history.

### Final Takeaway

The best time to modernise is when everything else is already changing. The window was narrow. Speed and timing mattered more than perfection.

---

# PAGE 6: /cases/liferay-enterprise-dxp

**Page Title:** Liferay — 8 Consecutive On-Time Quarterly Releases
**Hero Tagline:** How a documentation-first approach cut scope misunderstandings by 70% and made quarterly delivery predictable.
**Tags:** Enterprise SaaS | DXP | Workflow Automation | Low-Code | CMS | Release Management
**Company:** Liferay
**Role:** Senior Product Manager
**Timeline:** November 2023 – March 2025
**Industry:** Enterprise SaaS, Digital Experience Platforms

---

### Overview

Liferay is a privately held enterprise SaaS company providing digital experience platforms (DXP) to 1,200+ businesses globally. I owned the roadmap for five product areas: Objects Model (low-code), Workflow Automation, CMS, Localisation Framework, and Enterprise Ticketing. I joined during a significant transition — Liferay shifting from weekly to quarterly releases.

### The Challenge

- **Release cadence shift:** Weekly → quarterly required fundamentally different planning
- **Scope ambiguity:** 200+ backlog items across five products, frequent misunderstandings
- **Incident load:** 250+ incidents needing pattern analysis
- **Multi-product complexity:** Five products with different users, constraints, and priorities
- **Documentation gaps:** Requirements scattered, repeated clarification cycles

### The Solution

A documentation-first approach with a single source of truth in Jira and Confluence, supported by process maps standardising how work was scoped.

### My Role

Senior Product Manager owning roadmap for all five product areas. Led discovery through client interviews and market research, managed trade-offs between scope/schedule/dependencies, coordinated cross-functional delivery.

### Strategy and Approach

Three pillars for predictable quarterly delivery:

1. **Documentation as infrastructure:** 40+ artefacts covering requirements, architecture, and specs — the single source of truth
2. **Process maps as standard:** 15+ maps covering gap analysis → requirements → architecture → deployment, adopted by engineering
3. **Incident pattern analysis:** Tracked 250+ incidents in Tableau to find recurring failures and prevent them

### Planning

Quarterly planning balanced five product areas at different maturity levels:
- **Objects Model:** Feature flag → General Availability (shipped 2024.Q1)
- **Workflow Automation:** Kaleo engine improvements, SLA tracking
- **CMS:** Translation interface, content scheduling, AI Wizard (beta)
- **Localisation:** Localization Select fragment, XLIFF import/export
- **Ticketing:** Custom ticketing system using Objects

### Cross-Functional Alignment

- **Product, Design, Engineering:** Requirements definition, solution architecture, object relationships, API endpoints, Client Extensions
- **Client-facing discovery:** Interviews and market research validating product direction
- **Stakeholder management:** Trade-off decisions with alternative solutions maintaining business objectives

### Clear Expectations and High Stakeholder Trust

The quarterly cadence itself was the trust-building mechanism. Each on-time release reinforced confidence in the planning approach. By the fourth consecutive release, stakeholders stopped asking "will we hit the date?" and started asking "what should we prioritise next?" — a shift from doubt to strategy.

### Before and After

| Dimension | Before | After |
|---|---|---|
| Release cadence | Weekly (unpredictable) | Quarterly (8 consecutive on-time) |
| Scope misunderstandings | Frequent | Down 70% |
| Cycle time | Baseline | Reduced 40% |
| Delivery predictability | Inconsistent | Improved 60% |
| Incident volume | Reactive | Down ~20% through prevention |
| Documentation | Scattered | 200+ items, 40+ artefacts, single source |
| Process standard | Ad hoc per team | 15+ maps adopted by engineering |

### Tooling and Reporting

- **Product Management:** Jira (200+ items, sprints), Confluence (40+ artefacts)
- **Analytics:** Tableau (incident tracking, pattern analysis)
- **Design:** Process maps, solution architecture docs
- **Platform:** Liferay DXP, Kaleo workflow engine, Objects Model Builder

### Results

- **80%+** quarterly targets across 8 consecutive releases
- **70%** fewer scope misunderstandings
- **40%** reduced cycle time
- **60%** improved delivery predictability
- **~20%** incident volume reduction
- **15+** process maps adopted as engineering standard
- **Objects Model Builder** shipped from feature flag to GA

### Industry Context

Liferay maintained Gartner Magic Quadrant recognition for the 14th consecutive year, was named Leader in two IDC MarketScape reports (2023, 2025), and ranked #1 in B2E use cases. Analyst praise cited "low-code development approach" and "AI integration" — both within my scope.

### Why This Worked

Documentation changed the unit of communication. Instead of meetings where context was shared verbally and lost, everything lived in Jira and Confluence. The 70% reduction in scope misunderstandings came from building infrastructure that made misunderstanding structurally harder.

### Final Takeaway

Predictability is a product. The weekly-to-quarterly shift could have been chaotic. By treating documentation, process maps, and incident analysis as first-class deliverables — not overhead — I made the cadence reliable. Eight consecutive on-time releases weren't the result of working harder; they were the result of making the system more predictable.

---

# PAGE 7: /cases/thoughtworks-pm-practice

**Page Title:** ThoughtWorks Brazil — Growing the PM Practice by 80%
**Hero Tagline:** How mentorship and training workshops scaled a consulting PM function during the company's most turbulent year.
**Tags:** Technology Consulting | Practice Leadership | Mentorship | C2C Marketplace | Growth
**Company:** ThoughtWorks
**Role:** Technical Product Manager
**Timeline:** December 2022 – November 2023
**Industry:** Technology Consulting, Consumer Marketplace

---

### Overview

ThoughtWorks (formerly NASDAQ: TWKS, taken private by Apax Partners for $1.75B in November 2024) was at peak revenue ($1.3B, FY2022) but facing an industry-wide slowdown. I had a dual mandate: grow ThoughtWorks Brazil's PM practice alongside the Head of Product, and serve as Technical Product Manager for a C2C marketplace platform.

### The Challenge

**Practice side:** The Brazil PM function needed more trained PMs, stronger practices, and better career pathways — during a year when the company would execute two major layoff rounds (~500 in March, ~700 in August 2023).

**Product side:** A C2C marketplace where feedback from users and stakeholders was collected but not systematically channelled into the product lifecycle.

### The Solution

**Practice:** Capability building through individual mentorship and structured training — not just headcount.

**Product:** Bi-weekly feedback loops systematically capturing input from users, stakeholders, feature requests, evaluation notes, and usage data, directly feeding the product lifecycle.

### My Role

Technical Product Manager spanning internal practice leadership and external client delivery.

### Strategy and Approach

**Practice growth:** Hands-on mentorship (5 PMs individually) and structured training (8 workshops on discovery, delivery, stakeholder management, career progression). The focus was on making existing PMs better, not just hiring more.

**Marketplace:** Replaced ad-hoc feedback collection with structured bi-weekly loops using Figma and Jira. This created a direct pipeline from user insight to product decision.

### Cross-Functional Alignment

- Partnered with Head of Product on strategy and roadmap execution
- Collaborated with engineering and design teams on feedback integration
- Engaged with product leadership on both internal and external partner strategies
- Contributed to pro-bono initiatives for small agriculture businesses

### Clear Expectations and High Stakeholder Trust

The practice growth occurred during ThoughtWorks' most difficult year. Maintaining delivery quality and growing capability while the organisation restructured around us required careful navigation of morale, priorities, and resource constraints.

### Results

- **80% growth** in PM practice size
- **5 product managers** mentored with career guidance
- **8 training workshops** on discovery and delivery
- **45% increase** in feature relevance for C2C marketplace
- **50+ use cases** with test plans, cutting clarification cycles by 60%
- Contributed to disability inclusion study
- Built digital platforms for agriculture businesses (pro bono)

### Why This Worked

Focusing on capability (training, mentorship) rather than just capacity (hiring) meant the practice could sustain quality even when headcount was constrained by layoffs. The PMs I mentored became force multipliers.

### Final Takeaway

Growing a practice is a product management problem. The PMs were the product. The workshops were the features. The 80% growth was the outcome. The skills I used — understanding needs, prioritising, measuring — were the same as any product. The context was different; the discipline was identical.

---

# PAGE 8: /cases/accenture-telecom-chatbot

**Page Title:** Accenture / Telefonica — The Technical Foundation
**Hero Tagline:** Five years of building production systems that gave me the engineering credibility I bring to product management today.
**Tags:** Telecommunications | Full Stack Development | System Migration | Chatbot | JavaScript | Oracle
**Company:** Accenture
**Role:** Full Stack Developer
**Timeline:** April 2014 – April 2019
**Industry:** Telecommunications
**Client:** Telefonica

---

### Overview

Accenture is a Fortune Global 500 professional services company. I worked as a Full Stack Developer on Telefonica's customer experience platform, building chatbot services and leading system migrations. This five-year period was my technical foundation.

### The Challenge

- Telefonica needed better digital customer engagement across social media platforms
- Critical systems on Sybase were expensive and slow
- Large transactions suffered from unoptimised code
- Chatbot needed to work across different client configurations and platforms

### The Solution

Customer-facing chatbot (JavaScript stack), Sybase → Oracle migration, SQL optimisation, and database integrations with Java-based applications.

### My Role

Full Stack Developer: backend services, system migration, SQL optimisation, database integrations.

### Results

- **20% user engagement increase** through chatbot across social media
- **30% maintenance cost reduction** and processing speed improvement (Sybase → Oracle)
- **25% performance gain** during large transactions through SQL optimisation
- Chatbot integrated across multiple client configurations and social platforms
- Implemented Scrum ceremonies and Continuous Delivery practices

### Technical Skills Built

This period gave me hands-on experience with:
- JavaScript full stack development
- Database migration (Sybase → Oracle)
- SQL optimisation and stored procedures
- Java-based application integration
- API service architecture
- Scrum and Continuous Delivery

### Why This Matters for Product Management

This foundation is why I can have real conversations with engineering about trade-offs. When I decided to migrate RECON from V0 to Payload CMS mid-sales-cycle, the confidence came from having done migrations myself. When I defined data architecture requirements for multi-tenancy, or pushed back on API design decisions at Liferay, the credibility came from having built production systems at scale.

I don't write code anymore. But I understand what a migration actually costs, what "technical debt" really means in production, and when an engineering team is giving me a genuine constraint versus a preference. That understanding changes how I make product decisions.

### Final Takeaway

Technical decisions are business decisions. The Sybase → Oracle migration wasn't a technical exercise — it was cost reduction. The chatbot wasn't a feature — it was a customer engagement strategy. Seeing technology through business outcomes is what eventually pulled me from engineering into product management. And it's what separates my product decisions from PMs who've never built anything themselves.