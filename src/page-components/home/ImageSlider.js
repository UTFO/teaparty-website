import React from "react";
import "./imageSlider.css";

const ImageSlider = (props) => {
  return (
    <div className="image-gallery">
      <div className="image-area">
        <img className="internal-image" src={props.data["image"]}></img>
      </div>
      <div className="image-text-area">
        <h1>{props.data["header"]}</h1>
        <p>{props.data["txt"]}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
