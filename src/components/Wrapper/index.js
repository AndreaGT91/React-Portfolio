import React from "react";
import "./style.css";

function Wrapper(props) {
  const wrapperHeight = window.innerHeight - 64 - 50; // Full size, minus nav and footer
  return <div className="wrapper" style={{ height: wrapperHeight }}>{props.children}</div>;
}

export default Wrapper;