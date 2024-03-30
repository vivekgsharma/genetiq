import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import pills from "../../Assets/Pills.mp4";
import twin from "../../Assets/Twin.mp4";
import machine from "../../Assets/Sequence.mp4";
import test from "../../Assets/DNA.mp4";
import hearth from "../../Assets/Heart.mp4";

import "./styles.scss";

function AnimatedCarousel() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="enter-genetiq-container">
      <div className="enter-genetiq-innerContainer">
        <motion.div className="gentiq-Text">Enter GenetiQ</motion.div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{ display: "flex", gap: "10px" }}
            className={`gentix-continer-track ${isAnimating ? "animate" : ""}`}
          >
            <div className="genetiq-item-container">
              <h1>Next-Generation Healthcare</h1>
              <p>
                Explore advanced diagnosis and treatment technology, powered by
                Genetiq's state-of-the-art equipment
              </p>
              <video loop muted>
                <source src={pills} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Personalized Healthcare Solutions: </h1>
              <p>
                Individualized wellness is achieved through the fusion of
                cutting-edge blood and genome sequencing, enabling the creation
                of custom-tailored supplement regimens.
              </p>
              <video playsInline loop muted>
                <source src={machine} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Digital Twin</h1>
              <p>
                At the core of GenetiQ's healthcare approach, the digital twin
                integrates genetic and real-time biometric data to customize
                treatments for optimal health outcomes.
              </p>
              <video playsInline loop muted>
                <source src={twin} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Home Testing</h1>
              <p>
                GenetiQ offers convenient home testing kits or in-home
                diagnostic services by skilled nurses, ensuring accurate and
                comfortable monitoring of health from your own home.
              </p>
              <video playsInline loop muted>
                <source src={test} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Healthcare Solutions</h1>
              <p>
                GenetiQ is a platform offering personalized drugs and custom
                supplements tailored to individuals' unique genomic profiles.
              </p>
              <video playsInline loop muted style={{ paddingBottom: "-48px" }}>
                <source src={hearth} type="video/mp4" />
              </video>
            </div>
          </div>
          <div
            style={{ display: "flex", gap: "10px" }}
            className={`gentix-continer-track ${isAnimating ? "animate" : ""}`}
          >
            <div className="genetiq-item-container">
              <h1>Next-Generation Healthcare</h1>
              <p>
                Explore advanced diagnosis and treatment technology, powered by
                Genetiq's state-of-the-art equipment
              </p>
              <video loop muted>
                <source src={pills} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Personalized Healthcare Solutions: </h1>
              <p>
                Individualized wellness is achieved through the fusion of
                cutting-edge blood and genome sequencing, enabling the creation
                of custom-tailored supplement regimens.
              </p>
              <video playsInline loop muted>
                <source src={machine} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Digital Twin</h1>
              <p>
                At the core of GenetiQ's healthcare approach, the digital twin
                integrates genetic and real-time biometric data to customize
                treatments for optimal health outcomes.
              </p>
              <video playsInline loop muted>
                <source src={twin} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Home Testing</h1>
              <p>
                GenetiQ offers convenient home testing kits or in-home
                diagnostic services by skilled nurses, ensuring accurate and
                comfortable monitoring of health from your own home.
              </p>
              <video playsInline loop muted>
                <source src={test} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Healthcare Solutions</h1>
              <p>
                GenetiQ is a platform offering personalized drugs and custom
                supplements tailored to individuals' unique genomic profiles.
              </p>
              <video playsInline loop muted style={{ paddingBottom: "-48px" }}>
                <source src={hearth} type="video/mp4" />
              </video>
            </div>
          </div>
          <div
            style={{ display: "flex", gap: "10px" }}
            className={`gentix-continer-track ${isAnimating ? "animate" : ""}`}
          >
            <div className="genetiq-item-container">
              <h1>Next-Generation Healthcare</h1>
              <p>
                Explore advanced diagnosis and treatment technology, powered by
                Genetiq's state-of-the-art equipment
              </p>
              <video loop muted>
                <source src={pills} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Personalized Healthcare Solutions: </h1>
              <p>
                Individualized wellness is achieved through the fusion of
                cutting-edge blood and genome sequencing, enabling the creation
                of custom-tailored supplement regimens.
              </p>
              <video playsInline loop muted>
                <source src={machine} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Digital Twin</h1>
              <p>
                At the core of GenetiQ's healthcare approach, the digital twin
                integrates genetic and real-time biometric data to customize
                treatments for optimal health outcomes.
              </p>
              <video playsInline loop muted>
                <source src={twin} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Home Testing</h1>
              <p>
                GenetiQ offers convenient home testing kits or in-home
                diagnostic services by skilled nurses, ensuring accurate and
                comfortable monitoring of health from your own home.
              </p>
              <video playsInline loop muted>
                <source src={test} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <h1>Healthcare Solutions</h1>
              <p>
                GenetiQ is a platform offering personalized drugs and custom
                supplements tailored to individuals' unique genomic profiles.
              </p>
              <video playsInline loop muted style={{ paddingBottom: "-48px" }}>
                <source src={hearth} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnimatedCarousel;
