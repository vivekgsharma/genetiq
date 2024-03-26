import "./style.scss";
import GneticLogoFooter from "../../Assets/genticlogofooter.svg";

function GeneticFooter() {
  return (
    <div className="Genetic-footer">
      <div className="footer-left-logo">
        <img src={GneticLogoFooter} alt="Genetic Logo" />
      </div>

      <div className="footer-right-container">
        <div className="footer-right-item">
          <div className="address-text">Address</div>
          <div className="text-box-footer-right">
            Prepaire Global Holdings IRENA Building - Masdar City Abu Dhabi
            United Arab Emirates
          </div>
        </div>

        {/* <div className="footer-right-item">
          <div className="address-text">Company</div>
          <div className="text-box-footer-right">
            <div>Journey</div>
            <div>Career</div>
          </div>
        </div> */}

        <div className="footer-right-item3">
          <div className="address-text">Contact</div>
          <div className="text-box-footer-right">
            <div className="text-box-footer-right">
              <a
                className="hover"
                onClick={() =>
                  (window.location.href = "mailto:sales@prepaire.com")
                }
              >
                sales@prepaire.com
              </a>
              <a
                className="hover"
                onClick={() =>
                  (window.location.href = "mailto:developers@prepaire.com")
                }
              >
                developers@prepaire.com
              </a>
              <a
                className="hover"
                onClick={() =>
                  (window.location.href = "mailto:investor@prepaire.com")
                }
              >
                investors@prepaire.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneticFooter;
