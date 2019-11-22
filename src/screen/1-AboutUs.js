import React, { Component } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class AboutUs extends Component {
  render() {
    const settings = {
      infiniteLoop: true,
      autoPlay: true,
      swipeable: false,
      centerMode: true,
      transitionTime: 2000,
      showArrows: false,
      showThumbs: false
    };
    return (
      <div className="p-grid">
        <div className="p-col-12 p-justify-center">
          <div className="card card-w-title">
            <h1 style={{ textAlign: "center" }}>Gombak Jungle School</h1>

            <div className="p-grid ">
              <div className="p-col-12 ">
                <div>
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
                </div>
              </div>
            </div>

            <TabView>
              <TabPanel header="About Us" leftIcon="pi pi-user">
                <h3 style={{ textAlign: "center" }}>
                  <p>
                    JSG is a leadership experiential empowerment program which
                    uses nature i.e. rainforest in Malaysia as a venue. Hosted
                    by Assistant Prof. Dr Norzalifa binti Zainal Abidin from
                    International Islamic University Malaysia (IIUM), with the
                    help of Major (R) Kalam Pie and the talented indigenous
                    'hidden gems' i.e master craftsmen and weavers, and
                    indigenous jungle experts. Jungle school helps to empower
                    the indigenous people in Gombak to share their cultural
                    knowledge and expertise.
                  </p>
                  <p>
                    The programs include survival skills of Orang Asli
                    (Peninsular Malaysia Indigenous People), learning about the
                    use of flora and fauna, the basic skills of food searching
                    and the traditional ways of the Orang Asli hut making,
                    camping, awareness of the rainforest sustainability, law of
                    the jungle, preparing food like the Orang Asli style and
                    tree planting program. 5 levels of survival course will be
                    offered for the public, since the beginning of early 2014.
                  </p>
                </h3>
              </TabPanel>
              <TabPanel header="Our Mission">
                <h3 style={{ textAlign: "center" }}>
                  <p>
                    To educate and motivate the Orang Asli community to empower
                    and share their cultural heritage to the public whilst
                    elevating their income.
                  </p>
                </h3>
              </TabPanel>
              <TabPanel header="Our Vision">
                <h3 style={{ textAlign: "center" }}>
                  <p>
                    To become catalyst to set world recognition of the beautiful
                    heritage of the Orang Asli in Peninsular Malaysia.
                  </p>
                </h3>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    );
  }
}
