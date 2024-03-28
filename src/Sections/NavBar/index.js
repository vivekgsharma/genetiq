import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.svg";
import "./styles.scss";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
    console.log()
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="Navbar-container" style={{ top: visible ? "0" : "-65px" }}>
      <div className="logo-wrapper">
        <img src={logo} />
      </div>
      <div className="Navbar-action-container">
        <HashLink to={"/#about"} smooth={true}>
          About
        </HashLink>
        <HashLink to={"/#Facilities"} smooth={true}>
          Facilities
        </HashLink>
        <HashLink to={"/#journey"} smooth={true}>
          Journey
        </HashLink>
        <HashLink to={"/#partners"} smooth={true}>
          Partners
        </HashLink>
      </div>
    </div>
  );
}
export default Navbar;
