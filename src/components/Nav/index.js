import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Nav() {
  return (
    <>
      <div className="navbar-fixed">
        <nav className="light-blue darken-4 nav">
          <div className="nav-wrapper">
            <Link to="/About" className="brand-logo left">Andrea Bentley</Link>
            <a href="#top" data-target="mobile-demo" className="sidenav-trigger right">
              <i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li className="li" id="main-about"><Link to="/About">About</Link></li>
              <li className="li"><Link to="/Portfolio">Portfolio</Link></li>
              <li className="li"><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav sidenav-close" id="mobile-demo">
        <li className="li" id="side-about"><Link to="/About">About</Link></li>
        <li className="li"><Link to="/Portfolio">Portfolio</Link></li>
        <li className="li"><Link to="/Contact">Contact</Link></li>
      </ul>
    </>
  );
};

export default Nav;

