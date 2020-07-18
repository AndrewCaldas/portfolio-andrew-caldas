import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import error404 from "../pages/error404";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/sobre" component={About} />
      <Route exact path="/contato" component={Contact} />

      {/* page 404 */}
      {/* <Route exact path="*" component={error404} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
