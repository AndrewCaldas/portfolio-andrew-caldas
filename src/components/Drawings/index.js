import React from "react";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import { Col } from "react-bootstrap";
import "./index.css";

const Drawings = ({ title, description, twoSides }) => {
  let varColor = "#6747c7";
  return (
    <div className={"drawings-main"}>
      <span className="bord" style={{ background: varColor }}></span>
      <Col
        className={`drawings ${twoSides ? "drawings-left" : ""}`}
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
      {twoSides && (
        <Col className={`drawings-right`} style={{ background: varColor }}>
          <span className="box"></span>
          {/* <span className=""> */}
          <TextBold text={"Thinking"} color={"#f4f6ff"} size={"extra-big"} />
          <TextBold text={"Outside"} color={"#f4f6ff"} size={"extra-big"} />
          <TextLight text={"The Box!"} color={"#f4f6ff"} size={"extra-big"} />
          {/* </span> */}
        </Col>
      )}
    </div>
  );
};

export default Drawings;
