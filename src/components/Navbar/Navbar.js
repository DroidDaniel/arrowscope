import React, { useState } from "react";
import "./Navbar.css";
import CompanyLogo from "../../images/arrow-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <section className="arr__nav_sec" id="arr_nav">
      <div className="arrowscope_container">
        <div className="arr__nav_container">
          <div className="arr__logo_container">
            <Link to="/">
              <img src={CompanyLogo} alt="CompanyLogo" />
            </Link>
          </div>
          <div
            className={
              "arr__links_container" + (!isActive ? " mobile__menu" : "")
            }
          >
            <div
              id="menuToggle"
              className={"menu__ico" + (!isActive ? " app" : "")}
              onClick={handleToggle}
            >
              <div className="hamburger__menu">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className="arr__links_ul">
              {/* <li className="arr__links_items">ABOUT US</li>
              <li className="arr__links_items">SERVICE</li> */}

              <li className="arr__links_items">
                <Link to="/">HOME</Link>
              </li>
              {/* <li className="arr__links_items">
                <Link to="/">ABOUT</Link>
              </li> */}
              <li className="arr__links_items">
                <Link to="/services">SERVICES</Link>
              </li>
              <li className="arr__links_items">
                <Link to="/support">CONTACT</Link>
              </li>

              <li className="arr__links_items">
                <Link to="/ourworks">PORTFOLIO</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
