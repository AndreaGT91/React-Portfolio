import React from "react";
import "./style.css";

function Container(props) {
  return <div className="container my-container">{props.children}</div>;
}

export default Container;