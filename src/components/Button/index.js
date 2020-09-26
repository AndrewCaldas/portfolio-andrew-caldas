import React from "react";
import { Button } from "react-bootstrap";
import TextLight from "../Text/TextLight";

const ButtonSimple = ({ text, _onClick, size, disabled, variant }) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={_onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default ButtonSimple;
