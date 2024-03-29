import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        This site was developed and mainted by{" "}
        <a href="http://riosdev.com" target="_blank" rel="noopener noreferrer">
          riosdev.com
        </a>{" "}
        | Favicon was provided by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          icons8.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
