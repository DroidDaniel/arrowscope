import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Clients from "./Clients/Clients";
import Title from "./Utility/Title";
import Works from "./Works/Works";
import Showcase from "./Showcase/Showcase";
import About from "./About/About";
import Footer from "./Footer/Footer";


function ArrCore() {
  return (
    <>
      <Navbar />
      <Banner />
      <About/>
      {/* <Services /> */}
      <Works/>
      <Showcase/>
      <div className="arrowscope_container">
        <Title title="Our Clients" />
      </div>
      <Clients dir={false} />
      <Clients dir={true} />
      <Clients dir={false} />
      <Footer/>
    </>
  );
}

export default ArrCore;
