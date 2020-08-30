import React from "react";
import TextLight from "../Text/TextLight";
import { Row, Col } from "react-bootstrap";
import OwnerImage from "../Owner";
import imgProfile from "../../assets/img/img-profile.jpeg";
import "./index.css";

const Institutional = () => {
  return (
    <Row className="institutional-main">
      <Col className="column">
        <TextLight
          color="#000"
          size="small"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Col>
      <span className="separetor" />
      <Col className="column">
        <OwnerImage src={imgProfile} />
      </Col>
    </Row>
  );
};

export default Institutional;
