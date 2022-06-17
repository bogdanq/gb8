import {
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  getGistsByNameStart,
  getGistsByNameSuccess,
  getGistsByNameError,
} from "./actions";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getGistsStart());

      const { data } = await api.getPublicGistsApi(page);

      dispatch(getGistsSuccess(data));
    } catch (e) {
      dispatch(getGistsError(e));
    }
  };

export const getGistsByName = (name) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsByNameStart());

    const { data } = await api.getGistsByNameApi(name);

    dispatch(getGistsByNameSuccess(data));
  } catch (e) {
    dispatch(getGistsByNameError(e));
  }
};
