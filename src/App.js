import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/About" render={()=> <About />} />
          <Route exact path="/Portfolio" render={()=> <Portfolio />} />
          <Route exact path="/Contact" render={()=> <Contact />} />
          <Route path="/*" render={()=> <About />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
