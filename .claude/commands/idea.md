---
description: Capture a new idea into the ideas/ backlog folder
argument-hint: <one-line description of the idea>
---

The user wants to capture an idea into the `ideas/` backlog. The one-line
description is: **$ARGUMENTS**

Do the following, in order:

1. **Derive the filename.** Use today's date (from the `currentDate` context) plus
   a short kebab-case slug from the description: `ideas/YYYY-MM-DD-<slug>.md`.
   If a file with that name already exists, append `-2`, `-3`, etc.

2. **Read `ideas/_template.md`** to get the current template structure. If it
   doesn't exist, fall back to the structure documented in `ideas/README.md`.

3. **Create the new idea file** from the template. Pre-fill what you can from
   the one-line description:
   - `title:` — a clean version of the description
   - `slug:` — the kebab-case slug
   - `created:` — today's date
   - `status:` — `backlog`
   - "The idea" section — a one-paragraph expansion of the description

   Leave the "Why", "How it could happen", "Open questions", and "Related"
   sections as guided placeholders (or your best initial sketch if the
   description already implies them).

4. **Ask the user 2–3 short follow-up questions** to flesh out the "Why" and
   "How it could happen" sections. Use the `AskUserQuestion` tool with
   pre-filled options where it makes sense (e.g. effort estimate, tags). Don't
   over-ask — if the description is already detailed, skip straight to confirming.

5. **Update the file** with the answers and confirm the path to the user.

6. **Do not commit.** The user reviews and commits ideas themselves.

Keep it lightweight. The point of this command is fast capture, not a
30-minute planning session — if the user has more to say, they can edit the
file directly.
