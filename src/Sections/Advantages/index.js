import { useState } from "react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import Gentimacine from "../../Assets/genticmachine.png";
import Gentimacineb from "../../Assets/gadvb.png";
import Gentimacinec from "../../Assets/gadvc.png";
import Gentimacined from "../../Assets/gadvd.png";
import bg from "../../Assets/radialbg.png";
import bgMask from "../../Assets/radialbgMask.png";
import "./styles.scss";

function Advantages() {
  const [currentImage, setCurrentImage] = useState(Gentimacine);
  const [angle, setAngle] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once
    threshold: 0.5, // The component will trigger the animation when 50% of it is in view
  });

  function setImage(Asset) {
    setCurrentImage(Asset);
  }
  const rotateImage = () => {
    setAngle((prevAngle) => prevAngle + 70); // Rotate 90 degrees on each click
  };

  return (
    <div className="Biotune-Gentic-Advantage">
      <div>
        <img
          className="genetiq-animated-bg-mask"
          src={bgMask}
          alt="background"
        />

        <motion.img
          style={{
            // Explicitly set the transform origin to the center
            transformOrigin: "center",
          }}
          animate={{ rotate: angle }}
          transition={{ type: "spring", stiffness: 50, duration: 5 }}
          className="genetiq-animated-bg"
          src={bg}
          alt="background"
        />
      </div>
      <div className="gentic-advan-heading">GenetiQ Advantages</div>
      <div className="gentic-conatiner">
        <motion.div
          className="left-gentic-item-box"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, velocity: 2 }}
        >
          <img src={currentImage} alt={currentImage} />
        </motion.div>
        <div className="right-gentic-item-box">
          <div className="right-gentic-item-content">
            <div
              className="gentic-item-inner"
              onMouseEnter={() => {
                setImage(Gentimacine);
                rotateImage();
              }}
            >
              <div className="heading-item2">GenetiQ Sequencing Test</div>
              <div className="para-item">
                Order and manage GenetiQ sequencing tests seamlessly from
                Health+plus Ancestry or GenetiQ+plus Premium services.
              </div>
            </div>
          </div>
          <div className="right-gentic-item-content">
            <div
              className="gentic-item-inner"
              onMouseEnter={() => {
                setImage(Gentimacineb);
                rotateImage();
              }}
            >
              <div className="heading-item2">
                User-Friendly DNA Sample Collection
              </div>
              <div className="para-item">
                Easy-to-follow at home saliva collection with express shipping
                options. CLIA-certified and CAP-accredited labs for sample
                processing.
              </div>
            </div>
          </div>
          <div className="right-gentic-item-content">
            <div
              className="gentic-item-inner"
              onMouseEnter={() => {
                setImage(Gentimacinec);
                rotateImage();
              }}
            >
              <div className="heading-item2">
                Scientific Validity and Rigorous Analysis
              </div>
              <div className="para-item">
                FDA-cleared DNA collection kit for reliable reports and
                genotyping on a well-established platform ensures accuracy.
                Reports developed by experts through a rigorous scientific
                process.
              </div>
            </div>
          </div>
          <div className="right-gentic-item-content">
            <div
              className="gentic-item-inner"
              onMouseEnter={() => {
                setImage(Gentimacined);
                rotateImage();
              }}
            >
              <div className="heading-item2">
                Comprehensive Application Features
              </div>
              <div className="para-item">
                Genetic testing, health reports, pharmacogenomics, fitness
                insights and more. Real-time updates on genetic discoveries and
                secure data storage.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
