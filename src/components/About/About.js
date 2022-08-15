import React from "react";
import "./About.css";
import Origami from ".././../images/origami3.png";
import Title from "../Utility/Title";

function About() {
  return (
    <section className="about_sec" id="arr_about">
      <div className="arrowscope_container">
        <div className="about_container">
          <div className="about_info">
            <h6 className="arr__common_title about_title">
              <Title title="Who We Are ?" />
            </h6>

            <p className="arr__body_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.
            </p>
          </div>
          <div className="about_image">
            <img src={Origami} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
