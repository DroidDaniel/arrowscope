import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Clients.css";
import Client1 from "../.././images/clientlogo1.png";
import Client2 from "../.././images/clientlogo2.png";
import Client3 from "../.././images/clientlogo3.png";

function Clients(props) {
  console.log(props);
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
            <img src={Client1} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client2} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client3} alt="sliderimg" />
          </div>
          <div className="client_logo_wrapper">
            <img src={Client1} alt="sliderimg" />
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
