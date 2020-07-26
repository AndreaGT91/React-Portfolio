import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App(baseName) {
  // For some reason, baseName comes through as object, not string
  console.log(baseName);
  return (
    <BrowserRouter basename={baseName.baseName}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route path="/*" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
