import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

export const getGistsStart = () => ({
  type: GET_GISTS_START,
});

export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});

export const getGistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error,
});
