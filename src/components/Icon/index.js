import React from "react";
import "./style.css";

function Icon({classes, size, children}) {
  const sizeClass = "icon" + size;
  return <i className={classes + " prefix " + sizeClass}>{children}</i>;
}

export default Icon;