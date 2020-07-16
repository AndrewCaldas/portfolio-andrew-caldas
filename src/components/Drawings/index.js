import React from "react";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import { Row, Col } from "react-bootstrap";
import "./index.css";

const Drawings = ({ color, title, description, textColor }) => {
  let varColor = color ? color : "";
  return (
    <div className={"drawings-main"}>
      <div className="drawings" style={{ background: varColor }}>
        <span className="title">
          <TextBold
            text={title ? title : ""}
            color={textColor ? textColor : "#000"}
            size={"extra-big"}
          />
        </span>
        <span className="description">
          <TextLight
            text={description ? description : ""}
            color={textColor ? textColor : "#000"}
            size={"medium"}
          />
        </span>
      </div>
      <div className="mini-drawings" style={{ background: varColor }}></div>
    </div>
  );
};

export default Drawings;
