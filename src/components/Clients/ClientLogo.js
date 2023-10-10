import React from "react";
import "./ClientLogo.css";
import Client1 from "../.././images/clientlogo/hc.png";
import Client2 from "../.././images/clientlogo/dig.png";
import Client3 from "../.././images/clientlogo/talent.png";
import Client4 from "../.././images/clientlogo/orl.png";
import Client5 from "../.././images/clientlogo/erly.png";
import Client6 from "../.././images/clientlogo/pcm.png";
import Client7 from "../.././images/clientlogo/mag.png";

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
