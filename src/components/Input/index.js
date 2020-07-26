import React from "react";
import "./style.css";

function Input({value, type, children}) {
  return <input disabled className="input" value={value} type={type}>{children}</input>;
}

export default Input;