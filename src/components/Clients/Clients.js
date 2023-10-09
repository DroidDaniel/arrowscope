import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Clients.css";
import Client1 from "../.././images/clientlogo/h-c.png";
import Client2 from "../.././images/clientlogo/dig.png";
import Client3 from "../.././images/clientlogo/talent.png";
import Client4 from "../.././images/clientlogo/oriole.png";
import Client5 from "../.././images/clientlogo/erly.png";
import Client6 from "../.././images/clientlogo/pcm.png";
import Client7 from "../.././images/clientlogo/c-m.png";

function Clients(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: "linear",
    rtl: props.dir,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="clients_sec" id="arr_clients">
      <div className="arrowscope_container">
        <Slider {...settings}>
          <div className="client_logo_wrapper">
            <img src={Client1} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client2} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client3} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client4} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client5} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client6} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client7} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client2} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client1} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client3} alt="sliderimg" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
