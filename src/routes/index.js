import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
// import error404 from "../share/error404";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/portfolio" />;
        }}
      />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project/:id" component={Projects} />

      {/* page 404 */}
      {/* <Route exact path="*" component={error404} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
