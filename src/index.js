import React from "react";
import ReactDOM from "react-dom";
// import { HashRouter } from 'react-router-dom'
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-vertical-timeline-component/style.min.css";
import * as serviceWorker from "./serviceWorker";

const AppCore = () => (
  // <HashRouter>
  <Router />
  // </HashRouter>
);

ReactDOM.render(<AppCore />, document.getElementById("root"));

serviceWorker.unregister();
