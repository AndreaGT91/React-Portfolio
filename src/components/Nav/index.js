import React from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="light-blue darken-4 nav">
          <div className="nav-wrapper">
            <a href="/About" className="brand-logo left">Andrea Bentley</a>
            <a href="#top" data-target="mobile-demo" className="sidenav-trigger right">
              <i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li className="li" id="main-about"><a href="/About">About</a></li>
              <li className="li"><a href="/Portfolio">Portfolio</a></li>
              <li className="li"><a href="/Contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav sidenav-close" id="mobile-demo">
        <li className="li" id="side-about"><a href="/About">About</a></li>
        <li className="li"><a href="/Portfolio">Portfolio</a></li>
        <li className="li"><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Nav;

