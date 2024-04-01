import React from "react";
import "./navbarLinks.css";

function NavbarLinks({ handleScroll }) {
  return (
    <>
      <a href="#landing">
        <h1>DSPC</h1>
      </a>
      <div className="navbar-links">
        <a onClick={() => handleScroll("about-me")}>About Me</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}

export default NavbarLinks;
