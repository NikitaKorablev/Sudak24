import React from "react";
import image from "../assets/images/BB1eWs7m.jpg";

const Gallery = () => (
  <div className="wrapper" id="wrapper">
    <div className="theme">
      <div id="owl-demo" className="owl-carousel owl-theme">
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
        <div className="item">
          <img className="owl-lazy" data-src={image} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
