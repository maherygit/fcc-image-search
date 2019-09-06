import React from "react";

const QueryItem = ({ item }) => {
  return (
    <li
      className="history__item"
      data-name={item.term}
      data-offset={item.offset}
    >
      <span style={{ pointerEvents: "none" }}>
        {item.term} (<i> offset : {item.offset}</i>)
      </span>
    </li>
  );
};

export default QueryItem;
