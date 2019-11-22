import React, { Component } from "react";
//import { Dialog } from "primereact/dialog";
import { Lightbox } from "primereact/lightbox";
//import { Button } from "primereact/button";
import { CarService } from "../service/CarService";

export default class OverlaysDemo extends Component {
  constructor() {
    super();
    this.state = {
      dataTableValue: [],
      display: false,
      images: [
        {
          source: "/assets/img/sopranos1.jpg",
          thumbnail: "/assets/img/sopranos1_small.jpg",
          title: "Sopranos 1"
        },
        {
          source: "/assets/img/sopranos1.jpg",
          thumbnail: "/assets/img/sopranos1_small.jpg",
          title: "Sopranos 1"
        },
        {
          source: "/assets/img/sopranos2.jpg",
          thumbnail: "/assets/img/sopranos2_small.jpg",
          title: "Sopranos 2"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos3.jpg",
          thumbnail: "/assets/img/sopranos3_small.jpg",
          title: "Sopranos 3"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos1.jpg",
          thumbnail: "/assets/img/sopranos1_small.jpg",
          title: "Sopranos 1"
        },
        {
          source: "/assets/img/sopranos2.jpg",
          thumbnail: "/assets/img/sopranos2_small.jpg",
          title: "Sopranos 2"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos3.jpg",
          thumbnail: "/assets/img/sopranos3_small.jpg",
          title: "Sopranos 3"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos1.jpg",
          thumbnail: "/assets/img/sopranos1_small.jpg",
          title: "Sopranos 1"
        },
        {
          source: "/assets/img/sopranos2.jpg",
          thumbnail: "/assets/img/sopranos2_small.jpg",
          title: "Sopranos 2"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos3.jpg",
          thumbnail: "/assets/img/sopranos3_small.jpg",
          title: "Sopranos 3"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos1.jpg",
          thumbnail: "/assets/img/sopranos1_small.jpg",
          title: "Sopranos 1"
        },
        {
          source: "/assets/img/sopranos2.jpg",
          thumbnail: "/assets/img/sopranos2_small.jpg",
          title: "Sopranos 2"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos3.jpg",
          thumbnail: "/assets/img/sopranos3_small.jpg",
          title: "Sopranos 3"
        },
        {
          source: "assets/demo/images/gjsImages/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        },
        {
          source: "/assets/img/sopranos4.jpg",
          thumbnail: "/assets/img/sopranos4_small.jpg",
          title: "Sopranos 4"
        }
      ]
    };

    this.carService = new CarService();
  }
  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12">
          <Lightbox images={this.state.images} />
        </div>
      </div>
    );
  }
}
