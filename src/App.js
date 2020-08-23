import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/About"><About /></Route>
          <Route exact path="/Portfolio"><Portfolio /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route path="/*"><About /></Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;