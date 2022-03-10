import React from "react";
import "../css/gifGridItem.css";

export const GifGridItem = (props) => {
  const { id, title, url } = props.img;

  return (
    <div className="boxGif">
      <img src={url} alt={title}></img>
    </div>
  );
};
