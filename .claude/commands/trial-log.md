---
description: Patch a trial-journal row by slug. Usage — /trial-log <slug> field=value field=value
---

Patch a row in `apps/blog/docs/trial-journal.jsonl` for the post in `$ARGUMENTS`. Schema: `apps/blog/docs/trial-journal.schema.md`.

## Parse

`$ARGUMENTS` is `<slug> field=value field=value ...`.

Patchable fields:

| Field | Type | Allowed |
| --- | --- | --- |
| `intent` | string | `engagement` \| `seo` \| `direct-relationship` \| `monetization` \| `portfolio` |
| `human_verdict` | string | `ship` \| `revise` \| `reject` \| `archive` |
| `edit_distance_pct` | int | 0–100 |
| `voice_notes` | string | free text |
| `surprises` | string | free text |

Path mapping:
- `intent` → `.intent`
- `human_verdict` → `.human.verdict`
- `edit_distance_pct` → `.human.edit_distance_pct`
- `voice_notes` → `.human.voice_notes`
- `surprises` → `.human.surprises`

Quoted values: strip surrounding `"..."` before writing.

## Execute

1. Confirm slug exists in the journal. If not, stop and list available slugs.
2. Count matches for the slug. If >1 (republish case), stop and tell the user which line numbers match — they must hand-edit. The slash command never mutates an ambiguous row.
3. Validate every field name and value against the table. Any failure → stop, no partial writes.
4. Read all lines, mutate the matching one with `jq .path = value`, write back via tempfile + `mv`. Tempfile MUST live on the same filesystem as the journal — use `apps/blog/docs/trial-journal.jsonl.tmp`, not `/tmp/`. Cross-device `mv` is not atomic.
5. Print the patched line.

## Rules

- One slug per invocation.
- Reject patches to publisher-owned fields (`slug`, `ts`, `post_id`, `admin_url`, `status`, `critic.*`). Direct the user to hand-edit if they really mean it.
- No new fields. Schema is closed for v1.

## Stop

After printing the patched line. No subagent calls. No commits.
