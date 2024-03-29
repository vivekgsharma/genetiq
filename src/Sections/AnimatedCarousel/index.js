import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import pills from "../../Assets/caro-a.png";
import twin from "../../Assets/caro-b.png";
import machine from "../../Assets/caro-c.png";
import test from "../../Assets/caro-d.png";
import hearth from "../../Assets/caro-e.png";

import "./styles.scss";

function AnimatedCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-43%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="enter-genetiq-container" ref={targetRef}>
      <div className="enter-genetiq-innerContainer">
        <motion.div className="gentiq-Text" style={{ opacity: opacity }}>
          Enter GenetiQ
        </motion.div>
        <motion.div
          className="gentix-continer-track"
          style={{ x, opacity: opacity }}
        >
          <div className="genetiq-item-container">
            <h1>Personalized Treatments</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine
            </p>
            <img src={pills} alt={pills} />
          </div>

          <div className="genetiq-item-container">
            <h1>Digital Twin</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={twin} alt={twin} />
          </div>
          <div className="genetiq-item-container">
            <h1>Gene Sequencing</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={machine} alt={machine} />
          </div>
          <div className="genetiq-item-container">
            <h1>Home Testing</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={test} alt={pills} />
          </div>
          <div className="genetiq-item-container">
            <h1>Healthcare Interface</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={hearth} alt={hearth} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default AnimatedCarousel;
