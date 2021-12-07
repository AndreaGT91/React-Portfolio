import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/About"> element={<About />}</Route>
          <Route path="/Portfolio"> element={<Portfolio />}</Route>
          <Route path="/Contact"> element={<Contact />}</Route>
          <Route path="/*"> element={<About />}</Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;