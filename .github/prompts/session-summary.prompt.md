---
name: session-summary
description: Summarize the current learning session into a structured Cornell-style note for Notion
argument-hint: Optional focus (e.g., react basics, tooling mistakes, next steps)
agent: agent
---

Create a structured summary of the current chat session for a frontend learning journal.

Output requirements:
- Use concise, learner-friendly language.
- Capture concrete examples from the user's code and commands used in the session.
- Include technical corrections made during the session.
- Highlight misunderstandings and unresolved questions.

Persistence requirements:
- Save the generated note in `learning-sessions/YYYY-MM-DD-<topic>.md`.
- Update `README.md` indexes every time a session note is saved.
- Keep `README.md` sections updated:
	- `## Projects Index`
	- `## Learning Sessions Index`
	- `## Session Templates`
- In `Learning Sessions Index`, list all markdown session files in `learning-sessions/` except files prefixed with `_`.
- In `Session Templates`, list files in `learning-sessions/` prefixed with `_`.
- Sort session entries by date descending when possible.

Git workflow requirements:
- After writing the session note and updating `README.md`, run:
	- `git add README.md learning-sessions/`
	- `git commit -m "docs: add session summary for <YYYY-MM-DD>"`
	- `git push`
- If `git push` fails (auth/remote/etc), report the exact failure and provide the exact command to retry.
- If there are no content changes, skip commit and state that nothing changed.

Required sections:
1. Session metadata (date, repo, focus)
2. Cornell Notes table
3. Code examples from this session (before/after where relevant)
4. Tooling and workflow used
5. Concepts learned
6. Gaps and mistakes noticed
7. Next things to explore (prioritized)
8. Practice tasks for next session

Cornell format:
- Left column: Cue / Question / Keyword
- Right column: Notes / Explanation / Example
- Bottom section: 5-8 line summary

Style rules:
- Prefer bullets and small code snippets.
- Keep each section skimmable.
- Keep recommendations specific to this repository and this session.
