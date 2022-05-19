# Жизненный цикл

Стадия Монтирования

- constructor() {}
- static getDerivedStateFromProps(props, state)
- render
- componentDidMount

Стадия Обновления

- static getDerivedStateFromProps(props, state)
- shouldComponentUpdate(nextProps, nextState)
- getSnapshotBeforeUpdate(prevProps, prevState) => snapshot
- componentDidUpdate(prevProps, prevState, snapshot)

Стадия Удаления

- componentWillUnmount

# useCallback/memo

```js
const Component = () => {
  const cb = useCallback(() => ({}), []);
  const cb2 = () => ({});

  useEffect(() => {
    cb();
  }, [cb]);

  return (
    <div>
      <Children cb={cb} />
      <button onClick={cb2}>cb2</button>
    </div>
  );
};

// // render
// Component() // effect
// Component()
// Component()
// Component()
// Component()
```

```js
const Component = ({ props1, props2, props3, props4 }) => {
  const result = useMemo(() => {
    return [Ifinity].filter();
  }, [props1]);

  return (
    <div>
      <Children cb={cb} />
      <button onClick={cb2}>cb2</button>
    </div>
  );
};

// // render
// Component() // effect / 30s
// Component() // 1s
// Component() // 1s
// Component() // 1s
// Component() // 1s
// Component() // 1s
```
