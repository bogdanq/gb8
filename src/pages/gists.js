import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getGists, getGistsByName } from "../store/gists";

const searchGistsDebounced = debounce((query, dispatch) => {
  dispatch(getGistsByName(query));
}, 1000);

export const GistsPage = () => {
  const [value, setValue] = useState("");
  // const [gists, setGists] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const getGists = async () => {
  //   try {
  //     setIsLoading(true);

  //     const result = await fetch(URL);
  //     const data = await result.json();

  //     if (result.status === 200) {
  //       setGists(data);
  //     } else {
  //       setError("test");
  //     }
  //   } catch (e) {
  //     setError(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getGists();
  // }, []);

  const dispatch = useDispatch();
  const { gists, error, pending, gistsByName, pendingByName, errorByName } =
    useSelector((state) => state.gists);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    if (!!value) {
      searchGistsDebounced(value, dispatch);
    }
  }, [value, dispatch]);

  if (error || errorByName) {
    return <div>Error !!</div>;
  }

  console.log("errorByName", errorByName);

  return (
    <div>
      <h1>Gists page</h1>

      <div style={{ display: "flex" }}>
        <div>
          {pending ? (
            <h1>pending ...</h1>
          ) : (
            <div>
              {Array.from({ length: 10 })
                .map((_, index) => index + 1)
                .map((item) => (
                  <button onClick={() => dispatch(getGists(item))} key={item}>
                    {item}
                  </button>
                ))}
              {gists.map((gist, index) => (
                <div key={index}>
                  <h2>
                    {gist.description || (
                      <span style={{ fontWeight: "bold" }}>no description</span>
                    )}
                  </h2>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <input
            placeholder="serarch"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {pendingByName ? (
            <h1>pending ...</h1>
          ) : (
            gistsByName.map((gist, index) => (
              <div key={index}>
                <h2>
                  {gist.description || (
                    <span style={{ fontWeight: "bold" }}>no description</span>
                  )}
                </h2>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
