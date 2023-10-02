import React from "react";
import "./Works.css";
import Title from "../Utility/Title";

function Works() {
  return (
    <section className="works_sec" id="service">
      <div className="component arrowscope_container">
        <h6 className="arr__common_title Services_title">
          <Title title="Our Services" />{" "}
        </h6>
        <ul className="align">
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://s.cdpn.io/13060/book1.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <span className="ribbon bestseller">Nº1</span>
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
                <h1>Lorem Ipsum</h1>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://s.cdpn.io/13060/book1.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <span className="ribbon bestseller">Nº1</span>
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
                <h1>Lorem Ipsum</h1>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://s.cdpn.io/13060/book2.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <span className="ribbon new">NEW</span>
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
                <h1>Lorem Ipsum</h1>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li>
                  <img
                    src="https://s.cdpn.io/13060/book3.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
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
                <h1>Lorem Ipsum</h1>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Works;
