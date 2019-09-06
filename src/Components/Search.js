import React, { useState, useEffect } from "react";
import "./search.css";

const Search = props => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (props.forcedValue) {
      setValue(props.forcedValue);
    }
  }, [props.forcedValue]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let submitedSearch = value;
    props.onSubmitInput(submitedSearch);
    //setValue("");
    e.target.blur();
  };

  return (
    <div id="search__container">
      <form name="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          name="search__input"
          value={value}
          onChange={handleChange}
          placeholder=" "
        />
        <label className="input__label" htmlFor="search__input">
          Search images
        </label>
        <input id="submit__btn" type="submit" className="btn" value=">>" />
      </form>
    </div>
  );
};

export default Search;
