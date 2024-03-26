import React from "react";
// import facility from "../Assest/facility.svg";

import VideoFile from "../../Assets/facilities.mp4";
import logo from "../../Assets/ellipse.svg";
import "./styles.scss";

function Facilities() {
  return (
    <div className="facilities-outter-container">
      <div className="facilities-video-wrapper">
        <video autoPlay loop muted>
          <source src={VideoFile} type="video/mp4" />
        </video>
        <div className="facilities-textBox-container">
          <h1>The Future of Cell and Gene Therapy Facilities</h1>
          <p>
            GenetiQ combines innovative scientific advances with holistic
            wellness to provide a best treatments and wellness therapies in the
            world.
          </p>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Facilities;
