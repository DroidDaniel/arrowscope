import React from "react";
import BannerBtn from "../Button/BannerBtn";
import "./Banner.css";
import Mov from "../../images/render.mp4";
import MobMov from "../../images/render-mobile.mp4";

function Banner() {
  return (
    <section className="bannersection" id="banner">
      <video playsInline autoPlay loop muted id="bgvideo" className="dktp_vid">
        <source src={Mov} type="video/mp4" />
      </video>
      <video
        playsInline
        autoPlay
        loop
        muted
        id="bgvideo_mob"
        className="mob_vid"
      >
        <source src={MobMov} type="video/mp4" />
      </video>

      {/* <div className="arrowscope_container">
        <div className="banner__info">
          <div className="banner__content">
            <p className="banner__titile">
              We are <span>Quality Book Printers</span>
            </p>
            <p className="banner__subtitile">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <BannerBtn />
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Banner;
