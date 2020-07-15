import React from 'react';
import './index.css';

const Drawings = ({ color, format }) => {
  let varColor = color ? color : '';
  // let varFormat = format ? format : '';
  return (
    <div className={"drawings-main"}>
      <span className="drawings" style={{background: varColor}}></span>
      <span className="mini-drawings" style={{background: varColor}}></span>
    </div>
  )
}

export default Drawings;

