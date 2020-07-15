import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Router from './routes/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

const AppCore = () => (
  <HashRouter>
    <Router/>
  </HashRouter>
)

ReactDOM.render(
  <AppCore />,
  document.getElementById('root')
);

serviceWorker.unregister();
