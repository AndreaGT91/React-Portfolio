import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const pathArray = window.location.pathname.split("/");
  let basePath = "";

  if (pathArray.length > 0) {
    pathArray.pop();
    basePath = pathArray.join("/");
  };

  const [pathState] = useState(basePath);

  return (
    <Router basename={pathState}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/About"><About /></Route>
          <Route exact path="/Portfolio"><Portfolio /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route path="/*"><About /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;