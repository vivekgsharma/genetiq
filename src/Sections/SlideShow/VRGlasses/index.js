import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import vision from "../../../Assets/appleVIsion.png";
import Meta from "../../../Assets/metaVision.png";

import "./styles.scss";

function VRGlasses() {
  const container = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.8],
    [1, 1, 1, 1]
  );

  const opacityb = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.9],
    [height * 0.05, height * -0.1]
  );

  const opacityc = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.9],
    [0, 0, 1, 0]
  );

  const yB = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [height * 0.9, height * -1]
  );

  const opacityd = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.9],
    [0, 0.1, 1, 0]
  );
  const yC = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    [height * 2, height * -1]
  );
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    console.log(scrollYProgress);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <motion.div
        className="VrGlasess-container "
        style={{ opacity: opacity }}
        ref={container}
        //  style={{ y }}
      >
        <div className="VrInner-container">
          <motion.div
            className="Vr-text-container"
            style={{ opacity: opacityb, translateY: y }}
            ref={container}
          >
            <h1>
              <span>GenetiQ:</span> GenetiQ's VR Health Hub
            </h1>
            <h2>Your Personal Vision</h2>
            <p>
              Compatible with Apple Vision Pro and Meta, GenetiQ seamlessly
              integrates genetics, blood diagnostics, and biometrics for
              personalized wellness.
            </p>
          </motion.div>
          <div className="Vr-image-container">
            <motion.img
              src={vision}
              style={{ opacity: opacityc, translateY: yB }}
            />
            <motion.img
              src={Meta}
              style={{ opacity: opacityd, translateY: yC }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default VRGlasses;
