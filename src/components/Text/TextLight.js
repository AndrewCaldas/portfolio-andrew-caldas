import React from "react";
import Text from ".";
import "./index.css";

const TextLight = ({ text, color, size }) => {
  return (
    <span className="text-light">
      <Text text={text} color={color} size={size} />
    </span>
  );
};

export default TextLight;
