import React, { useState } from "react";
import "./mobileLinks.css";

function MobileLinks({ handleScroll }) {
  const [isMobileOverlayShowing, setIsMoibleOverlayShowing] = useState(false);

  const handleShowing = () => {
    setIsMoibleOverlayShowing(!isMobileOverlayShowing);
  };
  return (
    <>
      <a href="#landing">
        <h1>DSPC</h1>
      </a>
      <div className="navbar-hamburger" onClick={handleShowing}>
        <img src="hamburger.svg" alt="menu icon" width="30" />
      </div>
      <div className={ isMobileOverlayShowing ? "mobile-nav-overlay show" : "mobile-nav-overlay"}>
        <div className="close-icon" onClick={handleShowing}>
          <img
            width={30}
            height={30}
            src="/icons8-close-90.png"
            alt="close icon"
          />
        </div>
        <div>
          <a
            onClick={() => {
              handleScroll("about-me");
              handleShowing();
            }}
          >
            About Me
          </a>
        </div>
        <div>
          <a onClick={handleShowing} href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileLinks;
