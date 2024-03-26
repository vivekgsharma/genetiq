import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
import video1 from "../../Assets/Slider/human.mp4";

const data = [
  {
    id: 1,
    highlight: "GenetiQ: ",
    text: " GenetiQ: Personalized Health Journey",
    text2: "Initiation",
    text3:
      "Your journey begins with a cutting-edge 3D body scan, capturing your physical form in unparalleled detail.",
    url: "https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/Videos%2Fhuman.mp4?alt=media&token=2b5c0130-4113-46fc-8e04-837ce927e21e",
  },
  {
    id: 2,
    highlight: "GenetiQ: ",
    text: " GenetiQ: Personalized Health Journey",
    text2: "In-depth Analysis",
    text3:
      "Next, we delve deep into your genetic blueprint with our platinum 120x genome sequencing while you relax in our serene setting, enhanced with an FDG activator tracer for precise PET CT scan preparation.",
    url: "https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/genetiq%2FgenetiqSlide2.png?alt=media&token=df500cba-ba35-4e1a-bd49-043b9b139eb2",
  },
  {
    id: 3,
    highlight: "GenetiQ: ",
    text: " GenetiQ: Personalized Health Journey",
    text2: "Advanced Imaging",
    text3:
      "A swift, 45-second full-body PET CT scan with Explorer technology, revealing insights beyond the surface.",
    url: "https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/genetiq%2Fmachine.png?alt=media&token=34cc969d-ef49-42be-8ba8-f31223f83e96",
  },
  {
    id: 4,
    highlight: "GenetiQ: ",
    text: " GenetiQ: Personalized Health Journey",
    text2: "In-depth Analysis",
    text3:
      "Conclude with a consultation from our expert doctors. Together, we create your digital twin, unveiling a tailored lifestyle plan. To bring this vision to life at home, choose between a complimentary Apple Vision Pro VR headset or Meta Quest 3, enriching your experience with the GenetiQ app.",
    url: "https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/genetiq%2Fglasses.mp4?alt=media&token=dba08269-d40c-47c0-82c9-a581b4cb7f10",
  },
];

function Images({ text, url, text2, text3 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350], []);
  const statick = useTransform(scrollYProgress, [0, 1], [-300, 500], []);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section className="section">
      <div className="slideShow-text-container">
        <motion.h1 style={{ y, opacity: opacity }}>{text}</motion.h1>
        <motion.h2 style={{ y }}>{text2}</motion.h2>
        <motion.p style={{ y, opacity: opacity }}>{text3}</motion.p>
      </div>

      <motion.div className="videoWrapper" ref={ref}>
        <video autoPlay loop muted>
          <source src={url} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}

function Imagesb({ text, url, text2, text3 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-800, 100], []);
  const statick = useTransform(scrollYProgress, [0, 1], [-300, 500], []);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section className="section">
      <div className="slideShow-text-container">
        <motion.h1 style={{ y, opacity: opacity }}> {text}</motion.h1>
        <motion.h2 style={{ y }}>{text}</motion.h2>
        <motion.p style={{ y, opacity: opacity }}>{text3}</motion.p>
      </div>

      <motion.div
        className="videoWrapper"
        style={{ opacity: opacity }}
        ref={ref}
      >
        <img style={{ width: "100%" }} src={url} alt={text} />
      </motion.div>
    </section>
  );
}

function Imagesc({ text, url, text2, text3 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350], []);
  const statick = useTransform(scrollYProgress, [0, 1], [-300, 500], []);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section className="section-video">
      <div className="slideShow-text-container">
        <motion.h1 style={{ y, opacity: opacity }}> {text}</motion.h1>
        <motion.h2 style={{ y }}>{text}</motion.h2>
        <motion.p style={{ y, opacity: opacity }}>{text3}</motion.p>
      </div>

      <motion.div
        className="videoWrapper"
        style={{ opacity: opacity }}
        ref={ref}
      >
        <img style={{ width: "100%" }} src={url} alt={text} />
      </motion.div>
      <div class="video-container">
        <video autoPlay loop muted>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/genetiq%2FExplorer.mp4?alt=media&token=5583fc33-3807-4c23-837c-64532df8a035"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default function Slideshow() {
  return (
    <div className="background">
      <Images
        key={data[0].id}
        text={data[0].text}
        text2={data[0].text2}
        text3={data[0].text3}
        url={data[0].url}
      />
      <Imagesb
        key={data[1].id}
        text={data[1].text}
        text2={data[1].text2}
        text3={data[1].text3}
        url={data[1].url}
      />
      <Imagesc
        key={data[2].id}
        text={data[2].text}
        text2={data[2].text2}
        text3={data[2].text3}
        url={data[2].url}
      />
      <Images
        key={data[3].id}
        text={data[3].text}
        text2={data[3].text2}
        text3={data[3].text3}
        url={data[3].url}
      />
    </div>
  );
}
