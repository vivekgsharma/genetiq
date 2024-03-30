import React from "react";
// import facility from "../Assest/facility.svg";

import VideoFile from "../../Assets/facilities.mp4";
import logo from "../../Assets/ellipse.svg";
import "./styles.scss";

function Facilities() {
  return (
    <div className="facilities-outter-container">
      <div className="facilities-video-wrapper">
        <video autoPlay loop muted playsInline>
          <source src={VideoFile} type="video/mp4" />
        </video>
        <div className="facilities-textBox-container">
          <h1>The Future of Cell and Gene Therapy Facilities</h1>
          <p>
            GenetiQ offers leading diagnostic solutions in partnership with
            industry leaders. Our genetic testing stands out for its accuracy
            and affordability.
          </p>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Facilities;
