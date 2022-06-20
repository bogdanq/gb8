import {
  getGists,
  getGistsStart,
  getGistsSuccess,
  getGistsError,
} from "../../gists";

describe("get gists thunk", () => {
  it("success", async () => {
    const PAGE = 2;
    const DATA = "ok";

    const dispatch = jest.fn();
    const getPublicGistsApi = jest.fn().mockResolvedValue({ data: DATA });

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getPublicGistsApi });

    expect(getPublicGistsApi).toBeCalledWith(PAGE);
    expect(getPublicGistsApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess(DATA));
  });

  it("error", async () => {
    const PAGE = 2;
    const ERROR = { error: "error" };

    const dispatch = jest.fn();
    const getPublicGistsApi = jest.fn().mockRejectedValue(ERROR);

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getPublicGistsApi });

    expect(getPublicGistsApi).toBeCalledWith(PAGE);
    expect(getPublicGistsApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(ERROR));
  });
});

// @TODO сделать дома
describe("get gists by name thunk", () => {});
