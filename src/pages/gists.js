import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../store/gists";

export const GistsPage = () => {
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
  const { gists, error, pending } = useSelector((state) => state.gists);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        <h1>error !!!!</h1>
      </div>
    );
  }

  if (pending) {
    return (
      <div>
        <h1>isLoading ....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Gists page</h1>
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
  );
};
