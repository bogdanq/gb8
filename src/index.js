import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      count: 0,
      films: ["film1"],
      test: {
        id: 1,
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
  }

  listener = () => {
    console.log("click");
  };

  componentDidMount() {
    // еффекты
    // запросы
    // подписки
    // таймеры
    // работа с ДОМ
    // слушатели

    document.addEventListener("click", this.listener);
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const textContent = document.querySelector(".count").textContent;
    console.log("getSnapshotBeforeUpdate", textContent);
    return textContent;
  }

  componentDidUpdate(s, p, shapshot) {
    // еффекты
    // запросы
    // подписки
    // таймеры
    // работа с ДОМ
    // слушатели
    console.log(
      "componentDidUpdate",
      document.querySelector(".count").textContent
    );
    console.log("componentDidUpdate: shapshot", shapshot);
  }

  componentWillUnmount() {
    // очистка слушатели
    // удаление подписки
    console.log("componentWillUnmount");
    document.removeEventListener("click", this.listener);
  }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.setState(
      (state) => ({
        count: state.count + 1,
      })
      // () => {
      //   console.log("state", this.state);
      // }
    );
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
    // this.setState(() => ({}))
  };

  addFilms = () => {
    const film = "new film";

    this.setState({
      films: [...this.state.films, film],
    });
  };

  render() {
    console.log("render");
    const { count, films, test } = this.state;

    return (
      <div>
        <h1>ClassComponent</h1>

        <div>
          <h1>
            Count: <span className="count"> {count}</span>
          </h1>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
        <hr />

        <div>
          <h1>films:</h1>
          <button onClick={this.addFilms}>addFilms</button>
          <div>
            {films.map((film) => (
              <h1>{film}</h1>
            ))}
            <hr />
          </div>
        </div>

        <div>
          <h1>test:</h1>
          <div>
            <h1>
              Count: <span> {test.id}</span>
            </h1>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

const Test = ({ count, cb }) => {
  const [testCount, setTestCount] = useState(100);

  return (
    <div>
      <h1>test</h1>
      <h1>
        Count: <span> {count}</span>
        testCount: <span> {testCount}</span>
      </h1>

      <button onClick={() => cb(testCount)}>cb</button>
      <button onClick={() => setTestCount(testCount + 1)}>
        increment test
      </button>
      <hr />
      <hr />
    </div>
  );
};

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [films, setFilms] = useState(["film1"]);

  useEffect(() => {
    // еффекты
    // запросы
    // подписки
    // таймеры
    // работа с ДОМ
    // слушатели
    console.log("useEffect 1");

    // setCount((c) => c + 1); +
    // setCount(count + 1); -

    return () => {
      console.log("useEffect 1: remove");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect 2");

    return () => {
      console.log("useEffect 2: remove");
    };
  });

  useEffect(() => {
    console.log("useEffect 3: count", count);

    return () => {
      console.log("useEffect 3: count remove");
    };
  }, [count]);

  useEffect(() => {
    console.log("useEffect 4: films", films);

    return () => {
      console.log("useEffect 4: films remove");
    };
  }, [films]);

  const addFilms = () => {
    const film = "new film";

    setFilms([...films, film]);
  };

  return (
    <div>
      <h1>Function component</h1>

      <Test
        count={count}
        cb={(s) => {
          setCount(s);
        }}
      />
      <Test count={count} cb={(s) => setCount(s)} />

      <div>
        <h1>
          Count: <span> {count}</span>
        </h1>

        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          increment
        </button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
      <hr />

      <div>
        <h1>films:</h1>
        <button onClick={addFilms}>addFilms</button>
        <div>
          {films.map((film) => (
            <h1>{film}</h1>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const Component = () => {
  const [isVisble, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!isVisble)}>setVisible</button>
      {isVisble && <FunctionComponent />}
    </div>
  );
};
root.render(
  // <React.StrictMode>
  <Component />
  // </React.StrictMode>
);
