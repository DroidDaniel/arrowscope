import React from "react";
import "./Navbar.css";
import CompanyLogo from "../../images/arrow-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="arr__nav_sec" id="arr_nav">
      <div className="arrowscope_container">
        <div className="arr__nav_container">
          <div className="arr__logo_container">
            <Link to="/">
              <img src={CompanyLogo} alt="CompanyLogo" />
            </Link>
          </div>
          <div className="arr__links_container">
            <ul className="arr__links_ul">
              {/* <li className="arr__links_items">ABOUT US</li>
              <li className="arr__links_items">SERVICE</li> */}
              <li className="arr__links_items">
                <Link to="/ourworks">OUR WORKS</Link>
              </li>
              <li className="arr__links_items">
                <a href="tel:+919539192162">9539192162</a>
              </li>
              <li className="arr__links_items">
                <Link to="/">HOME</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
