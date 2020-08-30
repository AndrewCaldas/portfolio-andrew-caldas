import React from "react";
import TextLight from "../Text/TextLight";
import { Row, Col } from "react-bootstrap";
import OwnerImage from "../Owner";
import "./index.css";

const Institutional = ({ id, text, img }) => {
  return (
    <Row className="institutional-main" id={"institutional-" + id}>
      <Col className="column">
        <TextLight color="#000" size="small" text={text} />
      </Col>
      <span className="separetor" />
      <Col className="column">
        <OwnerImage src={img} />
      </Col>
    </Row>
  );
};

export default Institutional;
