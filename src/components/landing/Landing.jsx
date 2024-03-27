import React, { useEffect, useState } from "react";
import "./landing.css";
function Landing() {
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
    <img
      src="/tempLanding.webp"
      alt="Pest Control Image"
      className="landing-img"
      onLoad={handleImgSize}
      height={imgSize.height}
      width={imgSize.width}
    />
  );
}

export default Landing;
