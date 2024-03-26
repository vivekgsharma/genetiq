import "./style.scss";
import WaitingImg from "../../Assets/waiting-img.png";

function Embark() {
  return (
    <div className="Bitoutne-Embark">
      <div className="Embark-conatiner-left">
        <div className="embark-conatiner-left-items">
          <div className="waiting-text">What are you waiting for?</div>
          <div className="embark-text">
            Embark on a transformative health journey with
            <span className="gentiq">GenetiQ</span>, where cutting-edge
            technology meets personalized care.
          </div>
        </div>
        <div className="join-left-button">
          <div className="left-btn-box">Join waitlist</div>
        </div>
      </div>
      <div className="Embark-conatiner-right">
        <img src={WaitingImg} alt="img" />
      </div>
    </div>
  );
}

export default Embark;
