import React from "react";
import "./style.css";

function Header1(props) {
  return <h1 className="light-blue-text text-darken-4 my-h1">{props.children}</h1>;
}

export default Header1;