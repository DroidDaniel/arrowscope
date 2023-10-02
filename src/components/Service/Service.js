import React from "react";
import "./Service.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import service1 from "../../images/book-show.jpg";
import service2 from "../../images/book-banner.jpg";
import BannerImgServ from "../Banner/BannerImgServ";

function Service() {
  return (
    <div>
      <Navbar />
      <BannerImgServ />
      <section className="service_sec">
        <div className="arrowscope_container">
          <div className="service1_cont">
            <h4 className="service1_heading">
              We love Creative &amp; Branding Design
            </h4>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="service1_imgblock">
              <div className="service_img">
                <img src={service1} alt="services" />
              </div>
              <div className="service_img">
                <img src={service2} alt="services" />
              </div>
            </div>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="service1_cont">
            <h4 className="service1_heading">
              We love Creative &amp; Branding Design
            </h4>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="service1_imgblock">
              <div className="service_img">
                <img src={service1} alt="services" />
              </div>
              <div className="service_img">
                <img src={service2} alt="services" />
              </div>
            </div>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <p className="service1_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Service;
