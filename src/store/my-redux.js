export const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => {
    return currentState;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    currentState = reducer(currentState, action);

    listeners.forEach((listener) => listener());

    return action;
  };

  return { getState, subscribe, dispatch };
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const store = createStore({ count: 0 }, reducer);
