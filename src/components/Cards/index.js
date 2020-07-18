import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import PlaceHolder from "../../assets/img/placeholder-image.png";
import "./index.css";

const typeImage = (img, height, width) => {
  let on = window.navigator.onLine;
  let uploadImage = img && on ? img : PlaceHolder;

  if (on && !img) {
    return "https://via.placeholder.com/" + width + "x" + height;
  } else {
    return uploadImage;
  }
};

const detectAddOrEven = num => {
  var n = num;
  if (n % 2 == 0) return 0;
  if (n % 2 == 1) return 1;
};

const Cards = ({ objectId, rowIndex, title, description, date, img }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const getSizeElement = e => {
    setHeight(Math.round(e.clientHeight));
    setWidth(Math.round(e.clientWidth));
  };

  useEffect(() => {
    let element = document.getElementById("place-holder");
    getSizeElement(element);
  }, []);

  return (
    <div id={objectId ? objectId : null} className="cards-main">
      <Container>
        <div
          className="left-side"
          style={detectAddOrEven(rowIndex) == 0 ? { order: 1 } : { order: 2 }}
        >
          <span className="post">
            <TextLight
              text={date ? date : ""}
              size={"extra-small"}
              color={"#000"}
            />
            <TextBold text={title ? title : ""} size={"big"} color={""} />
            <TextLight
              text={description ? description : ""}
              color={"#000"}
              size={"small"}
            />
            <TextLight />
          </span>
        </div>
        <div
          id="place-holder"
          className="rigth-side"
          style={detectAddOrEven(rowIndex) == 0 ? { order: 2 } : { order: 1 }}
        >
          <img src={typeImage(img, height, width)} width="617" height="504" />
        </div>
      </Container>
    </div>
  );
};

export default Cards;
