import React from "react";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import { Row, Col } from "react-bootstrap";
import "./index.css";

const Drawings = ({ title, description }) => {
  let varColor = "#6747c7";
  return (
    <div className={"drawings-main"}>
      <div className="drawings" style={{ background: varColor }}>
        <span className="title">
          <TextBold
            text={title ? title : ""}
            color={"#f4f6ff"}
            size={"extra-big"}
          />
        </span>
        <span className="description">
          <TextLight
            text={description ? description : ""}
            color={"#f4f6ff"}
            size={"medium"}
          />
        </span>
      </div>
      <div className="mini-drawings" style={{ background: varColor }}></div>
    </div>
  );
};

export default Drawings;
