---
name: 'Modern JavaScript and React Syntax'
description: 'Warn about outdated patterns and suggest modern alternatives'
applyTo: '**/*.{js,jsx,ts,tsx}'
---

# Modern JavaScript and React Syntax Patterns

When you see outdated patterns in this project, warn me and suggest the modern alternative. Explain why the new way is better.

## JavaScript Modernizations

### Variables
- **Old**: `var x = 5`
- **New**: `const x = 5` (or `let` if reassignment needed)
- **Why**: `const` prevents accidental reassignment, `let` is block-scoped, `var` is function-scoped and confusing.

### Imports/Exports
- **Old**: `const React = require('react')`
- **New**: `import React from 'react'`
- **Why**: ES modules are the standard, cleaner syntax, better for bundlers.

### String Templates
- **Old**: `"Hello " + name + "!"`
- **New**: `` `Hello ${name}!` ``
- **Why**: Cleaner, more readable, handles multiline strings naturally.

### Arrow Functions
- **Old**: `function add(a, b) { return a + b; }`
- **New**: `const add = (a, b) => a + b`
- **Why**: Shorter, lexical `this` binding, more modern.

### Object Shorthand
- **Old**: `{ name: name, age: age }`
- **New**: `{ name, age }`
- **Why**: Less repetition, cleaner code.

## React Modernizations

### Component Syntax
- **Old**: Class component with `extends React.Component`
- **New**: Function component with hooks
- **Why**: Simpler, hooks are more composable, shorter code.

### State Management
- **Old**: `this.state = {}` and `this.setState()`
- **New**: `const [count, setCount] = useState(0)`
- **Why**: Hooks are simpler, reusable, no `this` confusion.

### Side Effects
- **Old**: `componentDidMount()`, `componentWillUnmount()`
- **New**: `useEffect()` hook
- **Why**: Unified approach, grouped related logic, cleaner.

### JSX in Imports
- **Old**: `import React from 'react'` (needed to use JSX)
- **New**: No React import needed (since React 17+)
- **Why**: JSX no longer requires React in scope, less boilerplate.

## Example: Old vs New

**Old (class component):**
```jsx
import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

**New (function component with hooks):**
```jsx
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted or count changed');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**Why the new version is better:**
- No `constructor`, no `this.state` boilerplate.
- `useState` is clearer than `setState`.
- `useEffect` groups side effects together, not scattered across lifecycle methods.
- Shorter, easier to reason about.

## When to warn

If you see patterns from the "Old" column in the code, **always**:
1. Point it out.
2. Show the modern alternative.
3. Briefly explain the benefit (performance, readability, simplicity, etc.).
4. Let me decide if I want to refactor.
