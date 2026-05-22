# Site #2 — Plan of Record

**Owner:** Wesley
**Status:** Draft for approval
**Created:** 2026-05-18
**Goal deadline:** 2026-11-30

---

## 1. The goal (binding)

**$8,000 USD total revenue from site #2 by November 30, 2026.**

- Time available: 21 hours/week (3h/day × 7 days), sustained for 28 weeks
- Total time budget: ~588 hours
- Revenue mix (target): ~$2,000 ads + affiliates, ~$6,000 digital products, stretch: ~$500 sponsorships

If by week 14 (end of August) we're not pacing toward $8k, we re-plan, not abandon.

## 2. Brand architecture

Two sites, two distinct brands, no overlap:

### Site 1 — `wesley-m.com` (existing domain)
- **Brand:** Wesley Melo, fractional Product Manager
- **Purpose:** Professional credibility and inbound consulting/work
- **Content:** Case studies, methodology, talks, client outcomes, PM-specific essays
- **Voice:** Senior practitioner. Useful. Specific. No satire, no lifestyle, no journaling.
- **"Direction Challenge" branding is REMOVED from here.** The Blog/Direction Challenge name moves to site #2 as a vertical.

### Site 2 — **"Wesley in Challenge"** (new domain TBD)
- **Master brand:** Wesley in Challenge
- **Concept:** A life run as a series of self-set challenges, documented in public. Each vertical is a named *Challenge* with its own focus and audience overlap.
- **Verticals (capped at 3 for Phase 0; more can be added later only after $1k/mo sustained):**

| Vertical | Focus | Audience |
|---|---|---|
| **Direction Challenge** | Travel, trips, places, tips, the "where" of the life | Active travelers, slow travel, kitesurf-curious |
| **Financial Challenge** | Money, freedom, how the life gets funded | Aspiring freedom-seekers, financially curious creators |
| **(slot held for vertical #3, decided after first 14 posts)** | TBD — likely "Skill Challenge" (kite/yoga/learning) OR "Health Challenge" | TBD |

- **Voice register:** Warm, first-person, specific. Sensory detail over generalization. Useful before clever. The voice you use when telling a friend over coffee what you actually learned.
- **Audience:** 28–45 adults figuring out how to design a life that isn't the default. They want to kitesurf, travel slow, build freedom, learn things, leave the desk. They follow you because watching one person do it beats ten generic guides.
- **Why this works for monetization:** personal-brand sagas convert better than faceless niches at smaller scale. A 1,500-subscriber list will buy a $47 guide at 5%+ conversion. A faceless niche site needs 15,000 subs to hit the same number. The saga is the moat. Each vertical eventually gets its own product line.

### Open decisions (flagged, not blocking Phase 0)

1. **Domain for site 2** — candidates: `wesleyinchallenge.com`, `wesleychallenge.com`, `wesleyin.co`, `inchallenge.co`. Pending Wesley's pick.
2. **Where do existing satirical tech essays live?** ("HTMX the React Killer", "Vibe Coder Confessional", "Three-Way Race for Your Terminal", etc.) These don't fit Direction Challenge (travel) or Financial Challenge (money). Three options:
   - (a) New vertical on site 2: "Builder Challenge" — tech/AI/work-as-craft essays
   - (b) Stay on wesley-m as a separate "Writing" section (contradicts "strictly work")
   - (c) Archive — they were good but don't fit the new architecture
   - **Recommendation:** (a) as vertical #3 instead of Skill/Health Challenge. They're already written, give site 2 immediate content, and "Builder Challenge" extends the brand naturally. Skill/Health get folded into Direction Challenge as post types.
3. **English grammar nit on "Wesley in Challenge"** — slightly off in English ("Wesley in Challenges" or "Wesley's Challenges" is more natural). Wesley's call. Weird names can become strong brands (Stripe, Notion). Flagging only.

## 3. Niche scope rule

Every post must (a) be part of your **actual life saga** AND (b) fit cleanly into **exactly one Challenge vertical**.

Test 1 — Is it the saga? Could this post have been written by someone who isn't living the life? If yes, it doesn't belong on site 2.

Test 2 — Which Challenge? If a post would fit two verticals, pick the dominant one. If it doesn't fit any vertical, it doesn't get written.

| Example | Verdict | Vertical |
|---|---|---|
| "How we funded 3 months in Brazil while learning to kitesurf" | ✅ | Financial Challenge (funding angle dominates) |
| "Week 1 of yoga in Jericoacoara: what changed" | ✅ | Direction Challenge (place-rooted) |
| "The setup that lets us travel 6 months a year" | ✅ | Financial Challenge |
| "Pros and cons of kitesurfing in Brazil's high season" | ✅ | Direction Challenge |
| "What 18 months of slow travel did to our savings" | ✅ | Financial Challenge |
| "Why we're not using AI to write our travel posts" | ✅ if vertical #3 is Builder Challenge | Builder Challenge |
| "Best high-yield savings accounts 2026" | ❌ | (pure advice, no saga) |
| "10 yoga poses for beginners" | ❌ | (generic listicle) |
| "How to negotiate a fractional PM contract" | ❌ | → wesley-m.com |

## 4. Content architecture: the cluster model

The saga moves in chapters. Each chapter is a **cluster of ~7 interlinked posts** published over ~2 weeks. Three cluster shapes — pick the one that fits what's actually happening in your life:

### Shape A — Trip cluster (one destination, ~2 weeks/2 months on the ground)
1. **Journal** — what the trip was, why you went, sensory opening
2. **Itinerary / how to recreate it** — practical, SEO-targeted, affiliate-heavy
3. **Pros + cons** — honest tradeoffs, builds trust
4. **Activity deep-dive (kite)** — gear, conditions, skill notes
5. **Activity deep-dive (yoga / surf / other)** — practice notes, what shifted
6. **Lifestyle recap** — daily rhythm, routines, what surprised you
7. **Financial + lessons reflection** — what it cost, what you'd do differently

URL: `/direction-challenge/<destination>/<post-slug>` · Pillar page: `/direction-challenge/<destination>/`

### Shape B — Milestone cluster (a thing you accomplished or changed)
1. **The moment** — the trigger / scene of hitting it
2. **The 12-month backstory** — how you got here
3. **What it actually took** — practical breakdown, gear/money/time
4. **What it didn't take** (myth-busting from your experience)
5. **Tools / setup that mattered** — affiliate-friendly without being a listicle
6. **What surprised you** — honest reflection
7. **What comes next** — sets up the next chapter

Examples: "First year of slow travel," "Doubled our savings rate," "From beach-start to upwind in 6 months," "The fractional PM stack that funds the saga"

URL: `/<vertical>/milestones/<milestone-slug>/<post-slug>` (vertical = `direction-challenge` | `financial-challenge` | `builder-challenge`)

### Shape C — Decision cluster (a life choice you're working through, in public)
1. **The fork** — what you're choosing between, why now
2. **The data** — what you researched, what surprised you
3. **The people** — who you talked to, what they said
4. **The trial** — what you tested before committing
5. **The numbers** — financials, lifestyle impact
6. **The choice** — what you picked and why
7. **The first 30 days** — early signal that you were right or wrong

Examples: "Where we're basing in 2027," "Quitting the last salaried client," "Buying a kite van vs. renting forever"

URL: `/saga/decisions/<decision-slug>/<post-slug>`

### Cluster math
6 clusters × 7 posts = **42 posts in 28 weeks** = 1.5 posts/week average.
Realistic mix: 3 trip clusters, 2 milestone clusters, 1 decision cluster. Adjust to what actually happens in your life — don't force a shape that isn't real.

Internal linking: every post in a cluster links to the other 6. Pillar page per cluster ties them together and is what ranks on Google.

## 5. Stack decisions

| Decision | Choice | Why |
|---|---|---|
| Codebase | Fork `apps/blog/` to new repo | Independence, separate failure domain, separate Vercel project |
| Domain | TBD (placeholder Vercel URL OK for Phase 0) | User decision pending |
| Hosting | Vercel Hobby → Pro when traffic justifies | Free for months |
| CMS | Payload (forked) | Already mastered |
| DB | Neon Postgres (new instance) | Same as wesley-m |
| Analytics | Plausible ($9/mo) | LCP-friendly; GA4 hurts Mediavine acceptance |
| Email | Beehiiv (free → paid at 2.5k) | Built-in ad network monetizes early |
| Newsletter capture | Inline + exit intent + sidebar | Lead magnet: destination cheatsheet PDF |
| Pinterest | Tailwind ($25/mo) | Highest-ROI distribution for this niche |
| Product checkout | Lemon Squeezy (5% + $0.50/txn) | Handles global VAT, no monthly fee |
| SEO tooling | Free (Google KP + AnswerThePublic + Reddit) Phase 0–2; Ahrefs Lite from month 3 | Don't pay until decisions need the data |
| Image gen | Midjourney or Ideogram (~$10/mo) | Pin variants + non-photo hero images |
| Pin design | Figma templates (you already use it) | Skip Canva Pro |

**Phase 0–2 monthly burn: ~$60. 6-month total: ~$420.** Break-even on tools: month 2.

## 6. What changes from `apps/blog/`

**Strip:**
- `noai, noimageai, noarchive, nosnippet` meta tags — site #2 needs Google + AI Overviews
- A/B middleware, variant CSS, exposure event endpoint — single-variant content site
- "Direction Challenge" branding, satirical voice tokens

**Add:**
- `JsonLd` helpers for `Article`, `Review`, `HowTo`, `BreadcrumbList`, `FAQPage`
- Ad-slot placeholder blocks (`<AdSlot id="in-content-1" />`, etc.) — empty until Mediavine, but the HTML hooks are reserved
- Affiliate-link rewriter — central `lib/affiliates.ts` that wraps outbound URLs with the right tag per program (Amazon, Stay22, Booking, brand-direct)
- Newsletter capture component (Beehiiv embed) — inline, exit-intent, sidebar variants
- Pinterest pin generator — Node script that turns post frontmatter (title, hero image, hook) into 3 pin variants (1000×1500 PNG)
- `Trips` collection in Payload (groups posts into clusters with shared metadata)
- KPI dashboard page in admin (see §8)

**Keep:**
- Payload + Lexical setup
- Custom blocks (CalloutBlock, PullQuoteBlock, EmbedBlock, DividerBlock)
- `migrate-*` agent pipeline (for one-time legacy import if needed)
- `blog-new` / `blog-planner` / `blog-drafter` skill chain (adapted with new style guides)

## 7. Voice / style system

New folder: `style-guides/` at the repo root. One markdown file per voice register. The `blog-drafter` agent reads the right guide based on post type metadata.

| File | Used for | Tone |
|---|---|---|
| `voice-travel-journal.md` | Cluster post type 1, 6 | First-person, sensory, specific, slow-paced |
| `voice-travel-howto.md` | Cluster post type 2 | Numbered, scannable, affiliate-link-ready, practical |
| `voice-travel-recommendation.md` | Cluster post type 3 | Balanced pros/cons, honest, builds trust |
| `voice-activity-deep-dive.md` | Cluster post type 4, 5 | Gear-focused, skill-aware, beginner-friendly framing |
| `voice-lifestyle-reflection.md` | Cluster post type 7 | Reflective, opinion-aware, personal but useful |

Each guide includes: do/don't word list, sentence length distribution, opening pattern library, forbidden phrases, example paragraph.

Wesley drafts v1 by week 1 from existing posts; refined after the first 5 posts ship.

## 8. KPI dashboard (built into Payload admin)

Custom Payload admin page at `/admin/dashboard` showing:

```
┌─ Revenue ─────────────────────────────────────────┐
│  This month: $X      Cumulative: $Y / $8,000      │
│  Pace: [on track / behind / ahead]                │
│  Days remaining: N                                │
│  ┌─ Ads (Mediavine API)        $X                 │
│  ├─ Affiliates (manual → Stay22 API)  $X          │
│  └─ Products (Lemon Squeezy webhook)  $X          │
├─ Traffic (Plausible API) ─────────────────────────┤
│  Sessions / 30d: X    Threshold (Journey): 1,000  │
│  Top 10 posts | Referral sources                  │
├─ List (Beehiiv API) ──────────────────────────────┤
│  Subs: X    Open rate: X%    Daily signups: X     │
├─ Pipeline ────────────────────────────────────────┤
│  Posts published this week (target: 2): X         │
│  Posts in draft: X                                │
│  Days until next planned publish: X               │
└───────────────────────────────────────────────────┘
```

Build effort: ~2 days during Phase 0. Becomes the page Wesley opens before every writing session.

## 9. 28-week roadmap

### Phase 0 — Setup (weeks 1–2, May 18 – May 31)
- [ ] Domain decision + Vercel project + Neon DB + repo fork
- [ ] Strip `noai`, A/B infra; add JsonLd, ad slots, affiliate lib, Beehiiv capture
- [ ] `Trips` collection + cluster post structure in Payload
- [ ] Pinterest pin generator script
- [ ] KPI dashboard v1 (manual revenue entry; API integrations later)
- [ ] Style guides v1 (5 files)
- [ ] Apply: Amazon Associates, Stay22, Booking.com Partner, Mystic/Cabrinha direct
- [ ] Set up: Plausible, Beehiiv, Pinterest business, Tailwind, Lemon Squeezy account

### Phase 1 — First cluster (weeks 3–4, Jun 1 – Jun 14)
- [ ] Publish cluster 1: 7 posts from your most recent trip
- [ ] First newsletter goes out (welcome + cluster 1 highlights)
- [ ] First Pinterest push: 21 pins (3 per post)
- [ ] Daily: 90min write + 60min Pinterest + 30min admin/email

### Phase 2 — Cluster cadence + product spec (weeks 5–10, Jun 15 – Jul 27)
- [ ] Publish clusters 2 and 3 (14 more posts → 21 total)
- [ ] Email subs target: 200 by end of phase
- [ ] Pinterest monthly views target: 50k
- [ ] Product spec written: "Wesley's Kitesurf [Destination] Itinerary," $47, ~30 pages
- [ ] Apply to Journey by Mediavine the moment sessions/30d hit 1,000

### Phase 3 — Product launch (weeks 11–14, Jul 28 – Aug 24)
- [ ] Product built (Claude-drafted, you edit + verify + design in Figma)
- [ ] Sales page on the site (Lemon Squeezy checkout)
- [ ] Launch sequence: 5 emails to list over 7 days
- [ ] Cluster 4 publishes during launch week
- [ ] **Mid-point checkpoint: are we on pace for $8k? Re-plan if not.**

### Phase 4 — Scale distribution (weeks 15–22, Aug 25 – Oct 19)
- [ ] Clusters 5 and 6 (14 more posts → 42 total)
- [ ] TikTok slideshow factory live (Pinterest images + hooks via Claude)
- [ ] Second product: $27 companion (packing list, gear comparison, or destination chart)
- [ ] First sponsorship outreach (5 kitesurf gear brands)
- [ ] Email list target: 800

### Phase 5 — Final push (weeks 23–28, Oct 20 – Nov 30)
- [ ] Black Friday bundle: $47 + $27 + bonus = $67
- [ ] 2 sponsorship placements closed ($250–$500 each)
- [ ] Every existing post audited for affiliate density + internal linking
- [ ] Hit $8,000 cumulative

## 10. Definition of done (Nov 30, 2026)

| Metric | Target |
|---|---|
| Cumulative revenue | $8,000 USD |
| Published posts | 42 |
| Email subscribers | 1,500 |
| Sessions (Nov) | 25,000 |
| Pinterest monthly views | 250,000 |
| Digital products live | 2 |
| Mediavine status | Accepted to Journey (minimum) |

## 11. Out of scope (saying it out loud so it doesn't sneak back in)

- Finance vertical as standalone section → site #3 in 2027
- Multi-author / VA pipeline → after $1k/month sustained
- Multi-tenant Payload (one CMS, many sites) → after site #3 is live
- Rebuilding orchestration mid-plan
- Trips manufactured solely for content (only trips you'd take anyway)
- Translating posts to PT/ES → after $8k goal hit
- Mobile app, video course, paid community → never on this site

## 12. What will kill the plan (early warning signs)

- Week 4: cluster 1 not fully published → cadence broken, recover or re-plan
- Week 8: email subs < 100 → newsletter capture not working, fix priority
- Week 12: product not built → push launch to week 16; revisit revenue mix
- Week 14: pacing toward < $4k by Nov → cut a non-essential (sponsorship outreach, second product) and focus on highest-leverage activity
- Any week: drafts rewritten from scratch instead of edited → AI leverage broken, time math falls apart

## 13. Approval needed before Phase 0 starts

- [ ] Domain decision (or explicit "placeholder Vercel URL is fine for now")
- [ ] Niche scope rule (§3) approved
- [ ] Tool budget (§5, ~$60/mo) approved
- [ ] This plan approved as-written, OR specific sections flagged for revision

Once approved, Phase 0 starts. ETA to first published post: ~3 weeks from approval.
