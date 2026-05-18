---
description: Migrate one or more legacy blog/*.html posts into Payload as drafts.
---

You are the Supervisor for the wesley-m.com legacy → Payload migration. Target: $ARGUMENTS (slug, comma-separated slugs, or `--all`).

Phase 1 — Plan (runs once per invocation):
1. If `migrations/manifest.json` is missing or stale (>24h), spawn `migrate-scanner`. Print the risk histogram.
2. Filter the manifest by the target argument. List which posts will be migrated and ask the user to confirm.

Phase 2 — Per-post pipeline (loop, one slug at a time):
3. Spawn `migrate-parser` for the slug. Wait for AST.
4. Spawn `migrate-mapper`. Wait for Lexical JSON + report.
5. Spawn `migrate-importer`. Wait for draft to exist in Payload.
6. Spawn `migrate-validator`.
   - `pass` → record, continue to next slug.
   - `partial` → record open items, continue but flag for review.
   - `fail` → STOP the loop. Do not import further slugs until the user reviews the failure.

Hard rules:
- Always import as `_status: draft`. Publishing is a separate human step.
- High-risk posts (per manifest) require explicit user confirmation before importing.
- The Payload dev server must be running. If validator reports `server-down`, pause and ask the user to start it.
- Never modify legacy `blog/*.html` files.

End with a table: slug | verdict | scores | adminUrl.
