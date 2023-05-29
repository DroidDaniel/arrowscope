import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "./components/Navbar/Navbar";
import AdminFooter from "./components/Admin/AdminFooter";
import Loading from ".././src/images/loading.gif";

const portfolio = [
  {
    name: "My best client",
    category: "['all', 'fashion', 'travel']",
    imgurl: "images/port1.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "education", "travel"],
    imgurl: "images/port2.jpg",
  },
  {
    name: "A old job",
    category: ["all", "fashion"],
    imgurl: "images/port3.jpg",
  },
  {
    name: "It is a really cool website",
    category: ["all", "fashion", "travel", "others"],
    imgurl: "images/port4.jpg",
  },
  {
    name: "Something more",
    category: ["all", "others"],
    imgurl: "images/port1.jpg",
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
            {projects.map((item) =>
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
            )}
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
}

export default Portfolio;
