import React from "react";
import { Container } from "react-bootstrap";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import "./index.css";

const Cards = () => {
  return (
    <div className="cards-main">
      <Container>
        <div className="left-side">
          <span className="post">
            <TextBold text={"Titulo"} size={"big"} />
            <TextLight text={"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut."} color={"#000"} size={"small"} />
            <TextLight />
          </span>
        </div>
        <div className="rigth-side"></div>
      </Container>
    </div>
  );
};

export default Cards;
