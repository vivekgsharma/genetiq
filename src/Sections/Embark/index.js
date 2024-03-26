import "./style.scss";
import WaitingImg from "../../Assets/waiting-img.png";
import { Link } from "react-router-dom";

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
          <Link
            className="left-btn-box"
            to="https://app.prepaire.com:5067/#/wishlist"
          >
            Join waitlist
          </Link>
        </div>
      </div>
      <div className="Embark-conatiner-right">
        <img src={WaitingImg} alt="img" />
      </div>
    </div>
  );
}

export default Embark;
