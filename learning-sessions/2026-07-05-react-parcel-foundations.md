# Learning Session - 2026-07-05

## Session Metadata
- Date: 2026-07-05
- Repository: frontend-learning-path
- Main Focus: React basics, Parcel setup, Node/npm foundations, module syntax, and debugging JSX/import errors
- Session Type: Guided coding + conceptual Q&A

## Cornell Notes

| Cue / Question / Keyword | Notes / Explanation / Example |
|---|---|
| What is Parcel? | Parcel is a bundler/dev server that understands JSX and imports, bundles assets, and serves app locally. Used with `npm run dev`. |
| Why package.json? | Project manifest for scripts, dependencies, metadata. Enables reproducible installs and commands like `npm run dev` and `npm test`. |
| npm vs npx vs Node | Node runs JS outside browser; npm manages packages; npx runs package binaries (often one-off) without global install. |
| ESM vs CommonJS | ESM uses `import/export`; CommonJS uses `require/module.exports`. Current project uses ESM (`"type": "module"`). |
| Default vs named export error | Error `sum.js does not export 'default'` happened because file exported `sum` as named export, but import expected default. |
| JSX conditional rendering | Expressions in JSX must be inside `{}`; typo `gt` and extra `)` caused syntax issues. Correct: `{condition && <p>...</p>}` and complete ternary syntax. |
| Jest with ESM | Jest required ESM-compatible script: `node --experimental-vm-modules ./node_modules/jest/bin/jest.js`. |
| Git ignore behavior | `.gitignore` does not remove already tracked files. Needed `git rm -r --cached intro/.parcel-cache intro/dist`. |

## Code Examples from This Session

### 1) React entry and component wiring
Files: `intro/index.js`, `intro/app.js`

```js
import ReactDOM from 'react-dom/client';
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### 2) Named export usage
File: `intro/sum.js`

```js
export function sum(a, b) {
  return a + b;
}
```

Correct import style used in tests:

```js
import { sum } from './sum.js';
```

### 3) Simple Jest test
File: `intro/sum.test.js`

```js
import { expect, test } from '@jest/globals';
import { sum } from './sum.js';

test('sum adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

### 4) JSX conditional fix pattern

```jsx
{biggerThanOne && <p>Sum of 2 and 3 is: {result}</p>}
{biggerThanOne ? <p>Result is greater than 1</p> : <p>Result is not greater than 1</p>}
```

## Tooling and Workflow Used
- Bundler/dev server: Parcel (`npm run dev`, `npm run build`)
- Test runner: Jest (`npm test` with ESM flag)
- Runtime/package ecosystem: Node.js + npm + npx
- Git hygiene: `.gitignore` updates and untracking already-committed artifacts
- VS Code customizations:
  - Always-on instruction: `.github/copilot-instructions.md`
  - Modern syntax rule: `.github/instructions/modern-syntax.instructions.md`
  - Slash prompt: `.github/prompts/modernize.prompt.md`

## Concepts Learned
- Why frontend projects usually need a bundler for JSX/imports
- How `package.json` controls scripts/dependencies
- Difference between Node, npm, and npx
- ESM module rules and import/export matching
- Core JSX conditional rendering patterns (`&&`, ternary)
- Basic test file anatomy with Jest (`test` + `expect`)
- Difference between ignored vs already tracked files in Git

## Gaps and Mistakes Noticed
- Import/export mismatch (default vs named)
- JSX syntax mistakes (`gt`, missing braces, extra parenthesis)
- Variable typo in conditional (`bigggerThanOne` vs `biggerThanOne`)
- List rendering currently uses `index` as key in `app.js` (works for demo, not ideal for dynamic lists)
- Several examples in `app.js` are educational but mixed in one component; separation could improve readability

## Next Things to Explore (Prioritized)
1. React component testing with React Testing Library (render, query, assertion)
2. Refactor `app.js` into smaller components (`StudentList`, `ConditionalResult`, `SpreadExamples`)
3. Better list keys (stable IDs) and why index keys are risky
4. Intro to `useState` and `useEffect` with a tiny interactive example
5. Optional: compare Parcel vs Vite setup differences

## Practice Tasks for Next Session
1. Add one extra test case to `sum.test.js` for negative numbers and one for zero.
2. Create a `students.js` data file and render it from a separate `StudentList` component.
3. Replace `index` key with a stable `id` field in the student objects.
4. Add one button that increments a counter using `useState`.
5. Explain in your own words when to use `&&` vs ternary rendering.

## Summary
Today established the baseline frontend toolchain and coding flow for this repo: Parcel for build/dev, Jest for tests, and ESM syntax for modules. The session clarified fundamental concepts (Node, npm, npx, package.json) and fixed practical mistakes around import/export matching and JSX expressions. You also set up AI customization files to support tutoring and modernization workflows. The biggest technical wins were getting the app to run reliably, adding a first passing test, and cleaning tracked build artifacts from Git. Main learning gap now is moving from syntax practice to component architecture and stateful React patterns. Next session should focus on component decomposition, stable list keys, and your first hook-based interaction.
