import React, { Component } from "react";
// import ResponsiveCarousel from "../components/resCarouselGallery";
// import ImageViewer from "../components/ImageViewer";
import OverlaysDemo from "../components/ImageViewer";

export default class Gallery extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <h1 style={{ textAlign: "center" }}>Gallery</h1>
            {/* <ResponsiveCarousel /> */}
            {/* <ImageViewer /> */}
            <OverlaysDemo />
          </div>
        </div>
      </div>
    );
  }
}
