import React from 'react'

function Example() {
  return (
    <div>
        <h1>example of react hooks </h1>
        <h1>introduction t o react hooks</h1>
        <div>
        <p>1. useState</p>
<p>The useState hook is used to manage state in a functional component.</p>
<p>2. useEffect</p>
<p>The useEffect hook is used for side effects like data fetching, subscriptions, or manually modifying the DOM. It runs after every render.</p>
<p>3. useContext</p>
<p>The useContext hook allows you to access the value of a React context</p>
<p>4. useRef</p>
<p>
The useRef hook is used to persist values across renders without triggering a re-render. It can also be used to reference DOM elements</p>
<p>5. useMemo</p>
<p>The useMemo hook is used to memoize expensive computations so that they are only recalculated when the dependencies change.</p>
<p>6. useCallback</p>
<p>The useCallback hook is used to memoize callback functions so that they don’t get redefined on every render.</p>
<p>7. useReducer</p>
<p>The useReducer hook is typically used for managing complex state logic in place of useState. It's similar to Redux but for local component state.
</p>
<p>8. useLayoutEffect</p>
<p>The useLayoutEffect hook is similar to useEffect, but it runs synchronously after all DOM mutations. It is useful when you need to measure the DOM or perform layout changes.</p>

        </div>
    </div>
  )
}

export default Example