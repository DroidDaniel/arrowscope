import React from "react";
import Banner from "./Banner/Banner";
import AdminFooter from "./Admin/AdminFooter";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Clients from "./Clients/Clients";
import Title from "./Utility/Title";

function ArrCore() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <div className="arrowscope_container">
        <Title title="Our Clients" />
      </div>
      <Clients dir={false} />
      <Clients dir={true} />
      <Clients dir={false} />
      <AdminFooter />
    </>
  );
}

export default ArrCore;
