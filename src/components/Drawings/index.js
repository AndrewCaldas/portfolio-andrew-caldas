import React, { useEffect } from "react";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import { Col } from "react-bootstrap";
import "./index.css";

const identifyStrong = text => {
  const hasStrong = text.indexOf("<b>");
  if (hasStrong) {
    return true;
  } else {
    return false;
  }
};

const getInitial = text => {
  return text.substring(0, text.indexOf("<b>"));
};

const getEnd = text => {
  return text.substring(text.indexOf("</b>") + 4, text.length);
};

const getStrong = text => {
  let string = text.substring(text.indexOf("<b>"), text.indexOf("</b>"));
  return string.replace(/<b>/g, "");
};

const Drawings = ({
  title,
  description,
  twoSide,
  background,
  text,
  textLegal,
  withHeader
}) => {
  let varColor = background ? "#6747c7" : "transparent";

  return (
    <div className={"drawings-main" + (withHeader ? " extend-header" : "")}>
      <span
        className={background ? "bord" : ""}
        style={{ background: varColor }}
      ></span>
      <Col
        className={`drawings ${twoSide ? "drawings-left" : ""}`}
        style={{ background: varColor }}
      >
        {text ? (
          <div className="text">
            {identifyStrong(text) ? (
              <span>
                <TextLight
                  text={getInitial(text)}
                  size={"big"}
                  color={"#000"}
                />
                <TextBold text={getStrong(text)} size={"big"} color={"#000"} />
                <TextLight text={getEnd(text)} size={"big"} color={"#000"} />
              </span>
            ) : (
              <span>
                <TextLight text={text} size={"big"} color={"#000"} />
              </span>
            )}
            {/* <i>{textLegal ? textLegal : ""}</i> */}
          </div>
        ) : (
          <div>
            <span className="title">
              <TextBold
                text={title ? title : ""}
                color={background ? "#f4f6ff" : "#000"}
                size={"extra-big"}
              />
            </span>
            <span className="description">
              <TextLight
                text={description ? description : ""}
                color={background ? "#f4f6ff" : "#000"}
                size={"medium"}
              />
            </span>
          </div>
        )}
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
