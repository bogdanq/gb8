import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

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
