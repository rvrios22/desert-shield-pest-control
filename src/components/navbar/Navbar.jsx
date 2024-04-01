import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import NavbarLinks from "../navbar-links/NavbarLinks";
import MobileLinks from "../mobile-links/MobileLinks";

function Navbar({ landingImgRef }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayHamburger, setDisplayHamburger] = useState(true);
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

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.scrollY;

    window.scroll({
      top: elementTop,
      behavior: "smooth",
    });
  };

  return (
    <header ref={headerRef}>
      {displayHamburger ? (
        <MobileLinks handleScroll={handleScroll} />
      ) : (
        <NavbarLinks handleScroll={handleScroll} />
      )}
    </header>
  );
}

export default Navbar;
