import logo from "./logo.svg";
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
import Slideshow from "./Sections/SlideShow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Hero-outter-container">
        <Hero />
      </div>
      <div className="oppener-outter-container">
        <Opener />
      </div>
      <div className="animatedCarousel-outter-container">
        <AnimatedCarousel />
      </div>
      <div className="advantages-outter-container">
        <Advantages />
      </div>
      <div className="advantages-outter-container">
        <Facilities />
      </div>
      <div className="lab-outter-container">
        <Lab />
      </div>
      <Slideshow />
      <div className="partners-outter-container">
        <Partner />
      </div>
      <div className="partners-outter-container">
        <Embark />
      </div>
      <div className="footer-outter-container">
        <GeneticFooter />
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
