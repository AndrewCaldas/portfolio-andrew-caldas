import React from "react";
import "./index.css";

const Text = ({ text, size, color, upperCase }) => {
  let textSize = size ? size : "";
  return (
    <span
      className={`main-text ${textSize} ${upperCase ? "text-uppercase" : ""}`}
      style={{ color: color }}
    >
      {text}
    </span>
  );
};

export default Text;
