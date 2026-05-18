# Squads & Workers

The human-readable roster for the agent teams. Edit this doc when you change what a worker is responsible for, which tools or skills they use, or where they are on the maturity ladder.

The system-prompt file at `.claude/agents/<name>.md` is the source of truth for prompt content. This roster is the higher-level view used for planning, onboarding, and PM decisions. **When you change an agent's behavior, update both files.**

## Legend

| Tier | Model | Use for | Cost |
|------|-------|---------|------|
| **Senior reviewer** | opus | Critics, synthesizers, validators — places where reasoning depth matters | High |
| **Specialist** | sonnet | Writers, transformers, auditors — the day-to-day workhorses | Mid |
| **Fast operator** | haiku | Structured extraction, tool calls, deterministic I/O | Low |

## Status values

- **specced** — prompt written, contract defined, not yet eval'd
- **eval'd** — proven on at least one real run; calibrated against expected output
- **scheduled** — running on a recurring trigger
- **retired** — task complete, no longer used

## Maintenance protocol

1. Edit the worker entry below (role, tools, responsibilities, skills, improvement queue).
2. Open the linked `.claude/agents/<name>.md` and mirror the change in the system prompt.
3. Bump status if the change moves the worker up or down the maturity ladder.
4. If the change affects how this worker hands off to another, also update the slash command at `.claude/commands/<team>-*.md`.

---

## Squad 01 · Authoring

**Mission:** Idea → researched, critiqued draft → Payload draft post.
**Phase:** P3 Operate · **Entry:** `/blog-new` · **Lifespan:** steady state · **Workers:** 6

### blog-planner
- **Role:** Planner — outline, audience, sources
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Turn an idea into outline + target reader + angle
  2. Pick voice anchors from `blog/*.html`
  3. List sources to gather and likely block types
- **Tools:** Read, Grep, Glob
- **Skills:** —
- **Inputs:** one-line idea
- **Outputs:** `plans/<slug>.plan.md`
- **Stop condition:** plan written
- **Improvement queue:** —
- **File:** [`.claude/agents/blog-planner.md`](../.claude/agents/blog-planner.md)

### blog-researcher
- **Role:** Researcher — fetch & filter sources
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Fetch candidate URLs per planner query
  2. Extract title, author, date, summary, quotable lines
  3. Reject low-quality sources (undated, AI-generated, content farms)
- **Tools:** WebSearch, WebFetch, Read, Write
- **Skills:** —
- **Inputs:** `plans/<slug>.plan.md`
- **Outputs:** `plans/<slug>.sources.json`
- **Stop condition:** every query has a primary source or a `gap:` note
- **Improvement queue:** —
- **File:** [`.claude/agents/blog-researcher.md`](../.claude/agents/blog-researcher.md)

### blog-drafter
- **Role:** Drafter — footnoted markdown
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Convert plan + sources into a complete markdown draft
  2. Match the voice of the voice-anchor posts
  3. Footnote every external claim
- **Tools:** Read, Write, Grep
- **Skills:** —
- **Inputs:** plan + sources
- **Outputs:** `drafts/<slug>.md`
- **Stop condition:** draft saved with TODOs counted
- **Improvement queue:** —
- **File:** [`.claude/agents/blog-drafter.md`](../.claude/agents/blog-drafter.md)

### blog-critic
- **Role:** Critic — voice & rigor review
- **Model:** opus (senior reviewer)
- **Status:** specced
- **Responsibilities:**
  1. Hallucination check against `sources.json`
  2. Voice and structure scoring
  3. SEO compliance: title, description, slug, headings
- **Tools:** Read, Grep
- **Skills:** —
- **Inputs:** draft + sources + plan
- **Outputs:** `reviews/<slug>.review.json` with verdict `ship | revise | reject`
- **Stop condition:** verdict written
- **Improvement queue:** Calibrate voice scoring against `blog/the-90s-kid-guide-to-actually-learning-tech.html` (planted test)
- **File:** [`.claude/agents/blog-critic.md`](../.claude/agents/blog-critic.md)

### blog-formatter
- **Role:** Formatter — markdown → Payload Lexical
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Map `> [!callout]`, `> [!pullquote]`, `---`, embeds onto custom blocks
  2. Preserve heading levels and inline marks
  3. Log unmapped constructs to a sidecar warnings file
- **Tools:** Read, Write, Grep, Glob
- **Skills:** —
- **Inputs:** approved draft + `apps/blog/src/editor/buildEditor.ts`
- **Outputs:** `build/<slug>.lexical.json` + `build/<slug>.warnings.json`
- **Stop condition:** JSON written
- **Improvement queue:** Verify against the actual `buildEditor.ts` once `apps/blog/` lands on origin
- **File:** [`.claude/agents/blog-formatter.md`](../.claude/agents/blog-formatter.md)

### blog-publisher
- **Role:** Publisher — POST to Payload (draft)
- **Model:** haiku (fast operator)
- **Status:** specced
- **Responsibilities:**
  1. Call Payload local API or REST with Lexical JSON
  2. Default `_status: draft` — never publish without explicit flag
  3. Return admin URL on success
- **Tools:** Read, Bash
- **Skills:** —
- **Inputs:** `build/<slug>.lexical.json` + draft frontmatter
- **Outputs:** `{ id, slug, status, adminUrl }`
- **Stop condition:** post created or `reason:` returned
- **Improvement queue:** Verify the `npm run payload --` invocation shape; add `--publish` flag handling
- **File:** [`.claude/agents/blog-publisher.md`](../.claude/agents/blog-publisher.md)

---

## Squad 02 · Maintenance

**Mission:** Keep the static site fast, accessible, and protected — surface drift before it ships.
**Phase:** P4 Sustain · **Entry:** `/site-audit` · **Lifespan:** forever (weekly cron) · **Workers:** 5

### site-auditor
- **Role:** Auditor — a11y · perf · consistency
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. WCAG 2.2 AA scan of every root `*.html`
  2. Perf checks: LCP, CLS, bundle weight, font strategy
  3. Theme consistency: tokens, spacing, anti-patterns
- **Tools:** Read, Grep, Glob, Bash (read-only)
- **Skills:** `audit`
- **Inputs:** root `*.html`, `css/*.css`, `js/*.js`
- **Outputs:** `audits/site-<date>.audit.json` with P0–P3 severity
- **Stop condition:** audit written
- **Improvement queue:** —
- **File:** [`.claude/agents/site-auditor.md`](../.claude/agents/site-auditor.md)

### site-link-checker
- **Role:** Link Checker — internal & external links
- **Model:** haiku (fast operator)
- **Status:** specced
- **Responsibilities:**
  1. Extract every `href`/`src` from the site
  2. Verify internal targets exist; HEAD external with redirect tracking
  3. Classify each link (ok, 404, redirect, timeout, tls-error)
- **Tools:** Bash (HEAD only), Read, Grep, Glob
- **Skills:** —
- **Inputs:** root and `blog/` HTML
- **Outputs:** `audits/links-<date>.json`
- **Stop condition:** all links classified or 5-min cap hit
- **Improvement queue:** Add a quiet-mode flag for cron use (no per-link stdout)
- **File:** [`.claude/agents/site-link-checker.md`](../.claude/agents/site-link-checker.md)

### site-seo
- **Role:** SEO & content protection — meta · sitemap
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Verify required meta per page (title, description, canonical, OG, Twitter)
  2. Cross-check `sitemap.xml` and `robots.txt`
  3. Enforce content-protection meta (`noai`, `noimageai`, `noml`)
- **Tools:** Read, Grep, Glob
- **Skills:** —
- **Inputs:** root `*.html`, `sitemap.xml`, `robots.txt`
- **Outputs:** `audits/seo-<date>.json`
- **Stop condition:** report written
- **Improvement queue:** —
- **File:** [`.claude/agents/site-seo.md`](../.claude/agents/site-seo.md)

### site-fixer
- **Role:** Fixer — apply prioritized fixes
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Apply fixes P0 → P1 → P2 (P3 only on flag)
  2. Preserve content-protection meta — never strip
  3. Stay vanilla — no framework imports
- **Tools:** Read, Edit, Write, Grep, Glob, Bash (limited)
- **Skills:** `harden` (planned, v2)
- **Inputs:** three audit reports under `audits/`
- **Outputs:** in-place edits + `audits/fixes-<date>.json`
- **Stop condition:** all eligible issues addressed or skipped
- **Improvement queue:** Wire `harden` skill once eval cases prove the need
- **File:** [`.claude/agents/site-fixer.md`](../.claude/agents/site-fixer.md)

### site-reviewer
- **Role:** Reviewer — diff grading, regression check
- **Model:** opus (senior reviewer)
- **Status:** specced
- **Responsibilities:**
  1. Verify each fix actually resolves its target issue
  2. Detect regressions (focus rings, visited links, protection meta)
  3. Emit ship / revise / revert verdict
- **Tools:** Read, Grep, Glob, Bash (read-only)
- **Skills:** —
- **Inputs:** fixes report + original audits + `git diff HEAD`
- **Outputs:** `audits/review-<date>.json`
- **Stop condition:** verdict written
- **Improvement queue:** —
- **File:** [`.claude/agents/site-reviewer.md`](../.claude/agents/site-reviewer.md)

---

## Squad 03 · Evaluation

**Mission:** Pick the winning blog index design and produce a deletion plan for the loser.
**Phase:** P1 Decide · **Entry:** `/ab-evaluate` · **Lifespan:** one-shot · **Workers:** 5

### ab-extractor
- **Role:** Extractor — DOM & token snapshot
- **Model:** haiku (fast operator)
- **Status:** specced
- **Responsibilities:**
  1. Capture DOM outline (headings, landmarks, cards) per variant
  2. Extract design tokens actually used (colors, fonts, spacings)
  3. Compute size stats (bytes, image count, rule count)
- **Tools:** Read, Grep, Glob, Bash (read-only)
- **Skills:** —
- **Inputs:** `blog.html`, `blog-b.html` + matching CSS
- **Outputs:** `evals/variants/<date>.snapshot.json`
- **Stop condition:** snapshot written
- **Improvement queue:** —
- **File:** [`.claude/agents/ab-extractor.md`](../.claude/agents/ab-extractor.md)

### ab-ux-critic
- **Role:** UX Critic — persona scoring
- **Model:** opus (senior reviewer)
- **Status:** specced
- **Responsibilities:**
  1. Score each variant on hierarchy / IA / emotion / cog-load
  2. Test against three personas (returning reader, first-timer, recruiter)
  3. Emit per-axis winner deltas
- **Tools:** Read, Grep, Glob
- **Skills:** `critique`
- **Inputs:** snapshot
- **Outputs:** `evals/variants/<date>.ux.json`
- **Stop condition:** UX report written
- **Improvement queue:** —
- **File:** [`.claude/agents/ab-ux-critic.md`](../.claude/agents/ab-ux-critic.md)

### ab-perf-auditor
- **Role:** Perf Auditor — gap & actionables
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Bundle weight, render-blocking CSS, font strategy comparison
  2. Predicted LCP on slow 4G baseline
  3. List concrete changes that would close the gap
- **Tools:** Read, Grep, Glob, Bash (read-only)
- **Skills:** `optimize`
- **Inputs:** snapshot
- **Outputs:** `evals/variants/<date>.perf.json`
- **Stop condition:** perf report written
- **Improvement queue:** —
- **File:** [`.claude/agents/ab-perf-auditor.md`](../.claude/agents/ab-perf-auditor.md)

### ab-a11y-auditor
- **Role:** A11y Auditor — WCAG 2.2 AA
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Contrast, semantics, focus, motion-safety scoring
  2. Visited-link styling (project preference: muted)
  3. Per-axis winner deltas
- **Tools:** Read, Grep, Glob
- **Skills:** `audit`
- **Inputs:** snapshot
- **Outputs:** `evals/variants/<date>.a11y.json`
- **Stop condition:** a11y report written
- **Improvement queue:** —
- **File:** [`.claude/agents/ab-a11y-auditor.md`](../.claude/agents/ab-a11y-auditor.md)

### ab-synthesizer
- **Role:** Synthesizer — verdict & migration plan
- **Model:** opus (senior reviewer)
- **Status:** specced
- **Responsibilities:**
  1. Apply default weighting (UX 0.45 · A11y 0.30 · Perf 0.25)
  2. Disqualify any variant with a P0 a11y violation
  3. Emit verdict + steps to retire the loser
- **Tools:** Read, Write
- **Skills:** —
- **Inputs:** three reports (UX, perf, a11y)
- **Outputs:** `evals/variants/<date>.verdict.md`
- **Stop condition:** verdict file written
- **Improvement queue:** —
- **File:** [`.claude/agents/ab-synthesizer.md`](../.claude/agents/ab-synthesizer.md)

---

## Squad 04 · Migration

**Mission:** Move legacy `blog/*.html` into Payload as drafts without losing fidelity.
**Phase:** P2 Transition · **Entry:** `/migrate-post` · **Lifespan:** weeks, then retire · **Workers:** 5

### migrate-scanner
- **Role:** Scanner — manifest & risk flags
- **Model:** haiku (fast operator)
- **Status:** specced
- **Responsibilities:**
  1. Enumerate `blog/*.html` and capture title/slug/date guess
  2. Count risky constructs (script, iframe, style, pre)
  3. Risk-tier each post: low / medium / high
- **Tools:** Read, Grep, Glob, Bash (read-only)
- **Skills:** —
- **Inputs:** `blog/*.html`
- **Outputs:** `migrations/manifest.json`
- **Stop condition:** manifest written
- **Improvement queue:** —
- **File:** [`.claude/agents/migrate-scanner.md`](../.claude/agents/migrate-scanner.md)

### migrate-parser
- **Role:** Parser — HTML → semantic AST
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Strip layout chrome (nav, header, footer)
  2. Normalize headings, paragraphs, lists, quotes, figures, embeds
  3. Resolve relative media paths; log unmapped constructs
- **Tools:** Read, Write, Grep
- **Skills:** —
- **Inputs:** one post from manifest
- **Outputs:** `migrations/ast/<slug>.ast.json`
- **Stop condition:** AST written
- **Improvement queue:** —
- **File:** [`.claude/agents/migrate-parser.md`](../.claude/agents/migrate-parser.md)

### migrate-mapper
- **Role:** Mapper — AST → Lexical (with custom blocks)
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Map callout/pullquote/divider/embed onto registered blocks
  2. Fall back to paragraph + log when no block exists
  3. Validate against `buildEditor.ts` every run
- **Tools:** Read, Write, Grep, Glob
- **Skills:** —
- **Inputs:** AST + `apps/blog/src/editor/buildEditor.ts`
- **Outputs:** `migrations/lexical/<slug>.lexical.json` + report
- **Stop condition:** Lexical + report written
- **Improvement queue:** Verify block names against the actual exported set
- **File:** [`.claude/agents/migrate-mapper.md`](../.claude/agents/migrate-mapper.md)

### migrate-importer
- **Role:** Importer — create Payload draft
- **Model:** sonnet (specialist)
- **Status:** specced
- **Responsibilities:**
  1. Upload referenced media to Media collection
  2. Substitute media IDs into the Lexical JSON
  3. Create the Post with `_status: draft`
- **Tools:** Read, Bash
- **Skills:** —
- **Inputs:** Lexical JSON + mapping report + manifest entry
- **Outputs:** `migrations/imported/<slug>.json`
- **Stop condition:** post created or conflict reported
- **Improvement queue:** Confirm media-upload endpoint; never publish
- **File:** [`.claude/agents/migrate-importer.md`](../.claude/agents/migrate-importer.md)

### migrate-validator
- **Role:** Validator — render-vs-source diff
- **Model:** opus (senior reviewer)
- **Status:** specced
- **Responsibilities:**
  1. Fetch rendered post from the dev server
  2. Diff content / media / structure against the legacy HTML
  3. Score each axis; emit pass / partial / fail
- **Tools:** Read, Grep, Glob, Bash (read-only HTTP)
- **Skills:** —
- **Inputs:** slug + paths to original and imported
- **Outputs:** `migrations/validation/<slug>.json`
- **Stop condition:** verdict written
- **Improvement queue:** —
- **File:** [`.claude/agents/migrate-validator.md`](../.claude/agents/migrate-validator.md)

---

## Cross-squad capabilities

Some skills and files are shared. Track them here so a change isn't missed elsewhere.

| Asset | Owners | Readers |
|-------|--------|---------|
| `apps/blog/src/editor/buildEditor.ts` | Payload app | blog-formatter, migrate-mapper |
| `blog/*.html` (voice anchors) | Wesley | blog-planner, blog-critic |
| `audits/*.json` | site-auditor, site-link-checker, site-seo | site-fixer, site-reviewer |
| `critique` skill | `.claude/skills/critique/` | ab-ux-critic |
| `optimize` skill | `.claude/skills/optimize/` | ab-perf-auditor |
| `audit` skill | `.claude/skills/audit/` | site-auditor, ab-a11y-auditor |

## Open improvement queue (project-wide)

When a worker's queue grows beyond a few items, surface it here so it's not buried.

- [ ] Run `/ab-evaluate` end-to-end and calibrate the synthesizer's weighting against intuition.
- [ ] Confirm Payload local-API invocation shape (`npm run payload -- ...`) once `apps/blog/` is on origin.
- [ ] Wire `harden` skill into `site-fixer` if v1 eval cases show recurring i18n / overflow issues.
- [ ] Schedule weekly `/site-audit` read-only baseline via the `schedule` skill.
- [ ] Add automated eval harness (`npm run agent-evals`) for the fixtures listed in `docs/AGENT_TEAMS.md` §Eval.
