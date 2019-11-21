import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ResponsiveCarousel extends Component {
  render() {
    // const settings = {
    //   arrowsBlock: true,
    //   autoplay: true,
    //   dots: true,
    //   duration: 500,
    //   wheel: false,
    //   pauseOnHover: false,
    //   gutter: 100,
    //   centerPadding: 5,
    //   shift: 100
    // };
    return (
      <Carousel
        infiniteLoop
        autoPlay
        swipeable={false}
        centerMode
        transitionTime={1500}
        showArrows={false}
        showThumbs={false}
      >
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
