import { useRef } from "react";
import "./App.css";
import { AboutMe, Contact, ContactInfo, Footer, Landing, Navbar } from "./componentExporter";

function App() {
  const landingImgRef = useRef(null);
  return (
    <>
      <Navbar landingImgRef={landingImgRef} />
      <Landing landingImgRef={landingImgRef} />
      <AboutMe />
      <Contact />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
