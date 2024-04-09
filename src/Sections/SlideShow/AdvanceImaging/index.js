import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import explorer from "../../../Assets/imageViewer.png";
import explorerMobile from "../../../Assets/advanceImageMobile.png";
import overlay from "../../../Assets/overlayModes.png";
import overlayb from "../../../Assets/overlayModes2.png";
import overlayc from "../../../Assets/overlayModes3.png";
import overlayd from "../../../Assets/overlayModes4.png";
import imgVideo from "../../../Assets/Explorer2.mp4";
import "./styles.scss";

function AdvanceImaging() {
  const container = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [advanceImagingPic, setAdvanceImagingPic] = useState("explorer");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0.5, 1, 1]);
  const opacityVideo = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.6, 0.7],
    [0, 0, 1, 1, 0]
  );

  const opacityb = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [0, 0, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0.2, 0.6], [0, height * -0.5]);

  const opacityc = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const yB = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [height * 0.5, height * -0.35]
  );

  const opacityd = useTransform(scrollYProgress, [0.3, 0.4, 0.8], [0, 0, 1]);
  const opacitye = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 0, 1]);
  const opacityf = useTransform(scrollYProgress, [0.3, 0.6, 0.8], [0, 0, 1]);
  const opacityg = useTransform(scrollYProgress, [0.3, 0.7, 0.8], [0, 0, 1]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className="advanceImaging-container"
        style={{ opacity: opacity }}
        ref={container}
        //  style={{ y }}
      >
        <div className="advanceImaging-innerContainer">
          <div className="vignette" />
          <motion.video
            playsInline
            autoPlay
            loop
            muted
            disableRemotePlayback
            style={{ opacity: opacityVideo }}
          >
            <source src={imgVideo} type="video/mp4" />
          </motion.video>
          <motion.div
            className="advanceImaging-text-container"
            ref={container}
            style={{ opacity: opacityb, translateY: y }}
          >
            <h1>
              <span>GenetiQ:</span> Personalized Health Journey
            </h1>
            <h2>Advance Imaging</h2>
            <p>
              A swift, 45-second full-body PET CT scan with Explorer technology,
              revealing insights beyond the surface.
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
        {windowWidth < 768 ? (
          <div className="advanceImaging-innerContainerb">
            <motion.div
              className="advanceImaging-img-wrapper"
              ref={container}
              style={{ opacity: opacityc, translateY: yB }}
            >
              <img src={explorerMobile} />
            </motion.div>
          </div>
        ) : (
          <div className="advanceImaging-innerContainerb">
            <motion.div
              className="advanceImaging-img-wrapper"
              ref={container}
              style={{ opacity: opacityc, translateY: yB }}
            >
              <img src={explorer} />
              <motion.img
                src={overlay}
                className="image-overlayMode"
                style={{ opacity: opacityd }}
              />
              <motion.img
                src={overlayb}
                className="image-overlayMode"
                style={{ opacity: opacitye }}
              />
              <motion.img
                src={overlayc}
                className="image-overlayMode"
                style={{ opacity: opacityf }}
              />
              <motion.img
                src={overlayd}
                className="image-overlayMode"
                style={{ opacity: opacityg }}
              />
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
}
export default AdvanceImaging;
