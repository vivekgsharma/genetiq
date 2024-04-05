import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { useMotionValue, animate, motion } from "framer-motion";
import pills from "../../Assets/Pills.mp4";
import twin from "../../Assets/Twin.mp4";
import machine from "../../Assets/Sequence.mp4";
import test from "../../Assets/DNA.mp4";
import hearth from "../../Assets/Heart.mp4";

import "./styles.scss";

function AnimatedCarousel() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const FAST_DURATION = 20;
  const SLOW_DURATION = 100;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (2 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="enter-genetiq-container">
      <div className="enter-genetiq-innerContainer">
        <div className="gentiq-Text">Enter GenetiQ</div>
        <motion.div
          className="gentix-continer-track"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setDuration(SLOW_DURATION);
            setMustFinish(true);
          }}
          onHoverEnd={() => {
            setDuration(FAST_DURATION);
            setMustFinish(true);
          }}
        >
          <div className="gentix-continer-trackB">
            <div
              className="genetiq-item-container"
              onHoverStart={() => console.log("play")}
            >
              <div>
                <h1>Next-Generation Healthcare</h1>
                <p>
                  Explore advanced diagnosis and treatment technology, powered
                  by Genetiq's state-of-the-art equipment
                </p>
              </div>
              <video playsInline loop muted>
                <source src={pills} type="video/mp4" />
              </video>
            </div>
            <div
              className="genetiq-item-container"
              onHoverStart={() => console.log("play")}
            >
              <div>
                <h1>Personalized Healthcare Solutions: </h1>
                <p>
                  Individualized wellness is achieved through the fusion of
                  cutting-edge blood and genome sequencing, enabling the
                  creation of custom-tailored supplement regimens.
                </p>
              </div>
              <video playsInline loop muted>
                <source src={machine} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Digital Twin</h1>
                <p>
                  At the core of GenetiQ's healthcare approach, the digital twin
                  integrates genetic and real-time biometric data to customize
                  treatments for optimal health outcomes.
                </p>
              </div>
              <video playsInline loop muted>
                <source src={twin} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Home Testing</h1>
                <p>
                  Home testing kits or in-home diagnostic services by skilled
                  nurses, ensuring accurate and comfortable monitoring of health
                  from your own home.
                </p>
              </div>
              <video playsInline loop muted>
                <source src={test} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Healthcare Solutions</h1>
                <p>
                  GenetiQ is a platform offering personalized drugs and custom
                  supplements tailored to individuals' unique genomic profiles.
                </p>
              </div>
              <video playsInline loop muted style={{ paddingBottom: "-48px" }}>
                <source src={hearth} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="gentix-continer-trackB">
            <div className="genetiq-item-container">
              <div>
                <h1>Next-Generation Healthcare</h1>
                <p>
                  Explore advanced diagnosis and treatment technology, powered
                  by Genetiq's state-of-the-art equipment
                </p>
              </div>
              <video loop muted>
                <source src={pills} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Personalized Healthcare Solutions: </h1>
                <p>
                  Individualized wellness is achieved through the fusion of
                  cutting-edge blood and genome sequencing, enabling the
                  creation of custom-tailored supplement regimens.
                </p>
              </div>
              <video playsInline loop muted>
                <source src={machine} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Digital Twin</h1>
                <p>
                  At the core of GenetiQ's healthcare approach, the digital twin
                  integrates genetic and real-time biometric data to customize
                  treatments for optimal health outcomes.
                </p>
              </div>
              <video playsInline loop muted>
                <source src={twin} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Home Testing</h1>
                <p>
                  Home testing kits or in-home diagnostic services by skilled
                  nurses, ensuring accurate and comfortable monitoring of health
                  from your own home.
                </p>
              </div>
              <video playsInline loop muted>
                <source src={test} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Healthcare Solutions</h1>
                <p>
                  GenetiQ is a platform offering personalized drugs and custom
                  supplements tailored to individuals' unique genomic profiles.
                </p>
              </div>
              <video playsInline loop muted style={{ paddingBottom: "-48px" }}>
                <source src={hearth} type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
        <motion.div className="gentix-continer-trackMobile">
          <div className="gentix-continer-trackBMobile">
            <div
              className="genetiq-item-container"
              onHoverStart={() => console.log("play")}
            >
              <div>
                <h1>Next-Generation Healthcare</h1>
                <p>
                  Explore advanced diagnosis and treatment technology, powered
                  by Genetiq's state-of-the-art equipment
                </p>
              </div>
              <video autoPlay={false} playsInline loop>
                <source src={pills} type="video/mp4" />
              </video>
            </div>
            <div
              className="genetiq-item-container"
              onHoverStart={() => console.log("play")}
            >
              <div>
                <h1>Personalized Healthcare Solutions: </h1>
                <p>
                  Individualized wellness is achieved through the fusion of
                  cutting-edge blood and genome sequencing, enabling the
                  creation of custom-tailored supplement regimens.
                </p>
              </div>
              <video playsInline loop>
                <source src={machine} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Digital Twin</h1>
                <p>
                  At the core of GenetiQ's healthcare approach, the digital twin
                  integrates genetic and real-time biometric data to customize
                  treatments for optimal health outcomes.
                </p>
              </div>
              <video playsInline loop>
                <source src={twin} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Home Testing</h1>
                <p>
                  Home testing kits or in-home diagnostic services by skilled
                  nurses, ensuring accurate and comfortable monitoring of health
                  from your own home.
                </p>
              </div>
              <video playsInline loop>
                <source src={test} type="video/mp4" />
              </video>
            </div>
            <div className="genetiq-item-container">
              <div>
                <h1>Healthcare Solutions</h1>
                <p>
                  GenetiQ is a platform offering personalized drugs and custom
                  supplements tailored to individuals' unique genomic profiles.
                </p>
              </div>
              <video playsInline loop style={{ paddingBottom: "-48px" }}>
                <source src={hearth} type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default AnimatedCarousel;
