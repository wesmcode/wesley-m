# Client-Acquisition OS — Strategy & Roadmap

> Living document. Scope: the **wesley-m** project only. We work one phase at a time, with goal
> analysis and implementation per phase on Wesley's go. The Change log at the bottom tracks decisions
> across sessions.

## Context

The goal is a multi-channel client-acquisition system for Wesley's Fractional Product Manager
practice: find high-fit prospects, prove expertise on the site, build trust on LinkedIn, and convert
attention into paid audits and retainers. The strategy brief describes 8 "engines." This document maps
each against what already exists, resolves the conflicts that surfaced, and divides the work into phases
that each ship a usable slice.

Headline finding from exploring the codebase: **the site and content tooling are largely built; the
entire acquisition machine is not.** We are not rebuilding the site. We are bolting an outbound +
distribution + measurement engine onto a mature foundation, and separating two blogs that are two
different businesses.

### What already exists (do not rebuild)

- A full Next.js app at `apps/blog/` serving the whole site (the React migration ran well past Phase 0).
- A `/services` page with the exact 3 offers from the brief, priced: Product + AI Systems Audit ($5k),
  AI & Platform Assessment ($10k), 90-Day Product Reset ($4k/mo from $12k), plus mentoring. FAQ, process,
  Cal.com booking, and a contact form are all on the page.
- 7 real, detailed case studies (`apps/blog/src/app/(work)/work/case-data.ts` + Payload `CaseStudies`).
- "Fractional Product Manager" positioning live, with Person + ProfessionalService JSON-LD.
- 38 subagents and ~12 skills: full blog authoring pipeline, AEO audit pipeline, case-planner, site-audit,
  research agents (research-news/reddit/forums/social/synthesizer), `deep-research`, `search-online`.
- Payload CMS on Neon Postgres, Vercel deploy, MCP servers for `postgres`, `exa`, `ddg`, `playwright`, `vercel`.

### What does not exist (the work)

Prospecting automation, teardown generator, CRM/follow-up tracking, the PM blog, LinkedIn distribution +
carousel generation, a metrics/growth agent, and any scheduled job. There is zero social/cross-posting code today.

### Decisions locked

1. **Crawler posture flips to "block PII only."** Commercial and content pages must be indexable by AI
   answer engines (that's what makes AEO/GEO possible). Only personal contact data (email, phone, address)
   stays protected. Email is already JS-obfuscated; keep that, don't expose phone/address.
2. **Two blogs, two stacks, two businesses.** See the architecture below. Direction Challenge (Payload) is
   the ad/affiliate money blog and moves to its own repo; the PM blog is pure React at `blog.wesley-m.com`,
   the authority engine that feeds LinkedIn.
3. **LinkedIn only.** No Instagram for client acquisition. Instagram/faceless social belongs to the ad-blog
   business, not this OS.
4. **Foundation is thin.** `/services` already covers conversion. Foundation work is discoverability
   (crawler posture + schema), not rebuilding pages. So Phase 0 is days, not weeks, then outbound.

## Blog architecture (the split)

Two separate properties that happen to share a heritage. Keep them apart on purpose.

- **Direction Challenge — the ad blog.** Stays on **Payload**. It must move into its **own separate
  repository ASAP** (urgent), even though active development of the ad/affiliate business comes later. It's a
  faceless, ad + affiliate, AI/SEO-ranked traffic business; the current Payload blog (variant A/B, satire
  voice) is its prototype. The urgency is the clean split, not the build: get it out of the wesley-m tree
  before the two entangle further. Beyond the extraction, it is out of scope for this OS.
- **PM blog — the authority engine.** Lives at **`blog.wesley-m.com`** (subdomain inside the wesley-m
  project), built in **pure React** (MDX/markdown content, no CMS), brand-consistent and easy to implement.
  It is the source of truth for insight content. Its job: map tech news in Wesley's lanes (digital
  transformation, modernization, growth strategy, AI applied cases and workflows for B2B and B2C), draft each
  piece in Wesley's POV and storytelling, cross-validated against a library of his prior insights/posts.
  Wesley can also author directly. Each post fans out to **3-4 adapted LinkedIn posts**.

**Stack consequence:** Direction Challenge leaves to its own repo ASAP; `blog.wesley-m.com` is then served by
the pure-React PM blog. Once the ad blog is extracted, wesley-m becomes a Payload-free React/Next app (simpler
builds, no Neon dependency for the public site). This must be done without breaking the live site, guarded by
tests (see Working agreement).

### Cross-post vs LinkedIn-only, answered

Recommendation: **write the insight once as a PM blog article (the durable, ownable, AI-citable asset), then
fan it out to 3-4 LinkedIn posts.** A LinkedIn-only post is rented distribution that never ranks and never
gets cited by an answer engine; the article is the asset that earns "Fractional Product Manager" search and AI
visibility. The PM blog is lightweight pure-React, so the article-as-source path stays cheap.

## The OS as a loop

Find prospects → research a real signal → approach with a POV/teardown → drive to the site → the site
proves expertise → publish an insight → fan out to LinkedIn → measure → improve targeting and content → repeat.

### 8 engines mapped to current state

| # | Engine | State | Phase |
|---|--------|-------|-------|
| 1 | Client-hunting automation (twice-weekly prospect research) | Missing | 1 |
| 2 | PM insight blog (tech-news + Wesley POV) | Missing (pure-React, net-new) | 0/2 |
| 3 | Blog → LinkedIn (1 post → 3-4 adapted posts + carousels) | Missing | 2 |
| 4 | Teardown generator (1-page, per prospect) | Missing | 1 |
| 5 | Metrics / growth agent | Missing (no analytics anywhere) | 3 |
| 6 | CRM / follow-up | Missing | 1 |
| 7 | Case-study repurposing | Cases exist, repurposing missing | 3 |
| 8 | SEO / AEO / GEO foundation | Partial (schema yes, crawlable no, per-offer pages no) | 0 |

---

## Phased roadmap

### Phase 0 — Foundation: get found, split the blogs (thin, ~1 week)

Goal: the existing strong site becomes discoverable by AI engines, and the two blogs are cleanly separated.

- **Flip the crawler posture.** Rewrite `apps/blog/public/robots.txt` to allow AI crawlers across commercial
  and content routes; remove the blanket `noai, noimageai` meta from commercial layouts (`(personal)`,
  `(services)`, `(work)`, PM blog). Keep PII protected: email stays JS-obfuscated, no phone/address in markup.
  Update `CLAUDE.md` so "preserve noai" becomes the PII-only rule.
- **Add the missing schema** to pages that already exist: FAQPage (the `/services` FAQ), Service per offer,
  BreadcrumbList, Organization at root, Article on PM posts. Reuse the JSON-LD pattern in
  `(personal)/layout.tsx` and `(services)/layout.tsx`.
- **Generate a real sitemap** (Next `sitemap.ts`) and submit in Search Console.
- **Per-offer pages (judgment call):** `/services` covers conversion. For narrow-query ranking, each offer
  wants its own URL. Start with anchor-addressable, schema-tagged sections (cheap); split into standalone
  `/product-ai-systems-audit`-style pages only when a target query proves worth it. Don't dilute the strong page early.
- **Split the blogs (repo extraction is the ASAP item).** Extract Direction Challenge (Payload) into its own
  **separate repository** first, so the two stop entangling. Then scaffold the **PM blog in pure React** at
  `blog.wesley-m.com` (MDX, brand-consistent), crawlable, with one seed article. Remove Payload from wesley-m
  after extraction. Every step guarded by tests so the live site never breaks.

Reuse: `site-audit` skill, `site-seo` / `seo-aeo-geo-specialist` agents, existing schema pattern.
Done when: Direction Challenge lives in its own repo, `blog.wesley-m.com` renders a pure-React PM seed article,
AI crawlers allowed, schema validates (Rich Results Test), sitemap submitted, and the test suite is green.

### Phase 1 — The money engine: hunt, teardown, track (the priority)

Goal: produce qualified prospects with a real signal and a ready-to-send POV, twice a week, with follow-up tracked.

- **Prospects store.** Start cheap and reversible: a Neon Postgres table (or a Google Sheet for v1) with the
  brief's fields: company, website, buyer, buying signal, pain hypothesis, best-fit offer, first-message draft,
  fit score, source links, status, follow-up date, reply, call booked, proposal sent, deal value. A polished
  admin comes later; v1 is reviewed via the `postgres` MCP or the Sheet. (Note: Payload is leaving wesley-m,
  so the CRM does not sit on a Payload collection.)
- **Prospecting skill `/hunt`.** Orchestrates research agents (`research-news`, `research-social`,
  `deep-research`, `exa`/`ddg` MCP) to find 12-80-person SaaS/AI startups, agencies/studios, and mid-market
  modernization targets in US/CA/UK on funding, hiring, AI-launch, and CMS/headless signals. Output is the
  structured row above. New thin agents: `prospect-finder` (signal sweep) and `prospect-qualifier` (fit score
  + offer match + draft message). Writes rows to the store.
- **Teardown skill `/teardown <company>`.** One agent produces the 1-page teardown (what I noticed, why it
  matters, hidden risk, quick win, what I'd audit first, relevant case proof). The bridge from outbound to a
  paid audit. Reuses research agents + `case-data.ts` for proof matching.
- **Schedule it.** A `/schedule` routine runs `/hunt` twice weekly (the brief's Mon/Thu 9am São Paulo). It
  runs in the cloud, so it fires even with the laptop asleep. Human reviews and decides who to approach; the
  machine never sends outreach on its own.

Reuse: research agent fleet, `deep-research`, `exa`/`ddg`/`postgres` MCP, `case-data.ts`, the skill+agent pattern.
Done when: `/hunt` returns scored prospects to the store, `/teardown` produces a clean 1-pager, the routine is live.

### Phase 2 — PM content engine + LinkedIn fan-out

Goal: turn tech news + Wesley's POV into a durable PM-blog article and 3-4 adapted LinkedIn posts, 2x/week.

> 2026-07-18: the LinkedIn half shipped its v1. `linkedin/` holds the voice/audience/news context files
> and the posts log; `/linkedin-post` drafts from news or case studies and `/cross-post <slug>` fans an
> article out, both gated on explicit approval before anything touches LinkedIn. Cadence and funnel live
> in `ideas/linkedin-growth-playbook.md`. Still open here: the article pipeline pointing at MDX, carousel
> image generation, and browser-session posting (needs the one-time LinkedIn login).

- **PM article pipeline (pure-React target).** Reuse the *markdown-producing* agents (`blog-planner` →
  `blog-researcher` → `blog-drafter` → `blog-critic`) but point the output at MDX files in the PM blog, not
  Payload. The Payload-specific `blog-formatter`/`blog-publisher` move with the Direction Challenge project; the
  PM flow ends in a simple markdown→MDX writer + commit/deploy. Add a news-monitoring step (reuse `research-news`,
  `exa`/`ddg`) scoped to Wesley's lanes, and a Wesley-voice layer (a small insight/post library inside
  wesley-m that the drafter references for POV and storytelling consistency, grounded in the global voice/persona
  instructions). Native to wesley-m; no external dependency.
- **Fan out to LinkedIn.** New `linkedin-repurposer` agent + `/cross-post <slug>` skill that turns one article
  into 3-4 adapted posts: a text post, a carousel (slide copy + generated images via `frontend-design`), a
  short comment/reply version, and an outbound follow-up snippet. Tone: calm, operator-led, one CTA.
- **Posting is human-in-the-loop first.** Per Wesley's own manual-publish-trial doctrine, the machine generates
  assets and the human posts (or schedules via a LinkedIn-friendly tool). Direct LinkedIn API posting to a
  personal profile needs approved partner access and is the wrong first bet. **This is the main external
  dependency and a decision for later.**

Reuse: markdown blog agents, `research-news`, `frontend-design`, trial-journal pattern.
Done when: one news item flows article → PM blog → 3-4 LinkedIn assets, reviewed and posted, with a logged result.

### Phase 3 — Measure and compound (growth agent + case repurposing)

Goal: close the loop so targeting and content improve from data, and the 7 cases become reusable proof.

- **Analytics first** (nothing tracks anything today): privacy-friendly analytics on the site + PM blog, and
  LinkedIn metrics (manual export to start). Reuse `analytics-tags-engineer`.
- **Growth agent.** Weekly summary: best topics and hooks, which posts deserve more depth, which prospect
  segment is replying, what offer to push next week. Feeds Phase 1 targeting and Phase 2 topic selection.
- **Case repurposing.** Each of the 7 cases becomes a LinkedIn post, a carousel, an outreach proof snippet, and
  a sales-call story. Reuse `case-planner` + `linkedin-repurposer`.

Done when: a weekly growth report exists and at least 2 cases are repurposed.

---

## Control surface & orchestration (the dashboard / n8n idea)

The instinct: a uTorrent/qBittorrent-style web app where one button scrapes the web for content topics and
another finds clients, with local n8n in Docker to keep it "free." The pattern is right; the substrate is where
it gets fragile.

What the research confirmed:

- **The qBittorrent pattern is exactly** a background worker + a thin web server exposing a REST API + a JS
  dashboard that polls job status. Good north star for the control panel.
- **"Free" n8n is not free.** Self-hosted Community is fair-code (fine for internal use), but it's a second
  always-on server you secure, upgrade, back up, and babysit, realistically $4-15/mo on a VPS plus your time.
  The killer for the laptop version: **missed scheduled runs during downtime are unrecoverable, and a sleeping
  laptop silently skips every twice-weekly hunt.** It's also RAM-hungry (4-8GB in practice).
- **n8n is glue, not brains.** The intelligence (finding good prospects, writing a teardown) happens in the LLM
  it calls, and that intelligence already lives in this repo's agents and skills.

Decision: **don't stand up Docker + n8n now, and don't build a separate web app.** Two cheaper, more reversible steps:

1. **v1 has no dashboard.** Run `/hunt`, `/teardown`, and content research as Claude Code skills and review the
   output. Zero infrastructure. Validate that the output is worth acting on before wrapping a button around it.
2. **When the button dashboard is worth it, build it into the wesley-m app.** Since Payload is leaving, the
   pattern is: a button hits a serverless endpoint that enqueues work, **Vercel Cron** runs it on cadence
   (always-on, unlike the laptop), status is reading job rows from the Neon table. Long jobs go to Vercel
   Workflows or Inngest/Trigger.dev. That's the qBittorrent pattern with no Docker, no Redis, no second host.

The two buttons map cleanly: "Research content" triggers the news-research + article pipeline; "Find clients"
triggers `/hunt`. The honest caveat: the heavy LLM reasoning runs in Claude Code, not inside a Vercel function,
so the app-button version either calls an LLM API directly or triggers the Claude Code pipeline. That wiring is
a Phase 1-to-2 detail, not a reason to add a server now. n8n earns a second look only later, if you accumulate
many non-LLM integrations and want a visual canvas, hosted always-on, never on the laptop.

## Cross-cutting deliverable: the LinkedIn growth playbook

**Delivered 2026-07-18.** Wesley supplied the research input (37 YouTube transcripts, `more/learn.txt`);
the distilled study lives in `ideas/linkedin-growth-learnings.md` and the operational playbook in
`ideas/linkedin-growth-playbook.md`. The content engine encodes the playbook via `linkedin/voice.md`,
`linkedin/audience.md`, `linkedin/news-sources.md`, and the `/linkedin-post` + `/cross-post` commands.
Decisions inside: posting-first (no commenting, human or AI), American English for US/EU buyers,
30 min/day, per-post approval gate, positioning as fractional product leadership (strategy + discovery,
never "fractional PO", per the Cagan analysis in the learnings doc).

## Critical files / where work lands

- Crawler posture: `apps/blog/public/robots.txt`, the commercial route-group `layout.tsx` files, `CLAUDE.md`.
- Schema + sitemap: `(personal)/layout.tsx`, `(services)/layout.tsx`, `(work)` pages, PM blog pages, new `sitemap.ts`.
- Blog split: extract the `(frontend)` route group + `variant-*.css` + Payload into the Direction Challenge
  repo; new pure-React PM blog routes in wesley-m (MDX), independent of Payload.
- Money engine: a Neon `prospects` table (or Sheet v1); new skills `/hunt`, `/teardown`, `/cross-post`; new
  agents `prospect-finder`, `prospect-qualifier`, `linkedin-repurposer` under `.claude/agents/`; a `/schedule` routine.
- Reused: `research-*`, `deep-research`, markdown `blog-*` agents, `case-planner`, `site-audit`,
  `seo-aeo-geo-specialist`, `analytics-tags-engineer`; MCP `exa`, `ddg`, `postgres`, `vercel`.
- Scope guard: everything here lives in the wesley-m repo.

## Verification

- Phase 0: `next build` passes (pre-push gate), Rich Results Test validates each schema, robots.txt shows AI
  crawlers allowed, sitemap returns all routes, Direction Challenge builds as its own project, PM blog renders a
  seed article in pure React. Confirm no email/phone/address leaks in raw HTML once noai is lifted.
- Phase 1: run `/hunt` once → scored prospect rows land in the store (query via `postgres` MCP);
  `/teardown <company>` produces a complete 1-pager; the scheduled routine fires on cadence.
- Phase 2: run the article pipeline + `/cross-post <slug>` → article publishes to the PM blog and 3-4 LinkedIn
  assets are generated and reviewed; log the result in the trial journal.
- Phase 3: analytics events fire, a weekly growth report generates, 2 cases repurposed.

## Open risks / dependencies

- **LinkedIn posting access.** Personal-profile API posting needs approved partner access; treat as a later
  decision. Start human-in-the-loop. Biggest external unknown.
- **Payload removal from wesley-m.** Sequenced as a cleanup after the ad blog is independent; the public site
  pages don't depend on Payload, so this is low-risk but real work. Until done, Payload cruft stays in the tree.
- **Crawler posture vs content protection.** Opening to AI raises scraping exposure; mitigated by keeping PII
  out of markup. Confirm no case study or resume page leaks contact data once noai is lifted.
- **Two-blog scope creep.** Direction Challenge is a separate business; keep it out of this OS beyond the extraction.
- **Outreach quality.** Generic AI outreach gets 1-3% replies and is increasingly detected; the teardown +
  real-signal approach is the moat. Keep the human in the approve-and-send loop.

## Working agreement (how we build)

- **Never break the current site.** The live site and its mobile look are protected. Refactors are
  visually-neutral unless a change is the explicit goal; verify with before/after where UI is touched.
- **Tests guard every change.** Add unit and functional tests around the risky moves (the Payload extraction,
  the crawler-posture flip, the PM blog, the prospects pipeline) so regressions are caught before they ship.
  The pre-push build gate already blocks broken `apps/blog` builds; we extend that with real tests.
- **Clean code as we go.** Refactor while adding, small functions, intention-revealing names, no dead code,
  no speculative abstractions. No giant batch rewrites.
- **One phase at a time.** We do goal analysis + implementation per phase, on Wesley's go. Nothing runs ahead.
- **Keep Wesley posted.** Every iteration ends with a plain-language summary of what changed, why, and the
  impact. The Change log below tracks decisions across sessions.

## Research inputs needed (Wesley to provide via drive)

Where outside best-practice research sharpens the build. Wesley researches and drops sources in the drive; the
relevant agent/skill encodes them.

- **LinkedIn growth for B2B solo consultants (2026):** cadence, hook formats, carousel vs text performance,
  comment strategy, Featured section, profile-as-landing-page, DM-to-call conversion. Feeds Phase 2.
- **Cold outreach that converts in 2026:** signal-based first-touch structure, reply-rate benchmarks, what
  triggers "fake personalization" detection. Feeds Phase 1 message drafting.
- **AEO/GEO specifics:** how answer engines (AI Overviews, Perplexity, Copilot) select and cite sources for
  consultant/service queries; current schema and content-structure best practice. Feeds Phase 0.
- **Repo-extraction approach:** cleanest way to split a Payload sub-app out of a Next monorepo without breaking
  the deploy (one Vercel project today; subdomain aliasing). Feeds Phase 0.
- **Pure-React MDX blog best practice:** the lightest brand-consistent MDX setup for `blog.wesley-m.com`.
- (Add others as they surface; new research gaps get flagged in each phase summary.)

## Change log

- 2026-07-18: **LinkedIn playbook delivered, content engine v1 built.** The 37-transcript study
  (`more/learn.txt`) distilled into `ideas/linkedin-growth-learnings.md` + `ideas/linkedin-growth-playbook.md`.
  Account diagnosed from analytics exports: 6,485 followers, dormant (34 impressions/90 days, last post
  July 2025), SSI 43, audience 21% decision-makers but BR-heavy. Decisions: posting-first (no commenting,
  human or AI), American English for US/EU buyers, 30 min/day, Claude manages the account with per-post
  approval (Wesley handles recruiter messages/DMs), positioning is fractional product leadership
  (strategy + discovery, never "fractional PO", per Cagan). No courses ever; newsletter/articles are the
  leveraged-income candidates (`ideas/2026-07-18-leveraged-income-path.md`). New idea logged:
  job-boards sourcing engine (`ideas/2026-07-18-job-boards-engine.md`). Built: `linkedin/` context files,
  `/linkedin-post`, `/cross-post`. Pending: one-time LinkedIn login in the Playwright session, profile
  overhaul application, first post.
- 2026-07-17: **Blog split executed.** Direction Challenge extracted to `wesmcode/direction-challenge`
  (own Vercel project, own Neon DB pending one manual step: accepting Neon marketplace terms; a
  `blog.dump` of the old schema sits in that repo ready to restore). Finding along the way: production
  never had DB credentials, so the live `/blog` had been silently 500ing; and the old Neon DB held only
  1 draft post, not the 15 assumed (the legacy migration ran one trial post). The 15 legacy post HTML
  files were rescued from git history into `direction-challenge/legacy/blog/`. wesley-m's `/blog` is now
  the pure-React MDX PM blog (seed article live, Blog restored to SITE_NAV, `sitemap.ts` added, resume
  excluded from sitemap). Payload removal from wesley-m still deferred.
- 2026-06-05: Strategy created. Two blogs split: Direction Challenge = Payload ad/affiliate blog, moves to its
  **own repo ASAP**; PM blog = pure React at **`blog.wesley-m.com`**, the authority engine that fans out to LinkedIn.
- Crawler posture flips to **block-PII-only** so the site can be cited by AI engines.
- **LinkedIn only** for client acquisition; no Instagram.
- Foundation kept thin: `/services` already converts; the gap is discoverability, not a rebuild.
- Dashboard/n8n idea: **don't** stand up Docker + n8n; start with skills, then build buttons into the app on
  Vercel Cron when validated.
- Scope guard: **wesley-m only**.
- Working agreement set: non-breaking, test-guarded, clean code, phase-by-phase, keep-posted.
