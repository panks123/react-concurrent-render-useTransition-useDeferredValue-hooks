# Concurrent rendering in React

With Concurrent Rendering, React can: 

✅ Pause and resume rendering

✅ Prioritize urgent updates (e.g., user interactions over slow data fetching)

✅ Improve performance on slow devices and networks


With Concurrent Rendering, React can split work into smaller chunks and pause if needed.

e.g. React provides useTransition and useDeferredValue Hooks for delaying some updates (or making them of less priority)

# useTransition Hook
It allows React to prioritize urgent updates (like user input) and delay non-urgent updates (like expensive calculations).

```
const [isPending, startTransition] = useTransition();
```

- `isPending` - flag to indicate a pending transition
- `startTransition` - startTransitions is a function that makes a state update of less priority, it takes a callback as argument inside which we can keep our lower priority state update
