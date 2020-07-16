import React from "react";
import Text from ".";
import "./index.css";

const TextBold = ({ text, color, size, upperCase }) => {
  return (
    <span className="text-bold">
      <Text text={text} color={color} upperCase={upperCase} size={size} />
    </span>
  );
};

export default TextBold;
