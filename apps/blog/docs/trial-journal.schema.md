# Trial Journal — schema

Append-only JSONL at `apps/blog/docs/trial-journal.jsonl`. One JSON object per
line, one line per post published through the pipeline during the trial
(started 2026-05-18). JSONL because exit criteria are arithmetic — `jq` does
verdict-match math in one line.

## Line shape

```json
{
  "slug": "the-bug-bounty-that-quit",
  "ts": "2026-05-21T14:32:00Z",
  "post_id": "68e4...",
  "admin_url": "http://localhost:3000/admin/collections/posts/68e4...",
  "status": "draft",
  "intent": null,
  "critic": { "verdict": null, "revise_loops": null },
  "human": { "verdict": null, "edit_distance_pct": null, "voice_notes": null, "surprises": null }
}
```

## Who writes what

| Field | Writer | When |
| --- | --- | --- |
| `slug`, `ts`, `post_id`, `admin_url`, `status` | `blog-publisher` | On successful publish |
| `critic.verdict`, `critic.revise_loops` | `blog-publisher` (from supervisor) | On successful publish |
| `intent` | `/trial-log` | Human, at commission or first review |
| `human.verdict` | `/trial-log` | Human, after reviewing the draft |
| `human.edit_distance_pct` | `/trial-log` | Human, after editing in admin |
| `human.voice_notes`, `human.surprises` | `/trial-log` | Human, free-text, anytime |

## Field semantics

- **`intent`** — `engagement` \| `seo` \| `direct-relationship` \| `monetization` \| `portfolio`. Answers *"is the pipeline producing the right posts?"*, not just well-crafted ones.
- **`critic.verdict`** — final `blog-critic` verdict: `ship` \| `revise` \| `reject`.
- **`critic.revise_loops`** — count of revisions the critic forced (0–2).
- **`human.verdict`** — what you actually did: `ship` \| `revise` \| `reject` \| `archive`. The trial-defining question is `critic.verdict == human.verdict`.
- **`human.edit_distance_pct`** — rough % the published text diverged from `drafts/<slug>.md`. Eyeballed in 5% buckets is fine.
- **`voice_notes` / `surprises`** — free text. Voice = what felt off vs the wesley-m voice. Surprises = anything the critic missed.

## Patching

Use `/trial-log <slug> field=value field=value`. Slash command is the sanctioned
patch path — rewrites the line in place by slug.

## Reading

`/trial-status` reports verdict-match rate, intent coverage, recent notes.

## Prerequisites

`jq` must be installed locally. The publisher, `/trial-status`, and `/trial-log` all depend on it. If `jq` is absent, `blog-publisher` records `journal_error: "jq not installed"` and continues — the post ships, but no row is written.

## Retirement

Retrospective ~2026-06-15. If a phase earns autonomous operation, journal grows
fields for its exception cases. >2 additive fields/week = trial overspecifying.
