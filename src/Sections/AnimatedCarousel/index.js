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

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-65%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.99, 1],
    [0, 1, 1, 0]
  );

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
          <div
            className="genetiq-item-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
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
          <motion.div
            className="genetiq-item-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.1, type: "spring", stiffness: 140 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h1>Gene Sequencing</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={machine} alt={machine} />
          </motion.div>
          <motion.div
            className="genetiq-item-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h1>Home Testing</h1>
            <p>
              Pioneer personalized healthcare solutions, integrating advanced
              diagnostics and innovative treatments for precision medicine.
            </p>
            <img src={test} alt={pills} />
          </motion.div>
          <motion.div
            className="genetiq-item-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
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
