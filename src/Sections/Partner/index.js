import "./style.scss";
// import VideoFile from "../Assest/video.mov";
import Mgi from "../../Assets/partner/mgi.png";
import Nvidia from "../../Assets/partner/nvidia.png";
import Emirates from "../../Assets/partner/Emirate.png";
import NanoPore from "../../Assets//partner/nanopore.svg";
import UnitedImaging from "../../Assets/partner/united.png";
import MadsarCity from "../../Assets/partner/Madsar.png";
import meta from "../../Assets/partner/meta.svg";
import apple from "../../Assets/partner/apple.svg";
import celllink from "../../Assets/partner/celllink.png";
import canfield from "../../Assets/partner/canfield.png";

function Partner() {
  return (
    <div className="Bitoutne-Partner">
      <div className="partnr-text">Our partners</div>
      <div className="partner-conatiner">
        <div className="partner-box1">
          <div className="partner-item">
            <img src={Mgi} alt="mgi" />
          </div>
          <div className="partner-item">
            <img src={Nvidia} alt="mgi" />
          </div>
          <div className="partner-item">
            <img src={Emirates} alt="mgi" />
          </div>
          <div className="partner-item">
            <img src={NanoPore} alt="" />
          </div>
          <div className="partner-item">
            <img src={UnitedImaging} alt="" />
          </div>
          <div className="partner-item">
            <img src={MadsarCity} alt="mgi" />
          </div>
          <div className="partner-item">
            <img src={meta} alt="mgi" />
          </div>
          <div className="partner-item">
            <img src={apple} alt="mgi" />
          </div>
          <div className="partner-item">
            <img src={celllink} alt="" />
          </div>
          <div className="partner-item">
            <img src={canfield} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
