import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loading from "../../images/loading.gif";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Records from './portfolio.json';
import FallBackImg from "../../images/arrow-logo.png"
import GoToTop from "../Utility/GoToTop";


function Portfolio() {

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    setProjects(Records);
  }, []);


  useEffect(() => {
    setProjects([]);

    const filtered = Records.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <Navbar/>
      <div className="portfolio-container">
        <div className="portfolio__labels">
          <span
            className={filter == "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </span>
          <span
            className={filter == "fashion" ? "active" : ""}
            onClick={() => setFilter("fashion")}
          >
            Fashion
          </span>
          <span
            className={filter == "education" ? "active" : ""}
            onClick={() => setFilter("education")}
          >
            Education
          </span>
          <span
            className={filter == "travel" ? "active" : ""}
            onClick={() => setFilter("travel")}
          >
            Travel
          </span>
          <span
            className={filter == "others" ? "active" : ""}
            onClick={() => setFilter("others")}
          >
            Others
          </span>
        </div>
        <div className="portfolio__container">
          <div className="portfolio_card">
            {projects.length === 0 ? (
              <img src={Loading} alt="" />
            ) : (
              projects.map((item) =>
                item.filtered === true ? (
                  <div className="portfolio_card__container" key={item.name}>
                    <LazyLoadImage
                      className="portfolio_card__wrapper"
                      src={item.imgurl}
                      effect="blur"
                      placeholderSrc={FallBackImg}
                    />
                  </div>
                ) : (
                  ""
                )
              )
            )}
          </div>
        </div>
      </div>
      <GoToTop/>
      <Footer/>
    </>
  );
}

export default Portfolio;
