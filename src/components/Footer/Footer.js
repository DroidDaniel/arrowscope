import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="arrowscope_container footer_border">
        <div className="row">
          <div className="col-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify footer_about__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6>Address - KL</h6>
            <ul className="footer-links">
              <li>Nalanchira P.O,</li>
              <li>near New Family stores,</li>
              <li>Pananvila, Jn,</li>
              <li>Thiruvananthapuram,</li>
              <li>Kerala 695015</li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Address - TN</h6>
            <ul className="footer-links">
              <li>Nalanchira P.O,</li>
              <li>near New Family stores,</li>
              <li>Pananvila, Jn,</li>
              <li>Thiruvananthapuram,</li>
              <li>Kerala 695015</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="arrowscope_container">
        <div className="row">
          <div className="footer_text">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by Gaze.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
