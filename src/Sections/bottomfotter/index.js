import "./style.scss";
// import Laboratry from "../Assest/laboratry.svg";

import Xlogo from "../../Assets/BottomBar/X-logo.svg";
import Instalogo from "../../Assets/BottomBar/insta.svg";
import Linkdinlogo from "../../Assets/BottomBar/linkdin.svg";

import Circlelogo from "../../Assets/BottomBar/circle.svg";
import { Link } from "react-router-dom";

function Bottombar() {
  return (
    <div className="Bottom-bar-container">
      <div className="first-item-bottom">
        <Link
          className="bootom-btn"
          to="https://twitter.com/prepaire_labs?lang=en "
        >
          <img src={Xlogo} alt="" />
        </Link>

        <Link
          className="bootom-btn"
          to="https://www.instagram.com/prepaire_labs/ "
        >
          <img src={Instalogo} alt="" />
        </Link>

        <Link
          className="bootom-btn"
          to="https://ie.linkedin.com/company/prepaire-labs"
        >
          <img src={Linkdinlogo} alt="" />
        </Link>
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
