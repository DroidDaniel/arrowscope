import React from "react";
import Contact from "../Contact/Contact";
import "./Support.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BannerImg from "../Banner/BannerImg";
import GoToTop from "../Utility/GoToTop";

function Support() {
  return (
    <>
      <Navbar />
      <BannerImg />
      <section className="support_stripe">
        <div className="component arrowscope_container">
          <div className="support_stripe-icons-container">
            <div className="support_stripe-icons">
              <div className="icon icon-large">
                <svg
                  className="support_icon"
                  viewBox="0 0 32 32"
                  id="i-telephone"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z"></path>{" "}
                    <circle cx="16" cy="21" r="4"></circle>{" "}
                  </g>
                </svg>
              </div>

              <div className="support_stripe-info">
                <h6 className="support_stripe-heading">Phone</h6>
                <p className="support_stripe-para">+91 9874561230</p>
                <p className="support_stripe-para">+91 9874561230</p>
              </div>
            </div>

            <div className="support_stripe-icons">
              <div className="icon icon-large">
                {" "}
                <svg
                  className="support_icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></rect>{" "}
                  </g>
                </svg>{" "}
              </div>

              <div className="support_stripe-info">
                <h6 className="support_stripe-heading">Email</h6>
                <p className="support_stripe-para">info@domain.com</p>
                <p className="support_stripe-para">info@domain.com</p>
              </div>
            </div>

            <div className="support_stripe-icons">
              <div className="icon icon-large">
                {" "}
                <svg
                  className="support_icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>{" "}
              </div>

              <div className="support_stripe-info">
                <h6 className="support_stripe-heading">Kerala</h6>
                <p className="support_stripe-para">Trivandrum</p>
                <p className="support_stripe-para">+91 9874561230</p>
              </div>
            </div>

            <div className="support_stripe-icons">
              <div className="icon icon-large">
                {" "}
                <svg
                  className="support_icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>{" "}
              </div>

              <div className="support_stripe-info">
                <h6 className="support_stripe-heading">Tamilnadu</h6>
                <p className="support_stripe-para">Sivakasi</p>
                <p className="support_stripe-para">+91 9874561230</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <GoToTop />
      <Footer />
    </>
  );
}

export default Support;
