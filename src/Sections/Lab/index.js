import React from "react";
import Labs from "../../Assets/Lab.png";
import "./styles.scss";

function Lab() {
  return (
    <div className="Lab-container">
      {/* <div className="lab-img-wrapper">
        <img src={Labs} />
      </div> */}
      <div className="text-clinic-container">
        <h1>
          First clinic in UAE in<span> Q3</span> next year.
        </h1>
        <h2>
          It will be fitted with state-of-the-art technologies & equipment,
          including pluripotent stem cells and gene therapy equipment, our
          facilities will cater to wellness, beauty, and, crucially, anti-aging
          and health span enhancement.
        </h2>
      </div>
    </div>
  );
}
export default Lab;
