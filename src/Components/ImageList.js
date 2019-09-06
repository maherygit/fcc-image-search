import React from "react";
import Image from "./Image";

const ImageList = props => {
  if (props.imageList === undefined) {
    return <div style={{ color: "red" }}> Error getting the image list </div>;
  }
  return (
    <div id="imageList__container">
      {props.imageList.map((elt, i) => (
        <Image image={elt} key={i} />
      ))}
    </div>
  );
};

export default ImageList;
