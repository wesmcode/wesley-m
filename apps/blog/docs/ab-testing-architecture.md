# A/B Testing Architecture — wesley-m.com blog

**Status:** Draft for review
**Owner:** Wesley
**Goal:** Test UI variants and ad placements on the blog while keeping post content identical across arms, with rigorous tracking that supports product decisions.

---

## 1. The core principle: three independent layers

The single most important architectural decision is to separate concerns into three layers that vary independently. Mixing them is how most "A/B test" implementations rot within a quarter.

| Layer | Source of truth | Varies by variant? | Owner |
|---|---|---|---|
| **Content** | Payload `posts` collection (Postgres) | **No, never** | Editorial |
| **Presentation** (UI/layout/typography) | Variant components + scoped CSS | Yes | Design / FE |
| **Monetization** (ad slots) | Slot registry + placement map | Yes (independently) | Growth / PM |

Today the repo already does layer 1 correctly — `Posts.ts` knows nothing about variants. Today's `variant-a.css`/`variant-b.css` collapse layers 2 and 3 into stylesheet swaps with no programmatic notion of "slot." That's what we need to fix before adding tracking, or the tracking will be measuring a moving target.

---

## 2. Variant assignment: Edge Middleware, sticky, SSR-safe

### The decision must happen before render

The current static `blog.html` / `blog-b.html` split lets users land on whichever URL they typed — that's not an experiment, that's two products. For a real test the assignment has to:

1. Be made **before** the first byte is sent (no client-side flip, no FOOC).
2. Be **deterministic** for a given visitor (sticky across sessions, ideally across devices once we have auth — we don't, so cookie is fine).
3. Be **bucketed by a hash**, not by `Math.random()` — so we can replay/audit.
4. Be **overridable** for QA via a `?variant=` query param (gated to non-prod or to a signed cookie in prod).

### Proposed mechanism: Vercel Edge Middleware

`apps/blog/middleware.ts` runs at the edge before any route handler. It:

1. Reads `wm_aid` cookie (anonymous visitor id, UUID v4). If missing, generates one and sets it (1-year max-age, `SameSite=Lax`, `Secure`, `HttpOnly=false` so client analytics can read it).
2. Reads the active experiment manifest from **Vercel Edge Config** (sub-millisecond reads, no DB hit per request).
3. For each running experiment, computes `bucket = murmur3(aid + ":" + expId) % 10000` and maps to an arm by the manifest's traffic split.
4. Writes the resolved arms into request headers (`x-wm-exp-ui=B`, `x-wm-exp-ads=control`) so server components can read them with `headers()`.
5. Fires a fire-and-forget **exposure event** to `/api/events/exposure` (only on first exposure per arm per session — track this via a `wm_exp` cookie holding a compact bitmap).

Why Edge Config not Postgres for the manifest: experiment config changes ~weekly, reads happen every request. Edge Config is purpose-built for this. Payload stays the editorial CMS; experiments get their own surface.

### Why not client-side libraries (GrowthBook SDK / Statsig / PostHog)

We can layer one in later, but for two-arm visual tests the build-your-own at the edge is ~80 lines, has no third-party request on the critical path, and avoids the "feature flag waterfall" pattern that bloats LCP. Reserve the heavier SDKs for when we need targeting rules, feature gates, or per-user holdouts.

---

## 3. Rendering: variant-aware components, not stylesheet swaps

Today's approach (one component tree + `.v-a` / `.v-b` CSS scopes) is fine when variants differ only in styling. It breaks down when:

- Variant B needs a sidebar that Variant A doesn't.
- An ad slot moves from above-the-fold in A to between paragraphs 3 and 4 in B.
- One variant wants infinite scroll, the other pagination.

### Proposed structure

```
apps/blog/src/
  experiments/
    manifest.ts                  # typed re-export of Edge Config shape
    types.ts                     # ExperimentId, ArmId, AdSlotId enums
    assign.ts                    # pure bucketing function (unit-tested)
  app/(frontend)/
    layout.tsx                   # reads x-wm-exp-* headers, sets data-attrs on <html>
    page.tsx                     # picks <BlogIndexA /> or <BlogIndexB />
    blog/[slug]/page.tsx         # picks <PostPageA /> or <PostPageB />
    _variants/
      blog-index/
        VariantA.tsx
        VariantB.tsx
        shared/                  # truly identical sub-components (PostMeta, etc.)
      post-page/
        VariantA.tsx
        VariantB.tsx
        shared/
  components/
    ads/
      AdSlot.tsx                 # reads placement map, renders the right slot or null
      slots.ts                   # slot registry (ids, sizes, allowed networks)
```

Each variant component imports its own CSS module (`VariantA.module.css`) — no more global `.v-a` / `.v-b` scoping. The two trees can diverge as much as they need to without leaking selectors into each other.

**Identical content is enforced at the data layer, not the render layer.** Both variants call the same `payload.find({ collection: 'posts', ... })`. Reviewer rule: no variant component may read variant-specific fields off a post. If a "Variant B intro" is needed, that's a layer-2 concern (it's a hardcoded element of the B layout), not a layer-1 one.

---

## 4. Ad placements as first-class data

This is what the current setup is missing entirely and what makes the test interesting to PM.

### Slot registry (code)

```ts
// components/ads/slots.ts
export const AD_SLOTS = {
  HOME_HERO:       { sizes: ['728x90', '970x250'], lazy: false },
  HOME_INFEED_1:   { sizes: ['300x250'],            lazy: true  },
  POST_TOP:        { sizes: ['728x90'],             lazy: false },
  POST_INLINE_1:   { sizes: ['300x250'],            lazy: true, afterParagraph: 3 },
  POST_INLINE_2:   { sizes: ['300x250'],            lazy: true, afterParagraph: 7 },
  POST_END:        { sizes: ['300x600', '300x250'], lazy: true  },
  SIDEBAR_STICKY:  { sizes: ['300x600'],            lazy: true  },
} as const
```

### Placement map (Edge Config, varies per arm)

```jsonc
// edge-config: experiments.ads-2026-q2.arms
{
  "control": {
    "homepage": ["HOME_HERO"],
    "post":     ["POST_TOP", "POST_END"]
  },
  "dense": {
    "homepage": ["HOME_HERO", "HOME_INFEED_1"],
    "post":     ["POST_TOP", "POST_INLINE_1", "POST_INLINE_2", "POST_END", "SIDEBAR_STICKY"]
  }
}
```

Layouts call `<AdSlot id="POST_TOP" />` wherever a slot *could* appear. `AdSlot` looks up the current ads-arm's placement map; if the slot id isn't in the list, it renders nothing. This means **the same component tree can run more or fewer ads** by config alone — no code change to rebalance.

### Why two separate experiments (UI × ads), not one

Running them as one 2×2 factorial (`A_dense`, `A_sparse`, `B_dense`, `B_sparse`) needs ~4× the traffic for the same power per cell. Run them as two **independent** experiments with overlapping assignment instead. Visitors get bucketed once for UI and once for ads, independently — wesley-m.com's traffic is enough for one, not for four. This also lets us pause one without disturbing the other.

Caveat: if we suspect interaction effects (e.g. ad density only helps in layout B), pre-register a follow-up factorial test. Don't go fishing in post-hoc subgroup analysis.

---

## 5. Event tracking schema

### Events to capture

| Event | When | Why |
|---|---|---|
| `exposure` | First time visitor is bucketed into an arm in a session | The denominator of every metric. Must fire **before** any KPI event. |
| `page_view` | On nav (server-rendered pages → fire on hydration) | Sanity check; SRM diagnostics. |
| `post_click` (homepage) | Click on archive row / featured | Primary engagement KPI for UI test. |
| `read_25/50/75/100` | Scroll depth thresholds on a post | Reading depth — proxy for content quality, controlled across arms. |
| `dwell_30s` | 30 seconds of active tab focus on a post | Engagement. |
| `ad_slot_visible` | Slot enters viewport (IntersectionObserver, ≥50% for ≥1s) | Viewable impression — primary ad KPI. |
| `ad_click` | Slot click | Revenue KPI. |
| `outbound_click` | Click to external link | Secondary; useful for funnel context. |

### Common envelope

```ts
type Event = {
  name: string
  ts: string                  // ISO8601, server-issued on receive
  aid: string                 // anonymous visitor id
  sid: string                 // session id (30-min idle window)
  url: string
  path: string
  ref: string | null
  ua_class: 'bot' | 'mobile' | 'desktop' | 'tablet'  // server-classified
  exposures: {                // every arm this visitor is in, on every event
    [expId: string]: string   // arm id
  }
  props: Record<string, unknown>  // event-specific
}
```

The `exposures` map on every event is the join key for analysis. It makes the warehouse queries trivial (`GROUP BY exposures.ui_2026_q2`) and is robust to late-fired events.

### Transport

- Browser → `POST /api/events` (Next.js route handler, runs at edge runtime, accepts a batch of up to ~20 events).
- Use `navigator.sendBeacon` when available (survives page unload — critical for `dwell` and `read_*`).
- The route handler writes to **Postgres** (`events` table, partitioned by day) using the existing Payload DB connection. No new infra.

Why not GA4 / Plausible / Vercel Analytics as the source of truth: those are fine for vanity dashboards but their data models are not designed for experimentation joins. Use them as a **sanity check** dashboard layer on top, but own the raw event log.

---

## 6. Guardrails (the boring stuff that decides whether results are real)

1. **Sample Ratio Mismatch (SRM) check** — daily job: chi-square on observed split vs expected (50/50). Fail loud (Slack + email) if p < 0.001. Catches assignment bugs, cache bugs, bot waves.
2. **Exposure-before-KPI ordering** — analytical filter: only count a visitor's KPI events that occurred *after* their exposure event timestamp. Prevents counting bounces before assignment ran (e.g. visitor with JS disabled fires no exposure but might still fire page_view from server log).
3. **Bot filter** — server-side UA classification + Vercel bot flags. Bots get bucketed (for cache stability) but their events are tagged and excluded from KPIs at query time, not at collection time.
4. **DNT / admin / preview** — anyone with `?preview=1`, logged into Payload admin, or sending `Sec-GPC: 1` is bucketed to control and their events tagged `internal=true`.
5. **Sticky bucket** — assignment never changes for a given `aid` for the lifetime of an experiment. Re-randomization between sessions is a common subtle bug; the cookie + hash design prevents it.
6. **One-way ratchets** — once an experiment is concluded, the losing arm's code path is deleted in the same PR that ships the winner. No "we'll clean it up later." This is the only way to keep variant complexity from compounding.

---

## 7. Statistical methodology (light, but principled)

For two-arm visual tests with rates (CTR, bounce):

- **Pre-register**: primary metric, secondary metrics, minimum detectable effect (MDE), required sample size, stop date. Write it down in `apps/blog/docs/experiments/<id>.md` *before* turning on traffic. This is the single biggest discipline upgrade.
- **Power**: at expected baseline CTR ~5% and MDE of relative +10%, you need ~30k visitors per arm. If wesley-m.com doesn't see that volume in ~4 weeks, the experiment isn't viable and we should pick bigger differences to test.
- **Test**: two-proportion z-test for binary KPIs, Welch's t-test for continuous (dwell time). Use a **sequential test** (e.g. mSPRT or AGILE) if we want to check results before the planned sample size — peeking with fixed-horizon tests inflates false-positive rate to ~20%.
- **Don't**: report "lift" without confidence intervals; declare a winner on a secondary metric; subgroup-slice without correction; rerun a test that "almost" hit significance.

We don't need a sophisticated stats engine on day one. A SQL notebook against the events table is fine. The discipline is in the pre-registration, not the math.

---

## 8. Migration path from the current setup

The repo already has the right bones. Migration steps, in order:

1. **Move `blog.html` / `blog-b.html` off the static site.** They're no longer needed — variant choice should be made server-side at the same URL. Redirect both to `/blog` and let middleware decide.
2. **Restructure `apps/blog/src/app/(frontend)/`** along section 3's layout. Move existing `page.tsx` content into `_variants/blog-index/VariantA.tsx`. Build VariantB as a parallel tree; reuse `shared/` for genuine duplicates.
3. **Add Edge Middleware** at `apps/blog/middleware.ts` with the assignment logic. Wire `wm_aid` cookie.
4. **Provision Edge Config** on the Vercel project; seed with one experiment (UI test).
5. **Build `<AdSlot />` and the slot registry** even if real ads aren't running yet — render placeholders. This lets us validate the placement-map mechanism before ad-network integration.
6. **Stand up `/api/events`** and the `events` Postgres table (Payload's existing DB).
7. **Wire client SDK** (~50 lines) — `track(name, props)`, batching, sendBeacon, IntersectionObserver helper for `ad_slot_visible` and `read_*`.
8. **Add SRM job** as a Vercel Cron hitting a route handler that runs the chi-square and posts to a webhook if it fails.
9. **Pre-register experiment 001-ui-density** in `docs/experiments/001-ui-density.md`. Ship it.

Each step is shippable on its own and the site keeps working at every checkpoint. The only step with real risk is #2 (component restructure); plan it as its own PR with no behavior change.

---

## 9. Open questions for PM / Wesley

These shape the implementation; flag your preferences before we start cutting code.

1. **Identity:** anonymous-only via cookie, or do we want to tie to a future logged-in identity (newsletter signup, etc.)? Affects whether `aid` should be promoted to a user_id when known.
2. **Cross-device stickiness:** acceptable that two devices = two buckets (industry standard), or do we need device-graph stitching? (Strongly recommend the former; the latter is a quarter of work.)
3. **Ad networks:** which network(s) — GAM? Carbon? AdSense? Affects `<AdSlot />` implementation and CSP.
4. **Consent:** any GDPR/CCPA constraints? Determines whether `aid` cookie needs a consent gate (and whether we need a server-side anonymized fallback).
5. **Analytics destination:** OK with Postgres + a SQL notebook for now, or do we want to dual-write to PostHog/Plausible from day one for self-serve dashboards?
6. **Holdout group:** do we want a permanent 5–10% holdout that sees control across all experiments, to measure cumulative lift over time? (Recommended once we're running 3+ experiments concurrently; overkill before then.)
7. **Editorial guardrails:** any post types we want to *exclude* from experimentation (sponsored, partner content)? Add an `excludeFromExperiments: boolean` field to `posts` if so.
