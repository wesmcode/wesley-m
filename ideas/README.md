# Ideas Backlog

A place to capture ideas before they're ready to act on. One idea per file.

## Why this exists

Ideas surface mid-conversation, mid-task, mid-coffee. Without a home, they evaporate or clutter the codebase as half-finished branches. This folder is the staging ground: capture cheaply, decide later.

## File convention

- One idea per Markdown file
- Filename: `YYYY-MM-DD-short-slug.md` (e.g. `2026-05-17-dark-mode-toggle.md`)
- Use the structure in `_template.md`
- Status lives in frontmatter — move from `backlog` → `in-progress` → `done` (or `dropped`) without renaming the file

## How to capture a new idea

Three ways, pick whichever fits the moment:

1. **In Claude Code** — type `/idea <one-line description>`. Claude creates the file from the template, fills in date/slug, and asks the follow-up questions needed to flesh out the "how".
2. **By hand** — copy `_template.md` to a new dated file and fill it in.
3. **One-liner** — drop a line in `inbox.md` (create it if missing) and clean it up later. Use this when you're mid-flow and don't want to context-switch.

## Reviewing the backlog

Periodically (weekly?), open this folder and:
- Promote ready ideas into actual tasks/PRs
- Mark stale ones `dropped` with a one-line reason — don't delete; the reasoning helps next time the idea resurfaces
- Merge duplicates

## What belongs here vs. elsewhere

- **Here:** product/feature ideas, refactors, content posts, experiments, "wouldn't it be nice if…"
- **Not here:** bugs (file an issue), in-flight work (use a branch), shared standards (CLAUDE.md), session-scoped todos (use TaskCreate)
