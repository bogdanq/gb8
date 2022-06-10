export const timeScheduler = (store) => (next) => (action) => {
  if (!action.meta || action.meta.delay) {
    return next(action);
  }

  setTimeout(() => {
    next(action);
  }, action.meta.delay);
};
