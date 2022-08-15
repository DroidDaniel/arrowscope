import React from "react";
import Title from "../Utility/Title";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio_sec" id="arr_porfolio">
      <div className="arrowscope_container">
        <div className="arrowscope_container">
          <h6 className="arr__common_title portfolio_title">
            <Title title="Our Works" />
          </h6>
          <div className="portfolio_container">
            <div className="portfolio_img one"></div>
            <div className="portfolio_img two"></div>
            <div className="portfolio_img three"></div>
            <div className="portfolio_img four"></div>
            <div className="portfolio_img five"></div>
            <div className="portfolio_img six"></div>
            <div className="portfolio_img seven"></div>
            <div className="portfolio_img eight"></div>
          </div>
          <div className="seemore_text">
            <a href="/" target="_blank" className="btn_seemore">
              SEE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
