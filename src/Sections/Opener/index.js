import React from "react";
import "./styles.scss";
import { useInView } from "react-intersection-observer";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import logo from "../../Assets/ellipse.svg";
import circle from "../../Assets/half-cut-circular.svg";
import bg from "../../Assets/gentiq-app.png";

function Opener() {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once
    threshold: 0.5, // The component will trigger the animation when 50% of it is in view
  });

  return (
    <div className="opener-container">
      <motion.div>
        <motion.div
          ref={ref}
          className="opener-tittlea-container"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, velocity: 2.5 }}
        >
          <img src={logo} alt="genetiq" />
          <h1>Revolutionizing Personalized Healthcare</h1>
        </motion.div>
        <motion.div
          ref={ref}
          className="opener-tittleb-container"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, velocity: 2.5 }}
        >
          <h1>Discover Your Path to Optimal Wellbeing</h1>
          <img src={circle} alt="genetiq" />
        </motion.div>
      </motion.div>

      <img src={bg} alt="bg-app" />
    </div>
  );
}
export default Opener;
