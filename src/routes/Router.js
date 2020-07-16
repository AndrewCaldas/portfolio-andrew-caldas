import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Portfolio from "../pages/Portfolio";
import error404 from "../pages/error404";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/portfolio" component={Portfolio} />

      {/* page 404 */}
      <Route exact path="*" component={error404} />
    </Switch>
  </BrowserRouter>
);

export default Router;
