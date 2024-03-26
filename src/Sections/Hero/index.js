import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import video from "../../Assets/lifeSaver.mov";
import logo from "../../Assets/logo.svg";
import "./styles.scss";

function Hero() {
  return (
    <div className="hero-container">
      {/* <div className="hero-logo-wrapper">
        <img src={logo} />
      </div> */}
      <motion.video autoPlay loop muted className="video-full-wrapper">
        <source src={video} />
      </motion.video>
    </div>
  );
}
export default Hero;
