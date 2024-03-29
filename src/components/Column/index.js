import React from "react";
import "./style.css";

function Column({ page, children }) {
  let classes = "col s12";

  if (page === "Portfolio") {
    classes = "col s12 m6 xl4 portfolio-div";
  }
  else if (page === "Contact") {
    classes = "input-field col s12 input";
  };

  return <div className={classes}>{children}</div>;
};

export default Column;