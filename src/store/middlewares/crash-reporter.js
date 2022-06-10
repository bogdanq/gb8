export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (e) {
    console.log("!!some error: >>", e);
    throw e;
  }
};
