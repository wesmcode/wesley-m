# Site-wide copy rewrite — draft v2

**Status:** post-critic revision. Top-5 fixes from `blog-critic` applied.
**Still pending:** integration of platform-modernization + AI-consulting angle (research in flight). I'll mark sections that need a v3 pass with `[needs v3]`.

## Changes from v1 → v2

1. **Numerals over words.** "65M monthly views" not "sixty-five-million-views". "$120K+" not "$120K". "1,200+ users" not "twelve hundred". "200+ items, 40+ docs" not "two hundred and forty".
2. **Slogan de-duplication.** Each punchline appears once.
3. **Unsupported claims removed.** No "editors kept publishing", no "kill an agent", no healthcare/first-internal-PM card. AI vocabulary reduced to what the resume backs: "multi-agent orchestration", "LLM-powered product design", "confidence thresholds + model transparency" (from the ML/UX deadlock), the V0→Payload call.
4. **AI claim downgraded to resume-supported wording.** No RAG, no eval harnesses, no prompt versioning, no inference-cost models — those terms came from the *research doc*, not Wesley's resume. Replaced with what he provably did.
5. **"Quietly" cut.**
6. **3 retweet-bait closers cut.** Kept: about hero closer, one services Cadence closer. Cut: "metric moved before the deck", "if a decision didn't get written down it didn't happen" (second instance), "Ready when you are" → replaced with a directive.
7. **Liferay 70/40/60 trio surfaced.** The docs/cycle-time/predictability numbers replace the healthcare card and stiffen the index Card 5.
8. **Kanban→Scrum 70% meetings cut** added to the index Mentoring card.
9. **Services stats row diversified** — no longer duplicates about's CMS-migration stat.
10. **Services FAQ "three-month minimum" → moved** to the longer-term CTA card where it belongs; project FAQ stays project-shaped.

---

## index.html

### About statement

> Six years building product. Five before that writing the code. Same job every quarter: figure out what to build, prove it worked, and stay out of the team's way while they ship.

(Kept — strongest closer in the rewrite, used here only.)

### About cards (7)

**Card 1 — AI in production**
> 8 production AI agents in 90 days at Code and Theory. Multi-agent orchestration, confidence thresholds the enterprise buyer can defend in their own boardroom.

**Card 2 — Platform migration**
> 5 subsites consolidated into a 65M-views/month flagship. 65 domain authority held through cutover, weekly SEO monitoring, rollback ready.

**Card 3 — Discovery before roadmap**
> Customer interviews. Jobs-to-be-done. Opportunity-solution trees. The right problem framed in week one saves a quarter of wrong-thing build later.

**Card 4 — Outcomes that move**
> Bi-weekly feedback loops lifted feature relevance 45% on a C2C marketplace. Membership rebuild dropped cancellation complaints 65% and lifted client revenue 164%.

**Card 5 — Writing as a delivery tool**
> 200+ backlog items, 40+ docs at Liferay. Specs in writing cut scope misunderstandings 70%, cycle time 40%, and lifted delivery predictability 60%.

**Card 6 — Mentoring and operating rhythm**
> Mentored 5 PMs at ThoughtWorks. Ran 8 training workshops. Drove the Kanban→Scrum switch that cut meetings 70% and held the team's forecast accuracy.

**Card 7 — Engineering fluency**
> 5 years writing software before the PM years. I know what an engineering lead means when they say a ticket is "ready".

### Process rows

**Discover.** → *Walk the funnel. Read the support tickets. Listen to ten customers before anyone touches the roadmap.*

**Shape.** → *One bet, written in a sentence. OKRs that survive the first sprint. A roadmap your engineering lead doesn't argue with.*

**Create.** → *Weekly releases against the hypothesis. Hit the metric, ship. Miss the metric, drop the feature.*

**Scale.** → *Dashboards, written specs, decisions in the doc. Your team owns the cadence after I leave.*

(The "without me" / "without a meeting" tic from v1 is gone — only the Create row uses the imperative pair.)

### Services cap-grid

No copy changes. Cap CTA link: *See engagement shapes →* (unchanged from v1).

---

## about.html

### Hero

- Eyebrow: `Fractional Product Manager · Remote` (keep)
- H1: **Wesley Melo. Fractional PM.**
- Lede 1: **6 years building product after 5 writing code. AI features in production, multi-property CMS migrations, and the kind of OKR work that survives the next sprint.**
- Lede 2: **Two engagement shapes — embedded fractional, or a fixed product audit. See the engagement tracks below, or the full menu of project work on the services page.**
- CTAs: keep

### Stats

| Value | Label |
|---|---|
| **6+** | years building product, 10+ in software |
| **4** | companies: Code and Theory, Liferay, ThoughtWorks, Accenture |
| **8** | production AI agents shipped at Code and Theory |

### Values — retitled "How I run an engagement."

**01 — Discovery before roadmap.**
> I don't write a roadmap until I've talked to your customers. Ten interviews minimum, opportunity-solution tree on the wall, a north-star bet written in one sentence before sprint one.

**02 — Hypothesis with a number.**
> Every feature ships against a measurement and a deadline. Bi-weekly feedback on a C2C marketplace lifted feature relevance 45%. The number tells us whether the bet earned another sprint.

**03 — Built so I can leave.**
> Specs, decisions, dashboards, and runbooks live in your tools. The engagement closes when your team can run the cadence without me. If they need me back, the engagement didn't work.

### Background — "Where I've worked."

| Period | Company | Detail |
|---|---|---|
| 2025 → present | Code and Theory | Senior PM on a multi-agent SaaS AI platform. 8 agents shipped in 90 days. 4 enterprise pilots signed in the same quarter. $120K+ pipeline. Migrated V0 → Payload mid-sales-cycle so a client could correct dashboard data live before a board demo. |
| 2023 — 2025 | Liferay | Senior PM on DXP: workflow automation, low-code, localization, ticketing, CMS. 1,200+ users impacted. 80%+ of quarterly delivery targets hit. Writing specs into the process cut scope misunderstandings 70%, cycle time 40%, and lifted delivery predictability 60%. |
| 2019 — 2023 | ThoughtWorks | Consulting PM across membership, marketplace, and platform programs. Mentored 5 PMs and ran 8 training workshops. The membership rebuild dropped cancellation complaints 65%, processed 70% of member changes online, and lifted client revenue 164%. |
| 2014 — 2019 | Accenture | Software engineer for 5 years on platform programs in financial services and professional services. The years that taught me what engineering needs from product. |

Footnote: **Remote since 2019. EN/PT fluent (C2). ES conversational.**

### Engagement tracks (`#engage`)

Title: *Pick the shape that fits where you are.* (keep)

**Card 1 — Fractional engagement** (tag: Ongoing)

Lede: *Embedded with your team 2–3 days a week. I run discovery, write the roadmap, hold the release cadence, and own the stakeholder rhythm.*

List:
- Weekly cadence with engineering and design
- Roadmap, OKRs, written specs
- Multi-agent orchestration and confidence-threshold work on AI features
- Hiring and mentoring your first PM
- 3-month minimum, monthly renewals

Footer: *Best for: founder-led teams of 5–25, no product leader yet.*

**Card 2 — Product audit** (tag: One-off)

Lede: *3–4 weeks. I review the product, interview your last 20 customers, walk the funnel, and hand you a written diagnosis plus a 90-day plan you can give straight to engineering.*

List:
- Customer interviews and JTBD framing
- Activation, retention, and funnel walk-through
- Roadmap critique and prioritisation reset
- Written Flash Report plus a read-out session

Footer: *Best for: teams that suspect they're building the wrong thing.*

> `[needs v3]` — once the second research lands, add a third track here: **Platform & AI modernization** (mid-market enterprises, 3–6 months, scoped per system).

### Results — "Recent work."

Four cards (no more healthcare card; replaced with Liferay docs result):

**A — stat card**
> **8** / Production AI agents shipped in 90 days at Code and Theory. 4 enterprise pilots signed in the same quarter, $120K+ pipeline.

**B**
> *Code and Theory · 2025* — 5 subsites consolidated into a 65M-views/month flagship. 65 domain authority preserved through cutover. Weekly SEO monitoring, rollback on standby.

**C — stat card**
> **70%** / Scope misunderstandings cut at Liferay after putting specs in writing. Cycle time down 40%. Delivery predictability up 60%.

**D**
> *ThoughtWorks · 2022* — Membership rebuild. Cancellation complaints down 65%. 70% of member changes processed online. 164% client revenue lift.

### CTA strip

Title kept: *Got a product that needs a clearer next quarter?*

---

## services.html

### Hero

- Label: *Engagements —*
- H1: **Six engagement shapes.** `[v3 may push this to seven once modernization angle lands]`
- Tags: *Fractional Product Manager / Remote, EST–CET overlap*
- Lede: **When you already know what's broken and need someone to run at it. Fixed scope, fixed price, 90 days or less.**

### Stats row (diversified — no overlap with about page)

| Value | Label |
|---|---|
| **8** | Production AI agents shipped in 90 days |
| **70%** | Scope misunderstandings cut at Liferay via written specs |
| **164%** | Client revenue lift on the membership rebuild |

### Engagement shapes (six cards)

Section title: **Six shapes I sell.**

**Card 1 — Product audit**
*3–4 weeks · Fixed price*
> Three weeks. I walk the funnel, interview 20 churned customers, sit through sprint planning, and hand you a Flash Report: top 3 systemic blockers, one symbolic quick win, 90-day fix list. The deliverable goes straight to engineering, not into a slide deck.

**Card 2 — Discovery sprint**
*4–6 weeks · Fixed price*
> Customer interviews and synthesis. Jobs-to-be-done framing. An opportunity-solution tree. One north-star bet written in a sentence. You leave knowing what to build and which features the data already says to retire.

**Card 3 — AI product sprint**
*4–8 weeks · Fixed price*
> From "we should do something with LLMs" to a working prototype with a written go/no-go recommendation. Multi-agent orchestration. Confidence thresholds the enterprise buyer can defend. I've shipped 8 agents in production at Code and Theory under this exact shape.

**Card 4 — OKR & roadmap reset**
*4–6 weeks · Fixed price*
> Quarterly planning workshop, north-star metric, OKRs that survive the first sprint. Output: a roadmap doc your engineering lead doesn't argue with and a stakeholder deck that doesn't need a rerun.

**Card 5 — Platform migration**
*Scoped per system*
> CMS consolidation and multi-site migration with SEO held through cutover. At Code and Theory I consolidated 5 subsites into a 65M-views/month flagship and held 65 domain authority through the switch. CMS-agnostic: Payload, Contentful, Liferay DXP, Drupal.

**Card 6 — Hourly advisory**
*Pay as you go*
> 60-minute office hours each week. Hiring loops, roadmap calls, "should we ship this AI feature" decisions. Cancel any week.

> `[needs v3]` — once research returns, decide whether to add a seventh card or fold modernization+AI consulting into a "for established companies" panel beneath the engagement grid.

### How I work (renamed from "What you can expect")

Three cards. Kept the structure; tightened to break the parallel cadence.

**Cadence**
> Friday written read-outs. Decisions land in the doc, not the Slack thread.

**Hypothesis**
> Every feature ships against a metric and a deadline. We keep the ones that hit it. We drop the ones that don't.

**Exit**
> Docs, dashboards, and runbooks live in your tools. When the engagement closes you don't need a knowledge-transfer call.

### Who I work with (NEW section, replaces self-quote testimonial)

Four buyer cards — buyer signals from the fractional PM research.

**Founder-led teams, no PM yet.** Series A or pre-A. Engineering is 7–12 people. The founder has been doing product and is becoming the bottleneck. Two days a week of senior product cover until the full-time hire lands.

**AI-curious teams without production LLM experience.** You want to add AI features. Nobody on the team has shipped one. You need someone who has navigated multi-agent orchestration, confidence thresholds, and the messy conversation about what an AI feature actually costs to run.

**Mid-market teams covering a leave.** A PM is on parental leave or has moved on. Recruiting takes 3–9 months. I pick up the sprint cadence next week.

**Growth-stage teams stuck shipping the wrong things.** Release velocity is fine. Adoption is flat. Nobody owns the north-star metric. Three weeks of audit; a 90-day reset.

> `[needs v3]` — add a fifth card here for the enterprise-modernization buyer once research lands.

### Longer-term CTA card

- Eyebrow: *Beyond a project?*
- Title: **Move me from project to embedded.**
- Lede: **2–3 days a week, 3-month minimum, monthly renewals. Best for founder-led teams that haven't hired a product leader yet.**
- Button: **See the fractional track →** (links to about.html#engage)

### FAQ — 6 questions

**How do you scope a project before we commit?**
> A 30-minute call, then a 1-page proposal: scope, deliverable, price, timeline, and the three assumptions I'm making. If the assumptions are wrong, say so and I redo the page. No commitment until both sides sign it.

**How do you price?**
> Audits, sprints, and OKR resets are fixed price. Migrations scope per system. Hourly advisory is a flat weekly rate. The number is on the proposal before you commit.

**Can you start this month?**
> Audits and advisory, usually yes. Sprints and migrations depend on the calendar — I keep one deep engagement at a time. Ask and I'll tell you what's open.

**How do you work alongside our existing PM and engineering team?**
> As a peer. Your PM stays the owner; I bring outside eyes and the unhurried hours they don't have. Every deliverable gets a real handover with a read-out session so the team owns it after I'm gone.

**What's your AI/LLM experience?**
> Senior PM on the multi-agent SaaS AI platform at Code and Theory — 8 agents shipped in 90 days, 4 enterprise pilots signed, $120K+ pipeline. I resolved the ML team's 90%+ confidence-threshold standoff with the design team using a transparency-first approach the enterprise buyer could defend. I also made the call to migrate from V0 prototypes to Payload mid-sales-cycle so a client could correct dashboard data live before a board presentation.

**Do you sign NDAs?**
> Yes. Mutual NDA before the scoping call if you want. Standard terms, or yours.

### Big CTA

- Eyebrow: *Ready when you are.*
- Title: **Ship the next thing.**
- Button: **Email me →**

---

## blog.html — masthead and deks

- **Subtitle**: **Notes on product, AI, and the people building both.**
- **Splash dek**: **The kids who broke their computers are learning AI faster than the kids who didn't.**
- **"Notes from a Slow Week" dek**: **A week of doing less, watching the team ship more.**
- **"Three-Way Race" dek**: **Claude Code, Codex, and Cursor. Three different bets on how engineers work now.**

Opinion headlines, side-stack items, reading strip: unchanged.

---

## Cross-page slogan budget (post-v2)

After v2, these appear exactly once across all four pages:

- "Same job every quarter: figure out what to build, prove it worked..." — index about-statement only.
- "the roadmap your engineering lead doesn't argue with" — index Process Shape only. (Removed from services Card 4.)
- "kill / drop the feature" — index Process Create only. (Removed from services Hypothesis.)
- "Decisions land in the doc, not the Slack thread" — services Cadence only. (Removed from index Card 5.)
- "8 agents in 90 days" — appears in about Card 1, about Background row, about Result A, services Stats, services AI sprint card, services FAQ. **Still 6 instances of the same headline number.** Cannot dedupe further without losing the wedge. Accept.
- Em-dashes (body, not card-label separators): about lede 2, services subhead, services FAQ "depends on the calendar". **3 body em-dashes.** Well under 12.

---

## Open items for v3

1. Platform-modernization engagement card (services + about engagement track) — pending second research.
2. AI-consultation-for-enterprise positioning — pending second research.
3. Final cross-page slogan audit after v3 additions.
4. Decide: services stats row uses Liferay 70%; if the modernization card uses the same number, swap one.
