import React from "react";
import Text from ".";
import "./index.css";

const TextBold = ({ text, color, size }) => {
  return (
    <span className="text-bold">
      <Text text={text} color={color} size={size} />
    </span>
  );
};

export default TextBold;
