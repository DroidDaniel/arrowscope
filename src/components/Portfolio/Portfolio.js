import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loading from "../../images/loading.gif";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Records from "./portfolio.json";
import FallBackImg from "../../images/arrow-logo.png";
import GoToTop from "../Utility/GoToTop";
import { Link } from "react-router-dom";

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
      <Navbar />
      <div className="portfolio-container">
        <div className="portfolio__labels">
          <span
            className={filter == "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </span>
          <span
            className={filter == "Alphabet" ? "active" : ""}
            onClick={() => setFilter("Alphabet")}
          >
            Alphabet
          </span>
          <span
            className={filter == "Colouring" ? "active" : ""}
            onClick={() => setFilter("Colouring")}
          >
            Colouring
          </span>
          <span
            className={filter == "Stories" ? "active" : ""}
            onClick={() => setFilter("Stories")}
          >
            Stories
          </span>
          <span
            className={filter == "Projects" ? "active" : ""}
            onClick={() => setFilter("Projects")}
          >
            Projects
          </span>
          <span
            className={filter == "Dictionaries" ? "active" : ""}
            onClick={() => setFilter("Dictionaries")}
          >
            Dictionaries
          </span>
          <span
            className={filter == "General" ? "active" : ""}
            onClick={() => setFilter("General")}
          >
            General
          </span>
        </div>
        <div className="portfolio__container">
          <div className="portfolio_card">
            {projects.length === 0 ? (
              <img src={Loading} alt="" />
            ) : (
              projects.map((item, key) =>
                item.filtered === true ? (
                  // <Link to={`/ourworks/${item.slug}`} key={key}>
                  <div className="portfolio_card__container">
                    <LazyLoadImage
                      className="portfolio_card__wrapper"
                      src={item.imgurl}
                      effect="blur"
                      placeholderSrc={FallBackImg}
                    />
                    {/* <div className="book_wrap">
   <a href="#" className="feature-panel-image-link">
      <div className="feature-panel-image">
         <img loading="lazy" decoding="async" className="feature-panel-image-img" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/51e0f837-d85d-4b28-bfab-1c9a47f0ce33/form-design-patterns-shop-image.png" alt="Feature Panel" width="200" height="270"/>
      </div>
   </a>
</div> */}
                  </div>
                ) : (
                  // </Link>
                  ""
                )
              )
            )}
          </div>
        </div>
      </div>
      <GoToTop />
      <Footer />
    </>
  );
}

export default Portfolio;
