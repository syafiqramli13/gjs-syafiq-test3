import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppProfile } from "./AppProfile";
import { Route } from "react-router-dom";
import AboutUs from "./screen/1-AboutUs";
import Gallery from "./screen/2-Gallery";
import { Directory } from "./screen/3-Directory";
import { Scanner } from "./screen/4-Scanner";
import { ContactUs } from "./screen/5-ContactUs";
import { Register } from "./screen/6-Register";
import { EmptyPage } from "./screen/EmptyPage";
import { Documentation } from "./screen/Documentation";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./layout/layout.scss";
import "./App.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }
  //sidebar listmenu
  createMenu() {
    this.menu = [
      {
        label: "About Us",
        icon: "pi pi-fw pi-info",
        command: () => {
          window.location = "#/";
        }
      },
      {
        label: "Gallery",
        icon: "pi pi-fw pi-image",
        command: () => {
          window.location = "#/Gallery";
        }
      },
      {
        label: "Directory",
        icon: "pi pi-fw pi-list",
        command: () => {
          window.location = "#/directory";
        }
      },
      {
        label: "Scanner",
        icon: "pi pi-fw pi-camera",
        command: () => {
          window.location = "#/scanner";
        }
      },
      {
        label: "ContactUs",
        icon: "pi pi-fw pi-user",
        command: () => {
          window.location = "#/ContactUs";
        }
      },
      {
        label: "Register",
        icon: "pi pi-fw pi-sign-in",
        command: () => {
          window.location = "#/Register";
        }
      },
      {
        label: "Empty Pages",
        icon: "pi pi-fw pi-file",
        command: () => {
          window.location = "#/empty";
        }
      },
      {
        label: "Documentation",
        icon: "pi pi-fw pi-question",
        command: () => {
          window.location = "#/documentation";
        }
      },
      {
        label: "View Source",
        icon: "pi pi-fw pi-search",
        command: () => {
          window.location = "https://github.com/primefaces/sigma";
        }
      },
      {
        label: "Sidebar Menu Colors",
        icon: "pi pi-fw pi-align-left",
        items: [
          {
            label: "Dark",
            icon: "pi pi-fw pi-bars",
            command: () => this.setState({ layoutColorMode: "dark" })
          },
          {
            label: "Light",
            icon: "pi pi-fw pi-bars",
            command: () => this.setState({ layoutColorMode: "light" })
          }
        ]
      }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }
  //
  //
  //
  //
  //
  //
  render() {
    // const logo =
    //   this.state.layoutColorMode === "dark"
    //     ? "assets/layout/images/logo-white.svg"
    //     : "assets/layout/images/logo.svg";

    const wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });

    const sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark",
      "layout-sidebar-light": this.state.layoutColorMode === "light"
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={el => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          {/* <div className="layout-logo">
            <img alt="Logo" src={logo} />
          </div> */}
          <AppProfile />

          <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
        </div>

        <div className="layout-main">
          <Route path="/" exact component={AboutUs} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Directory" component={Directory} />
          <Route path="/Scanner" component={Scanner} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Register" component={Register} />
          <Route path="/empty" component={EmptyPage} />
          <Route path="/documentation" component={Documentation} />
        </div>

        <AppFooter />

        <div className="layout-mask"></div>
      </div>
    );
  }
}
