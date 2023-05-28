import React from "react";
import "./BannerBtn.css";
import { Link } from "react-router-dom";

function BannerBtn() {
  return (
    <div className="banner__btn_wrapper">
      {/* <button className="btn_arr btn_contact">Contact US</button> */}
      <button className="btn_arr btn_folio">
        <Link to="/ourworks">Our Crafts</Link>
      </button>
    </div>
  );
}

export default BannerBtn;
