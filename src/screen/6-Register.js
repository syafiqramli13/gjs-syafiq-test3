import React, { Component } from "react";
import { CarService } from "../service/CarService";
import { NodeService } from "../service/NodeService";
import { EventService } from "../service/EventService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      dataTableValue: [],
      dataViewValue: [],
      picklistSourceCars: [],
      picklistTargetCars: [],
      orderlistCars: [],
      treeData1: [],
      treeData2: [],
      selectedFile: null,
      selectedFiles: null,
      documents: [],
      documentsSelection: null,
      fullCalendarEvents: [],
      layout: "list",
      sortOptions: [
        { label: "Newest First", value: "!year" },
        { label: "Oldest First", value: "year" },
        { label: "Brand", value: "brand" }
      ]
    };

    this.carService = new CarService();
    this.nodeService = new NodeService();
    this.eventService = new EventService();
  }

  componentDidMount() {
    this.carService
      .getCarsMedium()
      .then(data => this.setState({ dataTableValue: data }));
  }

  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>DataTable</h1>
            <DataTable
              value={this.state.dataTableValue}
              paginatorPosition="both"
              selectionMode="single"
              header="List of Cars"
              paginator={true}
              rows={10}
              responsive={true}
            >
              <Column field="vin" header="Name" sortable={true} />
              <Column field="year" header="Year" sortable={true} />
              <Column field="brand" header="Email" sortable={true} />
              <Column field="color" header="Number Phone" sortable={true} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
