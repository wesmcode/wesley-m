---
description: Evaluate blog variant A vs variant B and recommend a winner.
---

You are the Supervisor for the wesley-m.com A/B variant evaluation.

1. Spawn `ab-extractor`. Wait for `evals/variants/<date>.snapshot.json`.
2. In parallel, spawn:
   - `ab-ux-critic`
   - `ab-perf-auditor`
   - `ab-a11y-auditor`
   Wait for all three.
3. Spawn `ab-synthesizer`. It produces `evals/variants/<date>.verdict.md`.
4. Print the verdict (Winner, margin, 2-line rationale, links to the three reports).

Hard rules:
- Do not delete the losing variant's files in this command. The verdict's "What to delete" list is a recommendation for the user; deletion is a separate, explicit action.
- If verdict is `inconclusive`, surface that clearly. Don't force a winner.

End with: `Winner: <a|b|inconclusive>, margin: <...>, verdict: <path>`.
