# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repo holds two sibling things deployed together as **wesley-m.com**:

1. **Static personal site** at the repo root — vanilla HTML/CSS/JS. Pages (`index.html`, `about.html`, `resume.html`, `blog.html`, `blog-b.html`) link directly to `css/*.css` and `js/*.js`. No build step.
2. **Payload + Next.js blog CMS** at `apps/blog/` — a separate Node app for authoring posts. Has its own `package.json`, dependencies, and lifecycle.

The static `blog.html` / `blog-b.html` are A/B variants currently being evaluated; `apps/blog/src/app/(frontend)/variant-a.css` and `variant-b.css` are their Payload-rendered counterparts. Expect one variant to win and the other to be removed.

Hosting: Vercel. `CNAME` points the apex domain. `robots.txt` and per-page `<meta name="robots" content="noai, noimageai, ...">` are intentional content protections — preserve them.

## Commands

### Static site (root)

No build. Open the HTML files directly, or serve the repo root:

```bash
python3 -m http.server 8000   # or any static server
```

### Payload blog (`apps/blog/`)

All commands run from `apps/blog/`:

```bash
npm run dev                  # Next.js dev server (Payload admin at /admin)
npm run build                # Production build
npm run start                # Run production build
npm run lint                 # next lint
npm run generate:types       # Regenerate payload-types.ts after collection changes
npm run generate:importmap   # Regenerate admin import map after custom components
npm run payload -- <cmd>     # Pass-through to the Payload CLI
```

Requires `.env.local` (see `.env.example`). Postgres-backed via `@payloadcms/db-postgres`.

## Architecture

### Static site layout

- `css/base.css` — shared reset, tokens, typography, layout primitives. Always loaded first.
- `css/<page>.css` — one stylesheet per page (`home.css`, `about.css`, `blog.css`, `blog-b.css`). Page HTML loads `base.css` then its page-specific sheet.
- `js/` — vanilla, no bundler. `carousel.js` and `email.js` are loaded per-page where needed.
- `blog/` — *legacy* hand-authored post HTML (e.g. `bergen-assembly.html`). New posts go through the Payload app, not here.
- `sitemap.xml` — maintain manually when adding public pages.

### Payload blog (`apps/blog/`)

Next.js 16 App Router with Payload 3.x mounted via `withPayload`. Two route groups under `src/app/`:

- `(frontend)/` — public blog UI (`layout.tsx`, `page.tsx`, the `variant-*.css` files).
- `(payload)/` — admin UI at `/admin`, auto-generated import map at `admin/importMap.js`.

Source structure under `src/`:

- `payload.config.ts` — wires collections, the rich-text editor, and the Postgres adapter.
- `collections/` — `Posts`, `Users`, `Sections`, `Media`. Schema changes here require `npm run generate:types`.
- `editor/buildEditor.ts` + `editor/blocks/` — custom Lexical blocks (`CalloutBlock`, `DividerBlock`, `EmbedBlock`, `PullQuoteBlock`). New blocks must be registered in `buildEditor.ts`.
- `components/RichText.tsx` — frontend renderer for Lexical content; must handle every custom block defined in `editor/blocks/`.
- `lib/` — small utilities (`format.ts`, `embed.ts`, `media.ts`).

The blog app currently runs as a standalone subapp; it is not yet wired into the static site's routing.

## Development Standards

### Git Workflow: Trunk-Based Development

- All work happens on `main` — no long-lived feature branches
- Short-lived branches (< 24h) only for PRs, then delete after merge
- Commit at least once daily when actively working
- Full local validation before pushing (lint, tests if applicable)
- Feature flags for incomplete work — merge the code, hide the feature
- Commit messages: short, one-line, objective. No detailed changelogs.

### Security: Build It In

- Never commit secrets (API keys, tokens, .env files, credentials)
- Pre-commit checks: scan for secrets and vulnerable patterns
- Validate all user input at system boundaries
- Follow OWASP Top 10 (2025): watch for injection, supply chain failures, mishandled exceptions
- Use SCA for dependency vulnerabilities when adding packages
- No `eval()`, no innerHTML with user data, no unescaped template interpolation

### Quality & Debt Management

- Clean code as you go — improve while adding features, never batch rewrites
- Single responsibility: small functions, intention-revealing names
- No speculative abstractions — build what's needed now
- Remove dead code immediately, don't comment it out
- Code reviews on every PR
- Track and address tech debt continuously, not in sprints

### Continuous Compliance

- Generate SBOM when introducing build tooling or dependencies
- Robots.txt and meta tags for content protection (noai, noimageai)
- License headers when applicable
- Canonical URLs and proper meta for all public pages

### Curated Shared Instructions

- This file IS the shared instruction set — keep it current
- When a practice is refined or a new pattern adopted, update this file
- AI agents read this file automatically for project context
- Custom commands and workflows should be documented here as they emerge

### Code Style

- HTML/CSS: semantic markup, accessible (ARIA labels, skip links, focus states)
- No frameworks unless explicitly needed — vanilla HTML/CSS/JS preferred
- Mobile-first responsive design
- Consistent spacing, naming, and structure across files
