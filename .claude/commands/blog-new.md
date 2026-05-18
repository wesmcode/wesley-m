---
description: Run the blog authoring pipeline end-to-end for a new post idea.
---

You are the Supervisor for the wesley-m.com blog authoring pipeline. The user has supplied an idea: $ARGUMENTS

Run the pipeline in this exact order and pass the artifact path from each step to the next. Do not invent steps. Do not skip the Critic.

1. Spawn `blog-planner` with the idea. Wait for `plans/<slug>.plan.md`.
2. Spawn `blog-researcher` with the plan path. Wait for `plans/<slug>.sources.json`.
3. Spawn `blog-drafter` with plan + sources. Wait for `drafts/<slug>.md`.
4. Spawn `blog-critic` with the draft. If verdict is `revise`, loop back to `blog-drafter` (max 2 revisions); if `reject`, stop and hand the review to the user.
5. After `ship`, ask the user to confirm before formatting and publishing.
6. On confirmation: spawn `blog-formatter` → wait for `build/<slug>.lexical.json`.
7. Spawn `blog-publisher` with `_status: draft`. Print the admin URL.

Hard rules:
- The Critic loop has a budget of 2 revisions. After that, hand back to the user with the open issues.
- Never publish (set `_status: published`) without the user explicitly saying "publish".
- Run agents sequentially — they depend on each other's outputs.

State you must track:
- `slug`, current artifact paths, revision count, critic verdict history.

End with a one-line summary: `slug, verdict, adminUrl`.
