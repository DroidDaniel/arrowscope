import React from "react";
import BannerBtn from "../Button/BannerBtn";
import "./Banner.css";

function Banner() {
  return (
    <section className="bannersection" id="banner">
      <div className="arrowscope_container">
        <div className="banner__info">
          <div className="banner__content">
            <p className="banner__titile">
              We are Creative <span>Marketing Agency</span>
            </p>
            <p className="banner__subtitile">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <BannerBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
