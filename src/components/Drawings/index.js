import React from "react";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import { Col } from "react-bootstrap";
import "./index.css";

const Drawings = ({ title, description, twoSide }) => {
  let varColor = "#6747c7";
  return (
    <div className={"drawings-main"}>
      <span className="bord" style={{ background: varColor }}></span>
      <Col
        className={`drawings ${twoSide ? "drawings-left" : ""}`}
        style={{ background: varColor }}
      >
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
      </Col>
      {twoSide && (
        <Col className={`drawings-right`} style={{ background: varColor }}>
          <TextBold text={twoSide} color={"#f4f6ff"} size={"extra-big"} />
        </Col>
      )}
    </div>
  );
};

export default Drawings;
