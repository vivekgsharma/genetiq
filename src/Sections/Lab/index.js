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
          UAE Clinic Premiere <span> Q4</span> 2024.
        </h1>
        <h2>
          Equipped with cutting-edge technologies such as pluripotent stem cells
          and gene therapy treatments, our facilities are designed to address
          longevity, wellness, beauty, health span, and biological age
          enhancement. Access the latest treatment plans and exclusive offers
          via the GenetiQ app, supported by our concierge service to assist you
          with bookings and streamline the process.
        </h2>
      </div>
    </div>
  );
}
export default Lab;
