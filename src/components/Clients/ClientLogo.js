import React from "react";
import "./ClientLogo.css";
import Client1 from "../.././images/clientlogo/hc.jpg";
import Client2 from "../.././images/clientlogo/dig.jpg";
import Client3 from "../.././images/clientlogo/talent.jpg";
import Client4 from "../.././images/clientlogo/orl.jpg";
import Client5 from "../.././images/clientlogo/erly.jpg";
import Client6 from "../.././images/clientlogo/pcm.jpg";
import Client7 from "../.././images/clientlogo/mag.jpg";

export default function ClientLogo() {
  return (
    <div>
      <section className="clients_sec" id="arr_clients">
        <div className="arrowscope_container">
          <div className="client_logo_cont">
            <div className="client_logos">
              <img src={Client1} alt="sliderimg" />
            </div>
            <div className="client_logos">
              <img src={Client2} alt="sliderimg" />
            </div>
            <div className="client_logos">
              <img src={Client3} alt="sliderimg" />
            </div>
            <div className="client_logos">
              <img src={Client4} alt="sliderimg" />
            </div>
            <div className="client_logos">
              <img src={Client5} alt="sliderimg" />
            </div>
            <div className="client_logos">
              <img src={Client6} alt="sliderimg" />
            </div>
            <div className="client_logos">
              <img src={Client7} alt="sliderimg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
