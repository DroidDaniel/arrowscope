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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.5 47.5"
                  id="briefcase"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M0 38h38V0H0v38Z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path d="M13 31a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H13v2zm20-2h-6v4a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4"></path>
                    <path d="M37 17a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-8Z"></path>
                    <path d="M37 19a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-6Z"></path>
                    <path d="M23 19a2 2 0 0 0-2-2h-4a2 2 0 0 0 0 4h4a2 2 0 0 0 2-2"></path>
                  </g>
                </svg>
                <Link to="/ourworks">OUR WORKS</Link>
              </li>
              <li className="arr__links_items">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="phone"
                >
                  <g data-name="Layer 2">
                    <g data-name="phone">
                      <rect width="24" height="24" opacity="0"></rect>
                      <path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z"></path>
                    </g>
                  </g>
                </svg>
                <a href="tel:+919539192162">9539192162</a>
              </li>
              <li className="arr__links_items">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="home"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
                </svg>
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
