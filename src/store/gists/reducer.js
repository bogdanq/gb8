import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  GET_GISTS_BY_NAME_START,
  GET_GISTS_BY_NAME_SUCCESS,
  GET_GISTS_BY_NAME_ERROR,
} from "./types";

const initialState = {
  gists: [],
  error: null,
  pending: false,

  gistsByName: [],
  errorByName: null,
  pendingByName: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, error: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case GET_GISTS_BY_NAME_START:
      return { ...state, pendingByName: true, errorByName: null };
    case GET_GISTS_BY_NAME_SUCCESS:
      return { ...state, pendingByName: false, gistsByName: action.payload };
    case GET_GISTS_BY_NAME_ERROR:
      return { ...state, pendingByName: false, errorByName: action.payload };
    default:
      return state;
  }
};
