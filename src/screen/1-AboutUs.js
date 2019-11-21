import React, { Component } from "react";
//import CarouselDemo from "../prop/CarouselDemo";
import ResponsiveCarousel from "../prop/responsiveCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="p-grid p-align-stretch">
        <div className="p-col-6">
          <div className="card">
            <h1 style={{ textAlign: "center" }}>About Us</h1>
            <ResponsiveCarousel />
            {/* <CarouselDemo /> */}
          </div>
        </div>
        <div className="p-col-6">
          <div className="card">
            <h1 style={{ textAlign: "center" }}>About Us</h1>
            <ResponsiveCarousel />
            asfdadafd
            {/* <CarouselDemo /> */}
          </div>
        </div>
      </div>
    );
  }
}
