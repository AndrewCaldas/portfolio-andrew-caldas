import React from 'react';
import './index.css';

const Text = ({ text, size, color }) => {
  let textSize = size ? size : '';
  return (
    <span className={`main-text ${textSize}`} style={{ color: color }}>
      {text}
    </span>
  )
}

export default Text;