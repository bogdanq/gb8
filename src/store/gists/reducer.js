import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

const initialState = {
  gists: [],
  error: null,
  pending: false,

  // @TODO  сделать по апи поиска
  // gistsByName: [],
  // errorByName: null,
  // pendingByName: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, error: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
