import React from "react";
import "./Footer.css";
import Insta from "../../images/instagram.png";
import Linked from "../../images/linkedin.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="arrowscope_container footer_border">
        <div className="row">
          <div className="col-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify footer_about__text">
              Welcome to Gaze printsystems, where creativity meets craftsmanship
              in the world of graphic design and printing. With over two decades
              of experience, we have honed our skills to perfection, delivering
              inspiring designs and flawless prints that captivate and inspire.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6>Kerala</h6>
            <ul className="footer-links">
              <li>Nalanchira P.O,</li>
              <li>Pananvila Jn,Thiruvananthapuram,</li>
              <li>Kerala 695015</li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Tamilnadu</h6>
            <ul className="footer-links">
              <li>No: 546A, Kamarajar Road</li>
              <li>Sivakasi, Tamil Nadu - 626123</li>
              <li>Ph: 9447067733 </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="arrowscope_container">
        <div className="ft_row">
          <div className="footer_text">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by Gaze print systems.
            </p>
          </div>
          <div className="powerd_text">
            <p>
              Powerd by{" "}
              <a target="_blank" href="http://arrowscope.in/">
                Arrowscope
              </a>{" "}
              Marketing Studio Pvt Ltd.
            </p>
          </div>
          <div className="social_media_links">
            <ul className="social_footer-links">
              <li>
                <a
                  href="https://www.instagram.com/gaze_print_systems?igsh=eDFwdTN3YXczMnhk"
                  target="_blank"
                  title="instagram"
                >
                  <img src={Insta} alt="social" width="20" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gaze-printsystems-b599902a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  title="linkedin"
                >
                  <img src={Linked} alt="social" width="20" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
