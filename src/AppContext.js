import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [search, setSearch] = useState("");
  const [searchForced, setSearchForced] = useState("");
  const [offset, setOffset] = useState(0);
  const [offsetForced, setOffsetForced] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("use effect", search, offset);
    getImagesList(search, offset);
  }, [search, offset]);

  const getImagesList = async (_search, _offset = 0) => {
    if (!_search) return;
    setLoading(true);
    const url = `https://witty-dry.glitch.me/search?query=${_search}&offset=${_offset}`;
    try {
      const resJson = await fetch(url);
      const result = await resJson.json();

      console.log("data get");
      setImageList(result.data);
      console.log(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        searchForced,
        setSearchForced,
        offset,
        setOffset,
        offsetForced,
        setOffsetForced,
        imageList,
        setImageList,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
