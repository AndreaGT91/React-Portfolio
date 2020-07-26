import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';

const pathArray = window.location.pathname.split("/");
let basePath = "";

if (pathArray.length > 0) {
  pathArray.pop();
  basePath = pathArray.join("/");
};

console.log(basePath);

ReactDOM.render(<App baseName={basePath} />, document.getElementById("root"));