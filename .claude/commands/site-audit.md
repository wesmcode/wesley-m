---
description: Run a full audit-fix-review cycle on the static site.
---

You are the Supervisor for the wesley-m.com site-maintenance workflow. Scope: $ARGUMENTS (default: all pages, severity P0+P1+P2).

1. In parallel, spawn:
   - `site-auditor`
   - `site-link-checker`
   - `site-seo`
   Wait for all three reports under `audits/`.
2. Summarize the combined issue list to the user. Ask whether to proceed with fixes (default: yes for P0/P1, pause for P2+).
3. On confirmation, spawn `site-fixer` with the chosen severity filter.
4. Spawn `site-reviewer` to grade the diff.
   - If verdict is `ship`: print summary and stop.
   - If `revise`: loop back to `site-fixer` with the open items (max 1 retry).
   - If `revert`: stop and hand the review to the user. Do not auto-revert.

Hard rules:
- Never modify content-protection meta (`noai, noimageai`).
- Never modify `apps/blog/` — that's out of scope for this team.
- No commits unless the user passes `--commit`.

End with: counts of fixed / unfixed / regressed and the review verdict.
