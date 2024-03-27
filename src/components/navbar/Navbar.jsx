import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <header>
      <h1>Desert Shield Pest Control</h1>
      <div className="navbar-links">
        <a href="#about-me">About Me</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}

export default Navbar;
