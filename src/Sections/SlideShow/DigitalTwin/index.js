import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import explorer from "../../../Assets/DigitalTwin.png";
import twinVideo from "../../../Assets/genetiQ-Video1080.mp4";
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

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const y = useTransform(scrollYProgress, [0.1, 0.6], [0, height * -0.5]);
  const yB = useTransform(
    scrollYProgress,
    [0.3, 0.7, 0.9, 1],
    [0, height * -0.6, height * -0.7, height * -1]
  );

  const yC = useTransform(
    scrollYProgress,
    [0.5, 0.5, 0.9, 1],
    [0, height * -0.9, height * -0.8, height * -1]
  );

  const opacityc = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0, 0, 1, 1]
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
          <div className="twin-videoWrapper">
            <motion.video
              autoPlay
              loop
              muted
              src={imgVideo}
              style={{ opacity: opacityVideo }}
            >
              <source src />
            </motion.video>
          </div>
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
        <div className="twin-innerContainerb">
          <motion.div
            className="advanceImaging-text-container"
            ref={container}
            style={{ translateY: yB, opacity: opacityc }}
          >
            <h1>
              <span>GenetiQ:</span> Personalized Health Journey
            </h1>
            <h2>GenetiQ's VR Health Hub</h2>
            <p>
              Compatible with Apple Vision Pro and Meta, seamlessly integrates
              genetics, blood diagnostics, and biometrics for personalized
              wellness. It offers tailored guidance, doctor consultation, and
              immersive education to optimize your health journey.
            </p>
          </motion.div>
          <motion.video
            autoPlay
            loop
            muted
            disableRemotePlayback
            style={{ translateY: yB, opacity: opacityc }}
          >
            <source src={twinVideo} type="video/mp4" />
          </motion.video>
        </div>
      </motion.div>
    </>
  );
}
export default DigitalTwin;
