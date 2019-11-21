import React, { Component } from "react";
import Slider from "infinite-react-carousel";

export default class InfiniteSlider extends Component {
  render() {
    const settings = {
      arrowsBlock: true,
      autoplay: true,
      dots: true,
      duration: 500,
      wheel: false,
      pauseOnHover: false,
      gutter: 100,
      centerPadding: 5,
      shift: 100
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="/assets/img/gjs1.jpg"
              //   style={{ size: "5px" }}
              alt="pictures"
              className="responsive-image__image"
            />
          </div>
          <div>
            <img
              src={"assets/layout/images/naim.jpeg"}
              //   style={{ size: "5px" }}
              alt="pictures"
            />
          </div>
          <div>
            <img
              src={"assets/layout/images/naim.jpeg"}
              //   style={{ size: "5px" }}
              alt="pictures"
            />
          </div>
          <div>
            <img
              src={"assets/layout/images/naim.jpeg"}
              //   style={{ size: "5px" }}
              alt="pictures"
            />
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
