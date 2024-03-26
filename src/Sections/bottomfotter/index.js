import "./style.scss";
// import Laboratry from "../Assest/laboratry.svg";

import Xlogo from "../../Assets/BottomBar/X-logo.svg";
import Instalogo from "../../Assets/BottomBar/insta.svg";
import Linkdinlogo from "../../Assets/BottomBar/linkdin.svg";

import Circlelogo from "../../Assets/BottomBar/circle.svg";

function Bottombar() {
  return (
    <div className="Bottom-bar-container">
      <div className="first-item-bottom">
        <button className="bootom-btn">
          <img src={Xlogo} alt="" />
        </button>

        <button className="bootom-btn">
          <img src={Instalogo} alt="" />
        </button>

        <button className="bootom-btn">
          <img src={Linkdinlogo} alt="" />
        </button>
      </div>
      <div className="second-item-bottom">
        <div className="text-terms-second-item">Terms of service</div>
        <img src={Circlelogo} alt="" />
        <div className="text-terms-second-item">Privacy policy</div>
      </div>

      <div className="copyright-text">
        Copyright © 2024 GenetiQ Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Bottombar;
