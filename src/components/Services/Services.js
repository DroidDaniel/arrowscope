import React from "react";
import "./Services.css";
import Origami4 from ".././../images/origami4.png";
import Origami5 from ".././../images/origami5.png";
import Origami6 from ".././../images/origami6.png";
import Origami7 from ".././../images/origami7.png";
import Origami8 from ".././../images/origami8.png";
import Origami9 from ".././../images/origami9.png";
import Title from "../Utility/Title";

function Services() {
  return (
    <section className="services_sec" id="arr_services">
      <div className="arrowscope_container">
        <h6 className="arr__common_title Services_title">
          <Title title="Our Services" />{" "}
        </h6>
        <div className="secrvices_container">
          <div className="services_row">
            <div className="service">
              <div className="services_img">
                <img src={Origami4} alt="about" />
              </div>
              <div className="services_info">
                <h5 className="services__title">Branding</h5>
                <p className="arr__body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
            <div className="service">
              <div className="services_img">
                <img src={Origami5} alt="about" />
              </div>
              <div className="services_info">
                <h5 className="services__title">Content Writing</h5>
                <p className="arr__body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
            <div className="service">
              <div className="services_img">
                <img src={Origami6} alt="about" />
              </div>
              <div className="services_info">
                <h5 className="services__title">Website Development</h5>
                <p className="arr__body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
          </div>

          <div className="services_row">
            <div className="service">
              <div className="services_img">
                <img src={Origami7} alt="about" />
              </div>
              <div className="services_info">
                <h5 className="services__title">Social Media Posts</h5>
                <p className="arr__body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
            <div className="service">
              <div className="services_img">
                <img src={Origami8} alt="about" />
              </div>
              <div className="services_info">
                <h5 className="services__title">Animation</h5>
                <p className="arr__body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
            <div className="service">
              <div className="services_img">
                <img src={Origami9} alt="about" />
              </div>
              <div className="services_info">
                <h5 className="services__title">Photo &amp; Video Shoot</h5>
                <p className="arr__body_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
