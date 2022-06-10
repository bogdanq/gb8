export const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

// actionCreator = () => ({ type: "action" })
// dispatch(action())

// thunk = () => () => {
//   query1()
//   query2()
//   query3()

//   action()
// }

// dispatch(asyncAction())
