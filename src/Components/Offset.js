import React, { useState, useEffect } from "react";
import "./offset.css";

const Offset = props => {
  const [value, setValue] = useState(0);
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
    props.onSubmitInput(value);
  };

  return (
    <div id="offset__container">
      <form name="offset__form" onSubmit={handleSubmit}>
        <span className="number__wrapper">
          <input
            type="number"
            className="offset__input"
            name="offset__input"
            value={value}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </span>
        <input type="submit" className="btn" value="Offset" />
      </form>
    </div>
  );
};

export default Offset;
