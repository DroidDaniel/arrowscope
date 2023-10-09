import React from "react";
import "./Service.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import service1 from "../../images/book-show.jpg";
import service2 from "../../images/book-banner.jpg";
import BannerImgServ from "../Banner/BannerImgServ";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GoToTop from "../Utility/GoToTop";

function Service() {
  return (
    <div>
      <Navbar />
      <BannerImgServ />
      <section className="service_sec">
        <div className="arrowscope_container">
          <div className="service1_cont">
            <h4 className="service1_heading">Graphic Designing</h4>
            <p className="service1_para">
              Unlock the extraordinary power of visuals with our graphic design
              expertise. At the crossroads of imagination and innovation, we
              craft captivating designs that transcend the ordinary.
            </p>
            <p className="service1_para">
              Each pixel we place is a brushstroke on the canvas of your ideas,
              shaping perceptions and telling stories. Immerse yourself in a
              world where creativity knows no bounds, and let us transform your
              ideas into visual marvels that leave a lasting impression with the
              expertise of our experienced graphic designers.
            </p>
            <div className="service1_imgblock">
              <div className="service_img">
                <LazyLoadImage img src={service1} alt="services" />
              </div>
              <div className="service_img">
                <LazyLoadImage img src={service2} alt="services" />
              </div>
            </div>
          </div>

          <div className="service1_cont">
            <h4 className="service1_heading">Printing</h4>
            <p className="service1_para">
              Printing is a manifestation of your vision, not just ink on paper.
              Our printing services give your projects life by turning ideas
              into concrete realities.
            </p>
            <p className="service1_para">
              We make sure that every detail is captured in vivid colour and
              clear clarity using precision, care, and the most recent printing
              technology. Discover the tactile beauty of our prints, where the
              highest level of quality and attention to detail are used to bring
              your ideas to life.
            </p>
            <div className="service1_imgblock">
              <div className="service_img">
                <LazyLoadImage img src={service1} alt="services" />
              </div>
              <div className="service_img">
                <LazyLoadImage img src={service2} alt="services" />
              </div>
            </div>
            <p className="service1_para">
              Content Development for Children's Books: In the enchanting realm
              of children's literature, our content development sparks
              imagination. We craft stories that engage young minds and foster a
              love for reading. Every word is carefully chosen, and every
              character is a friend waiting to be discovered. Unite us in the
              world of fantasy and wonder, where stories come alive and young
              minds embark on magical journeys.
            </p>
          </div>
        </div>
      </section>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default Service;
