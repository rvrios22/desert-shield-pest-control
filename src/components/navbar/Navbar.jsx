import React, { useEffect, useState } from "react";
import "./navbar.css";
function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayHamburger, setDisplayHamburger] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 600) {
      setDisplayHamburger(false);
    } else {
      setDisplayHamburger(true)
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <header>
      <h1>DSPC</h1>
      {displayHamburger ? (
        <div className="navbar-hamburger">
          <img src="hamburger.svg" alt="menu icon" width='30' />
        </div>
      ) : (
        <div className="navbar-links">
          <a href="#about-me">About Me</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
