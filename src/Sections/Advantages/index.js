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
              <div className="heading-item2">Home Testing</div>
              <div className="para-item">
                Choose from our easy-to-follow home testing kits or opt for our
                highly skilled nurses to provide in-home diagnostic services.
                With GenetiQ, you have the flexibility to monitor your health
                from the comfort of your own home, without compromising on
                accuracy or quality.
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
              <div className="heading-item2">Genome Scanning</div>
              <div className="para-item">
                At the heart of GenetiQ's personalized healthcare solution is
                the GenetiQ digital twin. This digital twin serves as a dynamic
                model of your health, incorporating your genetic makeup and
                real-time biometric data. By continuously updating and analyzing
                this information, we can tailor treatments and interventions to
                your specific needs, ensuring optimal health outcomes.
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
              <div className="heading-item2">Healthcare Platform</div>
              <div className="para-item">
                At the heart of GenetiQ's personalized healthcare solution is
                the GenetiQ digital twin. This digital twin serves as a dynamic
                model of your health, incorporating your genetic makeup and
                real-time biometric data. By continuously updating and analyzing
                this information, we can tailor treatments and interventions to
                your specific needs, ensuring optimal health outcomes.
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
                Longevity & Personalized supplements
              </div>
              <div className="para-item">
                GenetiQ pioneers personalized healthcare solutions aimed at
                enhancing longevity and precision medicine by integrating
                advanced diagnostics with innovative treatments. Our
                comprehensive range of solutions, from cutting-edge diagnostics
                to personalized supplement regimens, prioritizes your
                well-being, recognizing that every individual's health journey
                is unique.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
