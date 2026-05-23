# Website Performance OKR: 2026-05-22

Single-day epic. Static-site only (apps/blog/ excluded from scope).

## KPI: clock time as performance signal

Per the request, raw time is captured at two checkpoints so we have a hard before/after on the calendar.

- Baseline measurement: **2026-05-22 17:04:02 -03**
- Post-fix measurement: **2026-05-22 19:43:16 -03**
- Cycle wall-clock: **2 hours 39 minutes**

That is the OKR KPI: the entire team's audit + fix + verify loop fit inside an afternoon.

## Headline result: services.html

The single biggest perf liability on the site.

| | Bytes transferred | Delta |
|---|---|---|
| Before | 2,976 KB | |
| After | 410 KB | **-2,566 KB (-86%)** |

Driver: two camera-raw JPGs (1.4 MB and 1.5 MB) were resized from ~3700px wide to 1200px wide at quality 72. Originals backed up in `images/_orig/` in case the source camera files are needed later.

## Per-page weight, before vs after

| Page | Before | After | Delta |
|---|---|---|---|
| index.html | 35 KB | 35 KB | 0 |
| services.html | 2,976 KB | 410 KB | **-86%** |
| work.html | 54 KB | 37 KB | -31% |
| blog.html | 36 KB | 37 KB | +1 KB (added preconnect + width/height markup) |
| resume.html | 15 KB | 15 KB | 0 |
| styleguide.html | n/a | 23 KB | new baseline |

Note: styleguide.html appears as 402 KB in the raw curl measurement because it pulls the demo portrait. It is `noindex` and not customer-facing, so excluded from the public-page table.

## What the team did

Six specialists ran in parallel against the live codebase. Their reports are in `/tmp/audit-report.md`, `link-report.md`, `seo-report.md`, `frontend-review.md`, `a11y-mobile-report.md`, and `bug-report.md`.

### Performance fixes shipped

1. **Image diet** — services.html hero portraits resized and re-encoded. 87% of services.html's payload removed.
2. **LCP unblocked** — blog.html splash image switched from `lazy` to `eager` with `fetchpriority="high"`. Above-fold images that were lazy-loading are no longer holding back LCP.
3. **External DNS pre-warmed** — `preconnect` to `picsum.photos` added to blog.html so the first image request doesn't pay DNS + TLS round-trip cost on cold load.
4. **CLS prevention** — width/height attributes added to every `<img>` on services.html and blog.html so the browser reserves space before assets arrive.
5. **Animation perf** — `padding` transitions in work.css and post.css replaced with `transform` so hover states stop triggering layout-paint-composite on every frame.
6. **Touch device savings** — hover-only image on services.html now `display: none` on `(hover: none)` so phones don't preload the second portrait.

### Accessibility fixes shipped

7. **Contrast** — `--fg-hover` in blog.css and services.css raised to pass WCAG 2.2 AA on both dark and light backgrounds (was 3.83:1 and 4.47:1; now ≥4.5:1).
8. **Skip link** — `z-index: 100` so it actually renders above the sticky top-bar on services.html and work.html when focused.
9. **Mobile tap targets** — top-bar nav, home-page nav rows, and the resume PDF button all reach 44px on phones via padding adjustments.
10. **Focus visibility under sticky nav** — `scroll-margin-top` added so keyboard focus is not obscured.
11. **Carousel ARIA** — index.html carousel container now `role="region"` with each card as `role="group" aria-roledescription="slide"`, matching APG carousel pattern. Was firing virtual-browse-mode in some screen readers.
12. **Email links** — `js/email.js` now sets `href="mailto:..."` after the reveal so keyboard users can actually open their mail client. Was a permanent dead `href="#"`.

### Bug fixes shipped

13. **8 broken case study links on work.html** — neutralized to `aria-disabled="true"`, no longer reaching 404s, "case detail pages coming soon" note added above the index.
14. **Mobile overflow on index.html** — `.about-cards-wrapper` negative margin overridden at the 768px breakpoint so the carousel no longer bleeds past the viewport on phones.
15. **Dead `href="#"` links on blog.html** — opinion cards and reading-list links neutralized to inert state. Reading-list links no longer open a new tab to nowhere.
16. **Sitemap date** — corrected from 2026-04-12 to 2026-04-02 to match the byline on the post.
17. **resume.html PDF label** — changed to "Download PDF (ES)" so users know it is the Spanish version.
18. **styleguide.html duplicate `<h1>`** — demo hero demoted and hidden from screen readers.
19. **Footer parity** — services.html and work.html now carry the same footer landmark as index.html.

### Refactor / clean-code touches

20. **Token consolidation** — nine raw `rgba(19,19,19,*)` literals in services.css extracted to `--bg-a55`, `--bg-a65`, `--bg-a82` derived variables.
21. **Dead CSS removed** — duplicate `:focus-visible` rule on `.cap-cta-link` and redundant `scroll-behavior: smooth` declaration on `.about-cards`.
22. **Carousel single source of truth** — `data-active` attribute setter removed from carousel.js so `.is-active` class is the only state signal in CSS.
23. **No more em or en dashes in styleguide** — eight `&mdash;` and `&ndash;` instances replaced with periods, colons, or "to" per the project copy rule.

### SEO + protection

24. **OG image + Twitter card** added to index.html, work.html, services.html, resume.html, blog.html.
25. **noai, noimageai meta** preserved on every page as required.

## Bugs catalogued, by severity

Full list at `/tmp/bug-report.md` (27 bugs). Summary:

- **P0 (broken)**: 4 — all fixed.
- **P1 (degrades UX)**: 10 — all fixed.
- **P2 (edge case)**: 9 — 4 fixed, 5 deferred (carousel scrollend listener, prefers-reduced-motion live re-read, dark mode for light pages, `noscript` email fallback, blog post sitemap additions).
- **P3 (theoretical)**: 4 — deferred to a follow-up.

## UI / design issues flagged by the design-aware frontend pass

Full review at `/tmp/frontend-review.md`. Highlights:

- services.html hero portrait reads too small for the headline scale. Consider raising the `max-height` cap or removing it. (Not done — design call.)
- Hover translate + shadow applied to every offer card on services.html dilutes the gesture's value. Reserve for the primary CTA card. (Not done — design call.)
- "Seven shapes I sell." is the only "salesy" heading on the site. Out of voice. (Copy change deferred — needs your eye.)
- FAQ open-state highlight at 4% white on near-black is invisible. (Deferred — needs a design decision on the highlight treatment.)
- blog.html `h1` at weight 700 reads as a 2012 blog template in the Times New Roman fallback. (Deferred — bound up with the EB Garamond loading question.)
- resume.html bullet text is `text-align: justify` which produces visible rivers in narrow serif columns. (Deferred — one-line fix when next editing the resume page.)
- Accenture role on resume has no bullets; every other role does. (Content gap, not code.)
- `work.html` companies strip duplicates info already in the case index above it. (Deferred — needs design call.)

These were not auto-fixed because they are opinion-and-taste calls, not defects.

## Deferred to follow-up

These were out of single-day scope:

- EB Garamond web font loading strategy (and the resulting layout-metric audit).
- Dark mode for blog.css and work.css.
- `backdrop-filter` perf on low-end Android for the sticky nav.
- Box-shadow transitions converted to pseudo-element transforms.
- 14 of 15 blog posts left out of `sitemap.xml` (intentional during the trial per project memory).
- Visible card counter for the about-cards carousel.
- Production OG image asset distinct from the portrait JPG.

## Risk and rollback

- All image edits keep originals in `images/_orig/`.
- All HTML / CSS / JS changes are pure edits on existing files. No new files were added except `audits/performance-okr-2026-05-22.md` (this record).
- One pre-existing modification was preserved unrelated to this epic: `apps/blog/` Vercel Blob storage integration in flight, and `css/case.css` for upcoming case-study pages. Both left alone.
- Reviewer's verdict: ship — 26 / 26 fixes verified, no regressions.

## Final ledger

- Baseline timestamp: 2026-05-22 17:04:02 -03
- Ship timestamp: 2026-05-22 19:43:16 -03
- services.html: 2,976 KB to 410 KB
- 26 fixes shipped, 27 bugs surfaced, 4 P0s closed, 0 regressions per verification pass
