import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "./components/Navbar/Navbar";
import AdminFooter from "./components/Admin/AdminFooter";
import Loading from ".././src/images/loading.gif";

function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("./portfolio.json")
      .then((res) => {
        console.log("getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        <div className="portfolio_card">
          {data.length === 0 ? (
            <img src={Loading} alt="" />
          ) : (
            data.map((data, index) => {
              return (
                <div className="portfolio_card__container">
                  <LazyLoadImage
                    key={data.id}
                    className="portfolio_card__wrapper"
                    src={data.imgurl}
                    effect="blur"
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <AdminFooter />
    </>
  );
}

export default Portfolio;
