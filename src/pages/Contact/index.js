import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Drawings from "../../components/Drawings";
import TextBold from "../../components/Text/TextBold";
import TextLight from "../../components/Text/TextLight";
import { Row, Col, Container } from "react-bootstrap";

import "./index.css";

const Contact = () => {
  return (
    <div className="page-contact-main">
      <Header background={true} />

      <Row className="row-line">
        <Col xs={12} style={{ marginTop: "100px" }}>
          <Drawings
            title={"Contato"}
            description={"Abaixo você poderá entrar em contato comigo!"}
            background={true}
          />
        </Col>

        <Col xs={12}>
          <div className="section-contact">
            <TextLight text={"(11) 94573-5656"} color={"#000"} size={"medium"} />
            <TextLight text={"contandrewcaldas@gmail.com"} color={"#000"} size={"medium"} />
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Contact;
