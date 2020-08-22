import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      <div>
        <Nav />
        <Switch>
          <Route exact path="/About"><About /></Route>
          <Route exact path="/Portfolio"><Portfolio /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route exact path="/"><About /></Route>
          <Route path="/*"><About /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;