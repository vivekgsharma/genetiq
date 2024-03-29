import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import explorer from "../../../Assets/DigitalTwin.png";

import imgVideo from "../../../Assets/clinic-video.mp4";
import "./styles.scss";

function DigitalTwin() {
  const container = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const opacity = useTransform(scrollYProgress, [0, 0.85, 0.94], [1, 1, 0]);
  const opacityVideo = useTransform(
    scrollYProgress,
    [0, 0.5, 1, 1],
    [0, 0.5, 1, 0]
  );
  const opacityb = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.6],
    [0, 0, 1, 0]
  );
  const opacityc = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 0.9],
    [0, 0.3, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0.1, 0.6], [0, height * -0.5]);
  const yB = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    [height * 0.5, height * -0.55]
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
        className="digitalTwin-container"
        style={{ opacity: opacity }}
        ref={container}
        //  style={{ y }}
      >
        <div className="digitalTwin-innerContainer">
          <motion.video
            autoPlay
            loop
            muted
            src={imgVideo}
            style={{ opacity: opacityVideo }}
          >
            <source src />
          </motion.video>

          <motion.div
            className="advanceImaging-text-container"
            ref={container}
            style={{ opacity: opacityb, translateY: y }}
          >
            <h1>
              <span>GenetiQ:</span> Personalized Health Journey
            </h1>
            <h2>Dashboard for the Twin</h2>
            <p>
              With a consultation from our expert doctors. Together, we create
              your digital twin, unveiling a tailored lifestyle plan.
            </p>
          </motion.div>
          {/* <motion.div
            className="advanceImaging-img-wrapper"
            ref={container}
            style={{ opacity: opacityc, translateY: y3 }}
          >
            <img src={explorer} />
          </motion.div> */}
        </div>
        <div className="advanceImaging-innerContainerb">
          <motion.div
            className="advanceImaging-img-wrapper"
            ref={container}
            style={{ opacity: opacityc, translateY: yB, scale: scale }}
          >
            <img src={explorer} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
export default DigitalTwin;
