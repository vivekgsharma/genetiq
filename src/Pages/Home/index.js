import "../../App.css";
import Hero from "../../Sections/Hero";

import Opener from "../../Sections/Opener";
import AnimatedCarousel from "../../Sections/AnimatedCarousel";
import Advantages from "../../Sections/Advantages";
import Facilities from "../../Sections/Facilities";
import Lab from "../../Sections/Lab";
import Partner from "../../Sections/Partner";

import Embark from "../../Sections/Embark";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdvanceImaging from "../../Sections/SlideShow/AdvanceImaging";
import VRGlasses from "../../Sections/SlideShow/VRGlasses";
import DigitalTwin from "../../Sections/SlideShow/DigitalTwin";

function Home() {
  return (
    <div className="App">
      <div id="hero" className="Hero-outter-container">
        <Hero />
      </div>
      <div id="about" className="oppener-outter-container">
        <Opener />
      </div>
      <div className="animatedCarousel-outter-container">
        <AnimatedCarousel />
      </div>

      <div id="Facilities" className="advantages-outter-container">
        <Facilities />
      </div>

      <div id="advantages" className="advantages-outter-container">
        <Advantages />
      </div>

      <div id="journey" className="slideShow-outter-container">
        <AdvanceImaging />
        <VRGlasses />
        <DigitalTwin />
      </div>
      <div className="lab-outter-container">
        <Lab />
      </div>
      <div id="partners" className="partners-outter-container">
        <Partner />
      </div>
      <div className="partners-outter-container">
        <Embark />
      </div>
    </div>
  );
}

export default Home;
