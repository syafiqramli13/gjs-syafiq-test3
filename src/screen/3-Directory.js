import React, { Component } from "react";
import { TabView, TabPanel } from "primereact/tabview";

export class Directory extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1 style={{ textAlign: "center" }}>Directory</h1>
            <TabView>
              <TabPanel header="Tools">
                <div>
                  <div className="p-col-12">
                    <h1>Tools</h1>
                    Use this page to start from scratch and place your custom
                    content.
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Handcrafts">
                <div>
                  <div className="p-col-12">
                    <h1>Handcrafts</h1>
                    Use this page to start from scratch and place your custom
                    content.
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    );
  }
}
