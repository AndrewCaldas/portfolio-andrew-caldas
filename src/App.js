import React from 'react';
import Header from './components/Header';
import Drawings from './components/Drawings';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const App = () => {
  return ( 
    <div className = "App">
      <Header title={"Andrew Caldas"}/>
    </div>
  );
}

export default App;