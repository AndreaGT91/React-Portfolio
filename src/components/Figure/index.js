import React from "react";
import "./style.css";

function Figure({ classes, children }) {
  return <figure className={"figure " + classes}>{children}</figure>;
}

export default Figure;