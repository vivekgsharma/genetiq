import { useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView,
} from "framer-motion";
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

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.99, 1],
    [1, 1, 1, 0]
  );

  return (
    <div className="enter-genetiq-container" ref={targetRef}>
      <div className="enter-genetiq-innerContainer">
        <motion.div className="gentiq-Text" style={{ opacity: opacity }}>
          Enter GenetiQ
        </motion.div>
        <motion.div className="gentix-continer-track" style={{ x }}>
          <div className="genetiq-item-container">
            <h1>Personalized Healthcare Solutions</h1>
            <p>
              Personalized healthcare with advanced diagnostics and treatments,
              emphasizing longevity and precision medicine, tailored to each
              individual's unique health journey.
            </p>
            <img src={pills} alt={pills} />
          </div>

          <div className="genetiq-item-container">
            <h1>Digital Twin</h1>
            <p>
              At the core of GenetiQ's healthcare approach, the digital twin
              integrates genetic and real-time biometric data to customize
              treatments for optimal health outcomes.
            </p>
            <img src={twin} alt={twin} />
          </div>
          <motion.div className="genetiq-item-container">
            <h1>Data Storage and Security</h1>
            <p>
              GenetiQ employs advanced encryption protocols to protect sensitive
              health data, ensuring privacy and compliance with industry
              standards, allowing patients to focus on their health with peace
              of mind.
            </p>
            <img src={machine} alt={machine} />
          </motion.div>
          <motion.div className="genetiq-item-container">
            <h1>Healthcare Interface</h1>
            <p>
              With GenetiQ, you have the flexibility to monitor your health from
              the comfort of your own home, without compromising on accuracy or
              quality.
            </p>
            <img src={test} alt={pills} />
          </motion.div>
          <motion.div className="genetiq-item-container">
            <h1>Healthcare Interface</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={hearth} alt={hearth} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default AnimatedCarousel;
