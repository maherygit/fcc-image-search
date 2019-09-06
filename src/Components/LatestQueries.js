import React, { useState, useEffect } from "react";
import "./latestQueries.css";
import QueryItem from "./QueryItem";
import Loader from "./Loader";

const LatestQueries = props => {
  const urlQuery = `https://witty-dry.glitch.me/history`;
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLatestQueries();
  }, []);

  async function getLatestQueries() {
    try {
      setLoading(true);
      const resJson = await fetch(urlQuery);
      const results = await resJson.json();
      setHistory(results);
      console.log(results);
      setLoading(false);
    } catch (err) {
      console.error("failed to get history ", err);
      setLoading(false);
    }
  }

  async function HandleClearHistory() {
    try {
      const resJson = await fetch(urlQuery, { method: "delete" });
      const results = await resJson.json();
      console.log("clear history results", results);
      if (results.status === "ok") {
        setHistory([]);
      } else {
        console.error("error while clearing history");
      }
    } catch (err) {
      console.error("failed to clear history ", err);
    }
  }

  function handleSelectItem(e) {
    const itemName = e.target.getAttribute("data-name") || "";
    const itemOffset = e.target.getAttribute("data-offset") || "";
    //console.log("***", itemName, itemOffset);
    props.onSelectItem(itemName, itemOffset);
  }

  return (
    <div id="history__container">
      <span>
        <div id="history__title">Search history</div>
        <div id="history__clear" className="btn" onClick={HandleClearHistory}>
          Clear
        </div>
      </span>
      {loading ? (
        <Loader />
      ) : (
        <ul className="history__list" onClick={handleSelectItem}>
          {history.map((elt, i) => (
            <QueryItem item={elt} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default LatestQueries;
