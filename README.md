# Concurrent Rendering in React

With Concurrent Rendering, React can:

✅ Pause and resume rendering

✅ Prioritize urgent updates (e.g., user interactions over slow data fetching)

✅ Improve performance on slow devices and networks

With Concurrent Rendering, React can split work into smaller chunks and pause if needed.

For example, React provides `useTransition` and `useDeferredValue` Hooks for delaying some updates or making them lower priority.

---

## **useTransition Hook**

It allows React to prioritize urgent updates (like user input) and delay non-urgent updates (like expensive calculations).

```jsx
const [isPending, startTransition] = useTransition();
```

- `isPending` - A flag that indicates whether a transition is in progress.
- `startTransition` - A function that makes a state update lower priority. It takes a callback as an argument, and any state updates inside the callback will be deferred.

### **Example**
```jsx
const [query, setQuery] = useState("");
const [list, setList] = useState([]);
const [isPending, startTransition] = useTransition();

const onSearch = (val) => {
  setQuery(val);
  startTransition(() => {
    const filteredList = largeDataset.filter(item => item.includes(val));
    setList(filteredList);
  });
};
```

🔹 Here, `query` updates immediately, ensuring a smooth input experience, while filtering the large dataset is deferred.

---

## **useDeferredValue Hook**

`useDeferredValue` delays a value update until more urgent updates (like user interactions) are complete. It is useful when passing a frequently changing value to an expensive computation or rendering process.

```jsx
const deferredValue = useDeferredValue(value);
```

- `useDeferredValue(value)` returns a **delayed version** of `value` that updates **after** higher-priority updates are processed.
- It is useful for preventing expensive calculations from blocking UI updates.

### **Example**
```jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);
const filteredList = largeDataset.filter(item => item.includes(deferredQuery));
```

🔹 `query` updates instantly, so the input feels responsive, while `filteredList` updates with a slight delay, preventing UI lag.

---

## **When to Use These Hooks?**

| Hook | Purpose |
|------|---------|
| `useTransition` | Used to mark a state update as low priority to keep UI interactions smooth. |
| `useDeferredValue` | Used to delay a value update so expensive computations do not block rendering. |

Both hooks help React manage rendering efficiently, ensuring smooth interactions even with complex updates. 🚀

