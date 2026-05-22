---
description: Summarize the blog pipeline trial journal — verdict-match rate, intent coverage, recent notes.
---

Read `apps/blog/docs/trial-journal.jsonl`. If missing or empty, say so and stop.

Schema: `apps/blog/docs/trial-journal.schema.md`.

## Compute (use jq)

1. **Header**: total posts, first and most recent `ts`.
2. **Critic verdict-match rate** (headline metric): of rows where both `critic.verdict` and `human.verdict` are non-null, fraction with `critic.verdict == human.verdict`. Format `N/M (P%)`. If `M < 3`, mark "too few samples".
3. **Pending human verdicts**: count where `human.verdict` is null.
4. **Intent coverage**: count by `intent` (including `null`). Flag if `null` is the largest bucket.
5. **Revise-loop distribution**: count by `critic.revise_loops` (0 / 1 / 2 / null).
6. **Edit-distance trend**: last 5 `edit_distance_pct` values ordered by `ts`.
7. **Recent notes**: last 3 non-null `voice_notes`, last 3 non-null `surprises`, each tagged with its slug.

## Format

Markdown. Headline metric first. Tables or bullets, no narration.

## Stop

After printing. No file writes. No subagent calls.
