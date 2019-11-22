import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ResponsiveCarousel extends Component {
  render() {
    const settings = {
      infiniteLoop: true,
      autoPlay: true,
      swipeable: false,
      centerMode: true,
      transitionTime: 2000,
      showArrows: false,
      showThumbs: true
    };
    return (
      <Carousel {...settings}>
        <div>
          <img src="/assets/img/gjs1.jpg" alt="pictures" />

          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="/assets/img/gjs2.jpg" alt="pictures" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="/assets/img/gjs3.jpg" alt="pictures" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="/assets/img/gjs4.jpg" alt="pictures" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="/assets/img/gjs5.jpg" alt="pictures" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
    );
  }
}
