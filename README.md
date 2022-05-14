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
