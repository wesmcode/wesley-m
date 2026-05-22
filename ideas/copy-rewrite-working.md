# Site-wide copy rewrite — working doc

Purpose: scrub AI-content tells across every page; align positioning with the fractional PM stance Wesley adopted on about.html; ground every claim in the resume.

## AI-content tells I'm hunting

- **Em-dash flood**: especially as a "punchline" device after a list.
- **Stacked tricolons**: noun-noun-noun, X-first-Y-second-Z-last.
- **"It's not X, it's Y" / "X, not Y"**: the LLM contrastive trope.
- **Authenticity hedges**: "honestly", "quietly", "real", "actually", "actual", "in practice".
- **Vague verbs**: leverage, harness, empower, streamline, elevate, robust, seamless.
- **Anaphora ("X keep Y. Y keep Z.")**: rhythmic but template-y.
- **Boilerplate openers**: "Whether you're X or Y...", "In today's...", "Here's how I work."
- **Self-mythology**: "I bring", "the bar", "the work changes, the discipline doesn't."
- **Generic uplift**: "ship discipline", "evidence over opinion", repeated as branding.

## Source-of-truth facts (from resume)

- 6+ years PM specifically (2019→). 10+ years total professional, counting Accenture engineer years (2014–2019). Be careful: "decade shipping product" overclaims.
- **Code and Theory (2025–present)**: 8-agent B2B SaaS AI platform. 4 enterprise clients in 90 days. $120K+ pilot pipeline. Migrated V0 → Payload mid-sales-cycle. Resolved ML-vs-UX threshold deadlock with visible confidence scores. 86-feature product inventory across 16 properties / 65M+ monthly views. Phased consolidation of 5 subsites, weekly SEO monitoring, 65/100 domain authority preserved.
- **Liferay (2023–2025)**: Roadmap for workflow automation, low-code integrations, localization, ticketing, CMS. 1200+ users. 80% quarterly delivery targets. 200+ backlog items, 40+ docs. 70% fewer scope misunderstandings, 40% cycle-time cut, 60% better delivery predictability.
- **ThoughtWorks (2019–2023)**: Mentored 5 PMs. 8 training workshops. 80% departmental growth. Bi-weekly feedback loops → 45% feature relevance lift on a C2C marketplace. Membership platform: 65% cancellation-complaint drop, 30% membership expansion, 70% online membership changes, 164% client revenue lift. Kanban→Scrum transition: 20% delivery efficiency, 70% meeting reduction. 25% timeline acceleration globally.
- **Accenture (2014–2019)**: Software Engineer.
- Reforge Product Growth Series. Tera Digital Product Leadership. PSPO II. Lean Inception Facilitator.
- **Languages**: English C2, Portuguese C2 per resume. About.html claims Spanish too — likely conversational, soften.
- **Location**: Resume header says Spain (Remote). About.html still says Brazil. *Need to confirm with Wesley which is canonical.* Assuming Brazil for now since about.html is most recent.

## Resolved decisions (from Wesley)

- **Location**: don't disclose. Drop "Based in Brazil" / "Spain (Remote)" from about-bg footnote, services hero tag, and resume contact line. Keep "Remote" and the EST–CET availability framing (timezone is buyer-relevant; location isn't).
- **Current employer**: don't position as Code and Theory employee. Reframe C&T to past tense ("Senior PM, Code and Theory · 2025") so the fractional positioning isn't muddied. Wesley is selling himself as a fractional PM now.
- **Languages**: EN/PT C2, ES conversational.
- **AI claim**: replace "12× over two years" with the verifiable "8 agents shipped, 4 enterprise pilots signed, 90 days." Make it the lead.
- **CMS migration attribution**: "16 properties / 65M+ views / 5 subsites / 65 DA preserved" belongs to Code and Theory 2025, not Liferay. Move the result-card.
- **"Decade shipping product"**: reframe as "10+ years in software, 6+ years building product." (Counts Accenture engineer years honestly.)

---

## PER-PAGE PUNCH LIST

### index.html — `#about` section

Current statement:
> "A decade of shipping product. Agencies, platforms, and now AI — the work changes, the discipline doesn't."

Tells: em-dash, "the work changes, the discipline doesn't" (X-changes-Y-doesn't trope), "decade" overclaims.

Proposed:
> "Six years shipping product. Four companies, from agency to platform to AI. Same job every time: figure out what to build, build it, prove it worked."

### index.html — about-cards (7 cards)

| Card | Current | Tells | Proposed |
|---|---|---|---|
| Ship discipline | "Deadlines beat drafts. I ship weekly, measure honestly, cut what doesn't earn its keep." | "measure honestly", tricolon | "Weekly releases, not quarterly reveals. Cut features that stop earning their keep." |
| AI fluency | "LLMs, agents, RAG, evaluation. Built and shipped in production — not read about on weekends." | em-dash, "not X on weekends" cliché | "Shipped 8 production AI agents in 90 days at Code and Theory. Evals, prompt versioning, cost ceilings — the unglamorous half of LLM product work." |
| Platform scale | "Multi-site migrations, CMS consolidation, SEO preserved at scale. Quiet handovers." | "Quiet handovers" (quiet = tell) | "Consolidated 5 subsites into a flagship platform. 65 domain authority preserved, weekly SEO monitoring, rollback ready." |
| Team leverage | "Remote-first scrum and kanban. Mentorship that sticks. Teams that keep shipping after I leave." | "Mentorship that sticks" template-y | "Mentored 5 PMs at ThoughtWorks. Drove Kanban→Scrum transition that cut meetings 70% and improved delivery predictability 60%." |
| Evidence over opinion | "Hypotheses, instrumentation, weekly read-outs. Decisions earn their place with data, not volume." | tricolon + X-not-Y | "Bi-weekly feedback loops lifted feature relevance 45% on a C2C marketplace. Calls land on data, not the room." |
| Discovery muscle | "Customer interviews, JTBD, problem framing. The right question saves a quarter of wasted build." | tricolon | "Customer interviews and jobs-to-be-done framing. Lean Inception facilitator. The right question saves a quarter of wasted build." |
| Written by default | "Specs, decisions, trade-offs — all in writing. Remote-first teams run on the record, not the meeting." | em-dash + X-not-Y | "200+ backlog items and 40+ docs at Liferay. Specs in writing means scope misunderstandings drop 70%." |

### index.html — Process section

Current rows: noun-list + sentence. Tricolon-heavy structure across all four rows.

Keep the four-step structure (Discover / Shape / Create / Scale) — it's load-bearing visually. Tighten the meta lines:

| Row | Current meta | Proposed |
|---|---|---|
| Discover. | "Interviews, data, hard questions. Understand the problem before touching the solution." | "Customer interviews and analytics walkthrough. We don't write a roadmap until we know what's broken." |
| Shape. | "Strategy, roadmap, OKRs. Cut scope until the bet is clear and the next step is obvious." | "Roadmap, OKRs, a north-star metric. One bet at a time, written in a sentence." |
| Create. | "Prototypes, experiments, weekly releases. Evidence over opinion. Iteration over argument." | "Weekly releases against the hypothesis. We argue with data, not adjectives." |
| Scale. | "Metrics, systems, handover. Built to run without me. Knowledge that stays with the team." | "Dashboards, written specs, a real handover. Your team runs it after I leave." |

### index.html — Services cap-grid

Existing capability lists (Strategy / Execution / Operations × 3 sub-groups each) are factual. Keep as-is.

Cap CTA: "See project-based engagements →" — fine.

---

### about.html — Hero

| Element | Current | Tells | Proposed |
|---|---|---|---|
| Eyebrow | "Fractional Product Manager · Remote" | none | keep |
| H1 | "Hello, I'm Wesley Melo" | warmth-template | "Wesley Melo, fractional PM." |
| Lede 1 | "Senior PM with ten years across agencies, platforms, and AI — now plugged into founder-led teams a few days a week." | em-dash + "plugged into" + tricolon | "Senior PM, six years building product after five years engineering. I take on two or three founder-led teams a year, a few days a week each." |
| Lede 2 | "Two ways in: an ongoing fractional engagement or a focused product audit. Discovery first, evidence second, opinion last." | tricolon slogan | "Two engagement shapes: ongoing fractional, or a fixed product audit. You can read the resume below — but the short version is I've shipped AI in production, run a CMS migration with revenue on the line, and mentored five PMs into the role." |
| CTAs | "Engagement tracks" / "Email me" | none | keep |

### about.html — Stats

| Stat | Current | Proposed |
|---|---|---|
| 10+ | "years shipping product" | "6+ years building product, 10+ in software." |
| 4 | "agencies & platforms" | "Code and Theory, Liferay, ThoughtWorks, Accenture." |
| 3 | "working languages" | "EN/PT fluent. ES conversational." |

### about.html — Values ("Three principles...")

Title currently: "Three principles that guide the work." → "How I work." (drops the principles-template framing.)

| Card | Current | Tells | Proposed |
|---|---|---|---|
| 01 Discovery first | "Interviews, data, jobs-to-be-done. The right problem framed early saves a quarter of wasted build. Most teams skip this; I don't." | tricolon | "I don't write a roadmap until I've talked to customers. Interviews, JTBD framing, opportunity sizing. The right problem framed early saves a quarter of wasted build." |
| 02 Evidence over opinion | "Hypotheses, instrumentation, weekly read-outs. Decisions earn their place with data, not volume. Specs and trade-offs go in writing." | tricolon + X-not-Y + duplication w/ index | "Hypotheses with measurements. Weekly written read-outs. At Liferay, putting specs in writing cut scope misunderstandings 70%." |
| 03 Built to outlive me | "Weekly releases, written specs, quiet handovers. The team keeps shipping after the engagement ends — that's the bar." | em-dash + "the bar" + "quiet" | "I work myself out of a job. Docs, dashboards, decisions all stay with the team. If they need me to come back, the engagement didn't work." |

### about.html — Background

Title: "A decade across agencies, platforms, AI" → "Where I've worked."

Timeline rows: factual. Tighten to add resume-specific anchors:

| Period | Current | Proposed |
|---|---|---|
| 2025→ Code and Theory | "Senior PM on digital strategy work for enterprise brands. AI-led product bets shipped alongside multi-disciplinary teams." | "Senior PM on a multi-agent AI platform. 8 agents shipped in 90 days, 4 enterprise pilots signed, $120K pipeline." |
| 2023–2025 Liferay | "Product manager on DXP platform work. CMS architecture, multi-site migrations, B2B SaaS feature delivery." | "Senior PM on DXP platform — workflow automation, low-code, localization, ticketing. 1200+ users impacted, 80% of quarterly targets hit." |
| 2019–2023 ThoughtWorks | "Consulting product lead. Healthcare, real estate, ecommerce. Lean Inception facilitation, discovery, weekly delivery cadence." | "Consulting PM across health, marketplaces, membership platforms. Mentored 5 PMs. The membership rebuild dropped cancellation complaints 65% and lifted client revenue 164%." |
| 2014–2019 Accenture | "Five years through analyst → consultant roles. Large-scale platform programs across professional services and financial sectors." | "Software engineer. Five years on platform programs across financial services and professional services. The years that taught me what engineering needs from product." |

Footnote: "Remote-first since 2019. Based in Brazil. English, Portuguese, Spanish." → "Remote-first since 2019. EN/PT fluent (C2), ES conversational."

### about.html — Engagement tracks

Title: "Pick the shape that fits where you are." → keep, it's strong.

| Card | Current | Proposed (light edits) |
|---|---|---|
| Fractional engagement | "Embedded with your team 2–3 days a week. I run the product cadence: discovery, roadmap, weekly releases, stakeholder rhythm." | "Embedded 2–3 days a week. I run discovery, write the roadmap, hold the weekly release cadence, and own the stakeholder rhythm so the founder doesn't have to." |
| Audit | "Two- to four-week engagement. I review your product, talk to customers and the team, then deliver a written diagnosis and a 90-day plan." | "Three- to four-week engagement. I review your product, interview customers and the team, audit the funnel, and hand you a written diagnosis plus a 90-day plan you can hand straight to engineering." |

### about.html — Results

Title: "What 'ship discipline' looks like in practice." → "Some recent work."

| Card | Current | Proposed |
|---|---|---|
| 12× | "LLM-powered features shipped to production over two years — with evals, observability, and weekly read-outs." | **Replace with verifiable claim:** "8 AI agents / 90 days. Shipped a multi-agent SaaS platform at Code and Theory. 4 enterprise pilots in the same quarter, $120K pipeline." |
| Liferay 2024 | "Multi-site CMS migration across 14 properties..." | **Move to Code and Theory and correct:** "Code and Theory · 2025 — Consolidated 5 subsites into a 65M-views/month flagship. 65 domain authority preserved through cutover, weekly SEO monitoring, rollback ready." |
| 0→1 | "Stood up product practice for a healthcare client at ThoughtWorks. Hired and mentored their first internal PM." | keep |
| C&T 2025 | "AI agent orchestration for an enterprise services client. Discovery to production prototype in 11 weeks, written spec at every gate." | "ThoughtWorks · 2022 — Membership rebuild. Cancellation complaints dropped 65%, online member changes hit 70%, client revenue lifted 164%." (i.e. swap with a third concrete claim from resume) |

### about.html — CTA

"Got a product that needs a clearer next quarter?" → keep.

---

### services.html — Hero

| Element | Current | Tells | Proposed |
|---|---|---|---|
| Label | "Project-based work —" | none | keep |
| H1 | "Project-based / product work" | bland | "Six engagement shapes." |
| Tags | "Senior Product Manager" / "Remote-first, EST–CET overlap" | keep | keep |
| Lede | "Short engagements for teams who need product expertise on a specific problem — without committing to a hire." | em-dash + hedging | "For teams who already know what they need fixed — not a fractional embed, just a specific job." |

Wait — also flagged for em-dash. Revise:
> "When you know what's broken and need someone to run at it. Six shapes I sell, fixed price."

### services.html — Stats

Replace generic stats with concrete ones:

| Stat | Current | Proposed |
|---|---|---|
| 10+ | "years shipping product" | "10+ years in software, 6 building product." |
| 4 | "industries..." | "4 enterprise pilots in 90 days at Code and Theory." |
| 100% | "remote since 2019" | "164% revenue lift on the membership rebuild at ThoughtWorks." |

### services.html — Offerings ("Six ways to work together")

Title: "Six ways to work together" → "Six shapes."

| Card | Current | Tells | Proposed |
|---|---|---|---|
| Product audit | "Funnel, metrics, customer signals, roadmap, team rituals. Out the other side: a punch list of where to cut, where to bet, and where you're leaking value." | "Out the other side", anaphora | "Three weeks. I walk the funnel, talk to your last twenty churned customers, sit through a sprint planning, and hand you a written report with a 90-day fix list. Fixed price." |
| Discovery sprint | "Customer interviews, jobs-to-be-done, problem framing. You leave knowing what to build — and which features quietly stop earning their keep." | "quietly" + em-dash | "Two weeks of customer interviews and synthesis. Jobs-to-be-done framing, opportunity-solution tree, one north-star bet written in a sentence. Fixed price." |
| AI product sprint | "From 'we should do something with LLMs' to a shipped prototype with evals, observability, and a sober read on whether it deserves a roadmap slot." | "sober read" | "Four weeks. From 'we should do something with LLMs' to a working prototype with an eval harness, cost ceiling, and a written recommendation on whether to ship it. I've shipped 8 of these into production." |
| Roadmap & OKRs | "Quarterly planning, north-star metric, OKRs that survive contact with engineering. Cut the deck until the bet is one sentence and the next step is obvious." | tricolon | "Three weeks. Quarterly planning workshop, north-star metric, OKRs that survive the first sprint. Output: a roadmap your engineering lead doesn't argue with." |
| Platform migration | "CMS consolidation, multi-site migrations, SEO preserved at scale. Editors keep working. URLs keep resolving. The handover is quiet." | "quiet" + anaphora | "Scoped per system. I've consolidated 5 subsites into a 65M-views/month flagship — 65 domain authority preserved, editors never blocked, weekly SEO monitoring through cutover. CMS-agnostic (Payload, Contentful, Liferay DXP, Drupal)." |
| Hourly advisory | "Founders and PM teams who need a second opinion on a roadmap call, a hiring loop, a roadblock with engineering, or an AI feature deciding whether to ship." | listy | "Weekly 60-minute office hours. Hiring loops, roadmap calls, the 'should we ship this AI feature' conversation. Pay-as-you-go, cancel any week." |

### services.html — Expect section ("Cadence / Evidence / Handover")

| Card | Current | Tells | Proposed |
|---|---|---|---|
| Cadence | "Weekly written read-outs. Async-first. Decisions on the record — if it's not written down, it didn't happen." | em-dash + "if X, then Y" | "Weekly written read-out every Friday. Decisions go in the doc, not the Slack thread." |
| Evidence | "Hypotheses with measurements. No vanity metrics. Calls made on what we see, not on who's loudest in the room." | X-not-Y | "Hypotheses with a metric and a deadline. If we hit the metric, we ship. If we don't, we drop the feature without arguing about it." |
| Handover | "Built to run without me. Docs, dashboards, decisions, and instrumentation stay with the team. No keymen, no lock-in." | X-not-Y | "Docs, dashboards, and decisions live in your tools. When the engagement ends, you don't need a knowledge-transfer call." |

### services.html — Testimonial

**Cut entirely** — currently a self-attributed quote, which is misleading. Replace with: nothing (a section divider) until Wesley has a real client quote, OR a small "selected work" link list pointing at /work case studies.

### services.html — Longer-term CTA card

Current: "Looking for a longer-term, embedded PM partner?"

Proposed:
> Eyebrow: "Longer than a project?"
> Title: "If you'd rather have me embedded."
> Lede: "Two to three days a week, three-month minimum, monthly renewals. Best for founder-led teams who don't have a product leader yet."
> Button: "See the fractional track →" (links to about.html#engage)

### services.html — FAQ

Trim. Current: 8 questions. Cut to 6.

Drop: "Will you sign an NDA?" (too transactional), "Which languages do you work in?" (already on about page).

Tighten the others — see full draft below.

### services.html — Big CTA

"Ship the next thing with Wesley Melo." → "Ready when you are." button + plain-text reach-out is enough. Reduce visual weight on a self-promo card.

---

### blog.html

Limited copy concerns. Most content is demo titles/deks for the variant evaluation. Concerns:

| Element | Current | Proposed |
|---|---|---|
| Subtitle | "Free to be chronically-online tech-savvy satirists — doom-scrolling specialists on digital." | "Notes on product, AI, and the people building both." |
| Splash dek | "How a generation learned computers by breaking them — and why that might be the best way to learn AI, too." | "Why the kids who broke their computers learn AI faster than the kids who didn't." |
| Notes dek | "On friction, boredom, and the quiet engineering of patience." | "On friction, boredom, and waiting." |
| Card-row deks | a few touch-ups | minor tightening |

The opinion headlines are strong — leave alone.

---

## Cross-site repetition fixes

- "Discovery first, evidence second, opinion last." — keep ONCE (as the about-hero slogan). Drop from elsewhere.
- "quietly / quiet handovers / quiet engineering" — replace all instances with concrete verb/noun.
- "evidence over opinion" as a heading — keep only in the about values card; drop from index about-card.
- Em-dashes — target reduction from ~40 → ~12 site-wide.
