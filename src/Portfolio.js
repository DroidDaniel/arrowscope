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
    category: "['all', 'frontend', 'ux-ui']",
    imgurl: "images/port1.jpg",
  },
  {
    name: "My favorite case",
    category: ["all", "mobile", "ux-ui"],
    imgurl: "images/port2.jpg",
  },
  {
    name: "A old job",
    category: ["all", "frontend"],
    imgurl: "images/port3.jpg",
  },
  {
    name: "It is a really cool website",
    category: ["all", "frontend", "ux-ui"],
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
          <span active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </span>
          <span
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </span>
          <span
            active={filter === "mobile"}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </span>
          <span active={filter === "ux-ui"} onClick={() => setFilter("ux-ui")}>
            UX/UI
          </span>
          <span
            active={filter === "others"}
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
