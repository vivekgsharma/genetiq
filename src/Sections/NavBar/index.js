import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.svg";
import "./styles.scss";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Menu from "../../../src/Assets/IconBurguer.svg";
import Cross from "../../Assets/x-close.svg";
function Navbar() {
  const [showExpanedMenu, setShowExpanedMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const updateExpanedMenu = () => {
    setShowExpanedMenu(!showExpanedMenu);
  };

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    console.log();
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <div
        className="Navbar-container"
        style={{ top: visible ? "0" : "-65px" }}
      >
        <HashLink to={"/#hero"} smooth={true}>
          <div className="logo-wrapper">
            <img src={logo} />
          </div>
        </HashLink>

        <div className="Navbar-action-container">
          <HashLink to={"/#advantages"} smooth={true}>
            Advantages
          </HashLink>
          <HashLink to={"/#journey"} smooth={true}>
            Journey
          </HashLink>
          <HashLink to={"/#partners"} smooth={true}>
            Partners
          </HashLink>
          <HashLink to={"/#contact"} smooth={true}>
            Contact
          </HashLink>
        </div>
        <button type="button" className="menu-btn" onClick={updateExpanedMenu}>
          {showExpanedMenu ? (
            <img src={Cross} alt="cross" />
          ) : (
            <img src={Menu} alt="menu" />
          )}
        </button>
      </div>
      {showExpanedMenu && (
        <div
          className="expand-menu-container"
          style={{ top: visible ? "68px" : "0px" }}
        >
          <div className="control-btn-group-container">
            <HashLink
              to={"/#advantages"}
              smooth={true}
              onClick={updateExpanedMenu}
            >
              Advantages
            </HashLink>
            <HashLink
              to={"/#journey"}
              smooth={true}
              onClick={updateExpanedMenu}
            >
              Journey
            </HashLink>
            <HashLink
              to={"/#partners"}
              smooth={true}
              onClick={updateExpanedMenu}
            >
              Partners
            </HashLink>
            <HashLink
              to={"/#contact"}
              smooth={true}
              onClick={updateExpanedMenu}
            >
              Contact
            </HashLink>

            {/* <Link type="button" className="control-btn" to="/wishlist">
            Log in
            <img src={Enter} alt="enter" />
          </Link> */}
          </div>
          {/* <div className="bottom-contents">
          <div className="social-btns-container">
            <a
              href="https://twitter.com/prepaire_labs?lang=en "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={XIcon} alt="xicon" />
            </a>
            <a
              href="https://www.instagram.com/prepaire_labs/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a
              href="https://ie.linkedin.com/company/prepaire-labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
          </div>
          <img src={Prepaire} alt="prepaire-logo" />
        </div> */}
        </div>
      )}
    </>
  );
}
export default Navbar;
