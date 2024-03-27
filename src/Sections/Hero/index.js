import React, { useEffect } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import image from "../../Assets/lifesaver.jpg";
import "./styles.scss";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    useScroll({
      target: ref,
      offset: ["end end", "start start"],
    })
  );

  // Use the useTransform hook to map the scroll progress to opacity values
  // This example maps the scroll progress from 0 (top) to 1 (bottom) to opacity from 1 to 0
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="hero-container">
      <motion.div ref={ref} style={{ opacity }} className="image-full-wrapper">
        <img src={image} alt="lifeasaver" />
      </motion.div>
    </div>
  );
}
export default Hero;
