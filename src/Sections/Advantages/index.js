import { useEffect, useState } from "react";

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
  const [currentImage, setCurrentImage] = useState(Gentimacineb);
  const [angle, setAngle] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Biotune-Gentic-Advantage">
      {/* <div>
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
      </div> */}
      <div className="gentic-advan-heading">GenetiQ Advantages</div>

      {windowWidth < 768 ? (
        <div className="right-gentic-item-box">
          <motion.div
            className="left-gentic-item-box"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, velocity: 2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Gentimacineb}
              alt={currentImage}
              style={{ width: "80%", height: "auto" }}
            />
          </motion.div>
          <div className="right-gentic-item-content">
            <div className="gentic-item-inner">
              <div className="heading-item2">
                Quality Testing Made Affordable
              </div>
              <div className="para-item">
                Most advanced genomic sequencing and blood tests at unbeatable
                prices thanks to partnerships with leading diagnostic firms.
              </div>
            </div>
          </div>
          <motion.div
            className="left-gentic-item-box"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, velocity: 2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Gentimacinec}
              alt={currentImage}
              style={{ width: "80%", height: "auto" }}
            />
          </motion.div>
          <div className="right-gentic-item-content">
            <div className="gentic-item-inner">
              <div className="heading-item2">Discover Your Health Journey</div>
              <div className="para-item">
                Accessed through web, app, and VR, users get detailed analysis
                and tailored recommendations for better health.
              </div>
            </div>
          </div>
          <motion.div
            className="left-gentic-item-box"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, velocity: 2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Gentimacined}
              alt={currentImage}
              style={{ width: "80%", height: "auto" }}
            />
          </motion.div>
          <div className="right-gentic-item-content">
            <div className="gentic-item-inner">
              <div className="heading-item2">
                Longevity & Personalized Supplements{" "}
              </div>
              <div className="para-item">
                Personalized healthcare for longevity and precision medicine,
                merging advanced diagnostics with innovative treatments.
              </div>
            </div>
          </div>
          <motion.div
            className="left-gentic-item-box"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, velocity: 2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Gentimacine}
              alt={currentImage}
              style={{ width: "80%", height: "auto" }}
            />
          </motion.div>
          <div className="right-gentic-item-content">
            <div className="gentic-item-inner">
              <div className="heading-item2">Data Storage and Security</div>
              <div className="para-item">
                Our advanced encryption protocols safeguard your information
                during collection, transmission, and storage, meeting
                industry-leading standards to ensure your privacy and peace of
                mind as you prioritize your health and well-being.
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                  setImage(Gentimacineb);
                  rotateImage();
                }}
              >
                <div className="heading-item2">
                  Quality Testing Made Affordable
                </div>
                <div className="para-item">
                  Most advanced genomic sequencing and blood tests at unbeatable
                  prices thanks to partnerships with leading diagnostic firms.
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
                  Discover Your Health Journey
                </div>
                <div className="para-item">
                  Accessed through web, app, and VR, users get detailed analysis
                  and tailored recommendations for better health.
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
                  Longevity & Personalized Supplements{" "}
                </div>
                <div className="para-item">
                  Personalized healthcare for longevity and precision medicine,
                  merging advanced diagnostics with innovative treatments.
                </div>
              </div>
            </div>
            <div className="right-gentic-item-content">
              <div
                className="gentic-item-inner"
                onMouseEnter={() => {
                  setImage(Gentimacine);
                  rotateImage();
                }}
              >
                <div className="heading-item2">Data Storage and Security</div>
                <div className="para-item">
                  Our advanced encryption protocols safeguard your information
                  during collection, transmission, and storage, meeting
                  industry-leading standards to ensure your privacy and peace of
                  mind as you prioritize your health and well-being.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Advantages;
