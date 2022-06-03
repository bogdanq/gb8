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

# redux

// const state = {}

// 1) SST
// 2) Состояние только для чтение
// 3) Чистые функции (reducer)
// 4) Однонаправленный поток данных (dispatch)

// Store = {}
// Views = (React component)

// Action

```js
const type = "INCREMENT";
const action = { type: "INCREMENT" };
const action2 = { type: "DECREMENT", payload: "some data" };
```

// Action Creator

```js
const actionCreator = (payload) => {
  return { type: "INCREMENT", payload };
};
```

// Dispatch

```js
dispatch({ type: "INCREMENT" });
dispatch(actionCreator("some data"));
```

// Reducer

```js
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

let state = {};
const listeners = [];

const dispatch = (action) => {
  state = reducer(state, action);
  listeners.forEach((listener) => listener());

  return action;
};
```
