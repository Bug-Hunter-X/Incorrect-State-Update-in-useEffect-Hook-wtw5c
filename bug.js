```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: trying to update state directly inside the effect
    count = count + 1; // This won't trigger a re-render
  }, []);

  return <div>Count: {count}</div>;
}
```