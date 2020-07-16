import React from "react";
import Text from ".";
import "./index.css";

const TextLight = ({ text, color, size, upperCase }) => {
  return (
    <span className="text-light">
      <Text text={text} color={color} upperCase={upperCase} size={size} />
    </span>
  );
};

export default TextLight;
