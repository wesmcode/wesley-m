# Wesley Melo — Development Standards

## Git Workflow: Trunk-Based Development

- All work happens on `main` — no long-lived feature branches
- Short-lived branches (< 24h) only for PRs, then delete after merge
- Commit at least once daily when actively working
- Full local validation before pushing (lint, tests if applicable)
- Feature flags for incomplete work — merge the code, hide the feature
- Commit messages: short, one-line, objective. No detailed changelogs.

## Security: Build It In

- Never commit secrets (API keys, tokens, .env files, credentials)
- Pre-commit checks: scan for secrets and vulnerable patterns
- Validate all user input at system boundaries
- Follow OWASP Top 10 (2025): watch for injection, supply chain failures, mishandled exceptions
- Use SCA for dependency vulnerabilities when adding packages
- No `eval()`, no innerHTML with user data, no unescaped template interpolation

## Quality & Debt Management

- Clean code as you go — improve while adding features, never batch rewrites
- Single responsibility: small functions, intention-revealing names
- No speculative abstractions — build what's needed now
- Remove dead code immediately, don't comment it out
- Code reviews on every PR
- Track and address tech debt continuously, not in sprints

## Continuous Compliance

- Generate SBOM when introducing build tooling or dependencies
- Robots.txt and meta tags for content protection (noai, noimageai)
- License headers when applicable
- Canonical URLs and proper meta for all public pages

## Curated Shared Instructions

- This file IS the shared instruction set — keep it current
- When a practice is refined or a new pattern adopted, update this file
- AI agents read this file automatically for project context
- Custom commands and workflows should be documented here as they emerge

## Code Style

- HTML/CSS: semantic markup, accessible (ARIA labels, skip links, focus states)
- No frameworks unless explicitly needed — vanilla HTML/CSS/JS preferred
- Mobile-first responsive design
- Consistent spacing, naming, and structure across files
