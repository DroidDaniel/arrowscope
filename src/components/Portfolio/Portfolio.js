import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loading from "../../images/loading.gif";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const portfolio = [
  {
    name: "My best client",
    category: "['all', 'fashion']",
    imgurl: "images/fashion1.jpeg",
  },
  {
    name: "A old job",
    category: ["all", "fashion"],
    imgurl: "images/fashion2.png",
  },
  {
    name: "It is a really cool website",
    category: ["all", "fashion"],
    imgurl: "images/fashion3.jpg",
  },
  {
    name: "It is a really cool website",
    category: ["all", "fashion"],
    imgurl: "images/fashion4.jpg",
  },
  {
    name: "It is a really cool website",
    category: ["all", "fashion"],
    imgurl: "images/fashion5.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "education"],
    imgurl: "images/education1.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "education"],
    imgurl: "images/education2.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "education"],
    imgurl: "images/education3.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "education"],
    imgurl: "images/education4.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "education"],
    imgurl: "images/education5.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "travel"],
    imgurl: "images/travel1.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "travel"],
    imgurl: "images/travel2.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "travel"],
    imgurl: "images/travel3.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "travel"],
    imgurl: "images/travel4.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "travel"],
    imgurl: "images/travel5.jpg",
  },
  {
    name: "Something more",
    category: ["all", "others"],
    imgurl: "images/other1.jpg",
  },
  {
    name: "Something more",
    category: ["all", "others"],
    imgurl: "images/other2.jpg",
  },
  {
    name: "Something more",
    category: ["all", "others"],
    imgurl: "images/other3.jpg",
  },
  {
    name: "Something more",
    category: ["all", "others"],
    imgurl: "images/other4.png",
  },
  {
    name: "Something more",
    category: ["all", "others"],
    imgurl: "images/other5.jpg",
  },
];

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  console.log(portfolio);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
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
                  <div className="portfolio_card__container">
                    <LazyLoadImage
                      key={item.name}
                      className="portfolio_card__wrapper"
                      src={item.imgurl}
                      effect="blur"
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
      <Footer/>
    </>
  );
}

export default Portfolio;
