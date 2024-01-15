import React from "react";
import "./Works.css";
import Title from "../Utility/Title";
import Cover1 from "../../images/cover1.png";
import Cover2 from "../../images/cover2.png";
import Cover3 from "../../images/cover3.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Works() {
  return (
    <section className="works_sec" id="service">
      <div className="component arrowscope_container">
        <h6 className="arr__common_title Services_title">
          <Title title="Our Services" />{" "}
        </h6>
        <ul className="works_card_align">
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <LazyLoadImage
                    src={Cover1}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  {/* <span className="ribbon bestseller">Nº1</span> */}
                </li>
                <li></li>
              </ul>
              <ul className="page">
                <li></li>
                <li>
                  <a className="btn btn_read__more" href="#">
                    Read More
                  </a>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
              <figcaption>
                <h1>Graphic Designing</h1>

                <p>
                  Unlock the extraordinary power of visuals with our graphic
                  design expertise. At the crossroads of imagination and
                  innovation, we craft...
                </p>

                <div className="readmore_txt">
                  <Link to="/services" className="btn_read">
                    Read More
                  </Link>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <LazyLoadImage
                    src={Cover2}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  {/* <span className="ribbon bestseller">Nº1</span> */}
                </li>
                <li></li>
              </ul>
              <ul className="page">
                <li></li>
                <li>
                  <a className="btn btn_read__more" href="#">
                    Read More
                  </a>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
              <figcaption>
                <h1>Printing</h1>

                <p>
                  Printing is a manifestation of your vision, not just ink on
                  paper. Our printing services give your projects life by
                  turning ideas into concrete...
                </p>

                <div className="readmore_txt">
                  <Link to="/services" className="btn_read">
                    Read More
                  </Link>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <LazyLoadImage
                    src={Cover3}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  {/* <span className="ribbon bestseller">Nº1</span> */}
                </li>
                <li></li>
              </ul>
              <ul className="page">
                <li></li>
                <li>
                  <a className="btn btn_read__more" href="#">
                    Read More
                  </a>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
              <figcaption>
                <h1>Content Development</h1>

                <p>
                  Content Development for Children's Books: In the enchanting
                  realm of children's literature, our content development sparks
                  imagination. We craft stories that engage...
                </p>

                <div className="readmore_txt">
                  <Link to="/services" className="btn_read">
                    Read More
                  </Link>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Works;
