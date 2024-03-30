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

      <Link
        className="second-item-bottom"
        to="https://app.termly.io/document/terms-of-service/fb3569e8-7a0f-4c89-8a4f-0a9bbbcde184"
      >
        <p className="text-terms-second-item">Terms of service</p>
      </Link>
      <img src={Circlelogo} alt="" />
      <Link
        className="second-item-bottom"
        to="https://app.termly.io/document/privacy-policy/c26544c0-fecf-417b-9648-3aa50e9054e0"
      >
        <p className="text-terms-second-item">Privacy policy</p>
      </Link>

      <div className="copyright-text">
        Copyright © 2024 Prepaire Labs Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Bottombar;
