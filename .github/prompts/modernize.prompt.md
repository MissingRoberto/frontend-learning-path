---
name: modernize
description: Find outdated JS/React/TS syntax in provided code and propose modern replacements with explanations
argument-hint: Paste code or describe file(s) to modernize
agent: agent
---

Modernize the user-provided code to current JavaScript, React, and TypeScript patterns.

Requirements:
- Identify outdated syntax and explain why it is outdated.
- Show modern replacements and explain the benefit of each change.
- Prefer the simplest modern approach first.
- Preserve behavior; do not change logic unless asked.
- If the user asks for code edits, apply them directly to files.

Focus areas:
- var -> const/let
- require/module.exports -> import/export
- Class components/lifecycle methods -> function components + hooks
- Legacy ReactDOM.render -> createRoot
- String concatenation -> template literals where it improves clarity
- Other obsolete patterns discovered in context

Use these project rules:
- [.github/copilot-instructions.md](../copilot-instructions.md)
- [.github/instructions/modern-syntax.instructions.md](../instructions/modern-syntax.instructions.md)

Output format:
1. What is outdated
2. Proposed modern code
3. Why this is better
4. Optional follow-up refactor steps
