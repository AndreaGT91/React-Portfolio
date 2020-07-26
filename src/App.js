import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

  console.log("Path: " + pathState);

  useEffect(() => {
    console.log("Path (useEffect): " + pathState);
  }, [pathState]);

  return (
    <BrowserRouter basename={pathState}>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/About"><About /></Route>
          <Route exact path="/Portfolio"><Portfolio /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route path="/*"><About /></Route> */}
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route path="/*" component={About} />
          {/* <Route exact path="/About" render={() => <About />} />
          <Route exact path="/Portfolio" render={() => <Portfolio />} />
          <Route exact path="/Contact" render={() => <Contact />} />
          <Route path="/*" render={() => <About />} /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
