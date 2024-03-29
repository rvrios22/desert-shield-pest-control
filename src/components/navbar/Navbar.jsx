import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
function Navbar({ landingImgRef }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayHamburger, setDisplayHamburger] = useState(true);
  const [headerBackground, setHeaderBackground] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 600) {
      setDisplayHamburger(false);
    } else {
      setDisplayHamburger(true);
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (!entry.isIntersecting) {
          headerRef.current.classList.add("header-background");
        } else {
          headerRef.current.classList.remove("header-background");
        }
      }, options);
    });
    observer.observe(landingImgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <header ref={headerRef}>
      <a href="#landing">
        <h1>DSPC</h1>
      </a>
      {displayHamburger ? (
        <div className="navbar-hamburger">
          <img src="hamburger.svg" alt="menu icon" width="30" />
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
