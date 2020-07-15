import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Portfolio from '../pages/Portfolio';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/portfolio" component={Portfolio}/>
    </Switch>
  </BrowserRouter>
)

export default Router;