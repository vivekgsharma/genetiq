import "./App.css";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/NavBar";
import Opener from "./Sections/Opener";
import AnimatedCarousel from "./Sections/AnimatedCarousel";
import Advantages from "./Sections/Advantages";
import Facilities from "./Sections/Facilities";
import Lab from "./Sections/Lab";
import Partner from "./Sections/Partner";
import GeneticFooter from "./Sections/genneticFooter";
import Bottombar from "./Sections/bottomfotter";
import Embark from "./Sections/Embark";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdvanceImaging from "./Sections/SlideShow/AdvanceImaging";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Hero-outter-container">
          <Hero />
        </div>
        <div id="about" className="oppener-outter-container">
          <Opener />
        </div>
        <div className="animatedCarousel-outter-container">
          <AnimatedCarousel />
        </div>
        <div className="advantages-outter-container">
          <Advantages />
        </div>
        <div id="Facilities" className="advantages-outter-container">
          <Facilities />
        </div>

        <div className="slideShow-outter-container">
          <AdvanceImaging />
        </div>
        <div className="lab-outter-container">
          <Lab />
        </div>
        <div id="partners" className="partners-outter-container">
          <Partner />
        </div>
        <div id="journey" className="partners-outter-container">
          <Embark />
        </div>
        <div className="footer-outter-container">
          <GeneticFooter />
          <Bottombar />
        </div>
      </div>
    </Router>
  );
}

export default App;
