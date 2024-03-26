import pills from "../../Assets/pills.png";
import head from "../../Assets/head.png";
import Wicon from "../../Assets/Wicon.png";
import particle from "../../Assets/particle.png";

import bgA from "../../Assets/cardbgb.png";
import "./styles.scss";

function AnimatedCarousel() {
  return (
    <div className="enter-genetiq-container">
      <div className="gentiq-Text">Enter GenetiQ</div>

      <div className="gentix-continer-items">
        <div className="card-genitq-container">
          <div>
            <p>
              <span>GenetiQ</span> is a platform offering personalized drugs and
              custom supplements tailored to individuals' unique genomic
              profiles.
            </p>
          </div>

          <img src={pills} />
        </div>
        <div className="card-genitq-container">
          <div>
            <p>
              <span>Healthcare</span> through Cutting Edge Technology and
              Groundbreaking Research.
            </p>
          </div>
          <img src={bgA} />
        </div>
        <div className="card-genitq-container">
          <div>
            <p>
              <span>GenetiQ</span> transcends traditional healthcare models to
              serve as a sanctuary for proactive health optimization.
            </p>
          </div>
          <div className="card-genitq-imgWrapper">
            <img src={head} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="card-genitq-container">
          <div>
            <p>
              <span>A pioneering contender</span> in medical wellbeing, GenetiQ
              combines innovative scientific advances with holistic wellness to
              provide a best treatments and wellness therapies in the world.
            </p>
          </div>
          <div className="card-genitq-imgWrapper">
            <img src={Wicon} style={{ width: "50%" }} />
          </div>
        </div>
        <div className="card-genitq-container">
          <div>
            <p>
              <span>GenetiQ</span> designing for the Future of Cell and Gene
              Therapy Facilities.
            </p>
          </div>
          <div className="card-genitq-imgWrapper">
            <img src={particle} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnimatedCarousel;
