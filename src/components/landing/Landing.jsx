import React, { useEffect, useState } from "react";
import "./landing.css";
function Landing({ landingImgRef }) {
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const handleImgSize = (e) => {
    setImgSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    const handleImgResize = () => {
      setImgSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleImgResize);

    return () => {
      window.removeEventListener("resize", handleImgResize);
    };
  }, []);

  return (
    <div id="landing" className="landing-container">
      <img
        src="/landing.jpg"
        alt="Pest Control Image"
        className="landing-img"
        onLoad={handleImgSize}
        ref={landingImgRef}
        height={imgSize.height}
        width={imgSize.width}
      />
      <div className="landing-text">
        <h1>Desert Shield Pest Control</h1>
        <p>Servicing the Whole Coachella Valley</p>
      </div>
      <p className="landing-est">
        Est. 2024
      </p>
    </div>
  );
}

export default Landing;
