# Learning Session - 2026-07-07

## Session Metadata
- Date: 2026-07-07
- Repository: frontend-learning-path
- Main Focus: React state updates, JSX rendering behavior, equality operators, and array methods (`map`, `filter`, `reduce`)
- Session Type: Guided Q&A + live debugging

## Cornell Notes

| Cue / Question / Keyword | Notes / Explanation / Example |
|---|---|
| npm vs yarn | Both manage dependencies/scripts. `npm` is default with Node; Yarn often preferred in larger monorepos for stricter dependency controls and workspace tooling. |
| Why local `counter` failed in React | A local variable resets on render and does not trigger UI updates. React state (`useState`) is required for reactive rendering. |
| Why `setCounter(prev => prev + 1)` | Updater form is safer when next value depends on previous value, especially with batched updates. |
| `==` vs `===` | `==` performs coercion; `===` compares type and value strictly. Prefer `===` by default. |
| Why Alice was not rendering in filtered list | In `map`, using `{ ... }` without `return` returns `undefined` for each item. Fixed with explicit return, then refactored to implicit return style. |
| What `reduce` is for | Converts an array into one value/object by accumulating. Example in app: counting total students. |

## Code Examples
- File: `intro/app.js`
```js
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
  setCounter((prev) => prev + 1);
};

{students
  .filter((student) => student.grade === 'A')
  .map((student, index) => (
    <div key={index}>
      <p>Name: {student.name}</p>
      <p>Grade: {student.grade}</p>
    </div>
  ))}

const totalStudents = students.reduce((acc, current) => {
  acc = acc + 1;
  return acc;
}, 0);
```

## Tooling and Workflow
- Fixed rendering bug by checking map callback return semantics.
- Refactored JSX callback to implicit return for readability.
- Used diagnostics check after edits to confirm no file errors.

## Concepts Learned
- React re-render behavior is tied to state/props, not local mutable variables.
- Updater callbacks in state setters prevent stale reads.
- Arrow function body style changes return behavior in `map`.
- `===` should be the standard equality operator in app code.
- `reduce` is an accumulator pattern for totals/aggregations.

## Gaps / Mistakes
- Initially treated `counter` as regular variable inside a component.
- Forgot `return` in block-body `map` callback.
- Still using `index` as React key in list examples (ok for static demos, risky for dynamic lists).

## Next Things to Explore
1. Replace `index` keys with stable IDs in `students`.
2. Add decrement/reset actions to practice state transitions.
3. Use `reduce` for grouped counts (for example, students by grade).

## Practice Tasks
1. Implement `decrementCounter` and prevent value below 0.
2. Rewrite `totalStudents` reduce as a one-liner and compare readability.
3. Build an object `{ A: n, B: n, C: n }` using `reduce`.

## Summary
Today focused on turning syntax into correct React behavior. The main bug was a non-reactive counter implemented as a local variable, which was fixed by using `useState`. We also clarified why updater form (`prev => prev + 1`) is safer than reading state directly. A rendering issue in filtered students output was traced to a missing `return` in a `map` callback, then cleaned up with implicit return syntax. The session also covered practical JavaScript fundamentals: strict vs loose equality and what `reduce` is for. Overall, this was a strong debugging-and-reasoning session tied directly to code in `intro/app.js`.
