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
              Welcome to Gaze printsystem, where creativity meets craftsmanship
              in the world of graphic design and printing. With over two decades
              of experience, we have honed our skills to perfection, delivering
              inspiring designs and flawless prints that captivate and inspire.
            </p>
            <p className="arr__body_text">
              Our journey has been illuminated by collaborations with leading
              clients and esteemed institutions, forging relationships built on
              trust and innovation. We're not just in the business of design;
              we're in the business of transforming ideas into visual
              masterpieces. Our label does not just stand for printers and
              designers; instead, we are also storytellers. Every project we
              undertake is a canvas, and every design is a narrative waiting to
              be told. With a team of passionate creatives and cutting-edge
              technology, we bring your vision to life, leaving an indelible
              mark on every project.
            </p>
            <p className="arr__body_text">
              Explore the world of Gaze, where innovation, experience, and
              creativity merge to create graphic design and printing solutions
              that inspire and endure.
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
