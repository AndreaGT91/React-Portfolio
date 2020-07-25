import React from "react";
import "./style.css";

function Anchor({ htmlRef, children }) {
  return <a href={htmlRef} className="anchor" target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default Anchor;