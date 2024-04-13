import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Sections/NavBar";
import GeneticFooter from "./Sections/genneticFooter";
import Bottombar from "./Sections/bottomfotter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WaitlistPage from "./Pages/Waitlist";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
        <div id="contact" className="footer-outter-container">
          <GeneticFooter />
          <Bottombar />
        </div>
      </div>
    </Router>
  );
}

export default App;
