import React, { Component } from "react";
import InfiniteSlider from "../prop/infiniteCarousel";

export default class Gallery extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card" style={{ margin: "0px" }}>
            <h1 style={{ textAlign: "center" }}>Gallery</h1>
            <div>
              <InfiniteSlider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
