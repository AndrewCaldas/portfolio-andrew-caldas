import React from "react";
import ButtonSimple from "../";
import "./index.css";

const ButtonBorder = ({ text, _onClick, size, disabled, variant }) => {
  return (
    <div className="button-border">
      <ButtonSimple
        variant={variant}
        size={size}
        text={text}
        _onClick={_onClick}
        disabled={disabled}
      />
    </div>
  );
};

export default ButtonBorder;
