import React from "react";
import TextBold from "../Text/TextBold";
// import TextLight from "../Text/TextLight";
import { Col } from "react-bootstrap";
import "./index.css";

const Footer = ({ listIcons }) => {
  return (
    <div className="footer-main">
      <div className="inside">
        {listIcons.length > 0 &&
          listIcons.map((item, index) => (
            <Col key={index} id={"footer-" + item.id} className="column">
              {!item.img ? (
                <TextBold text={item.name} color="#000" size="big" />
              ) : (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt="" />
                </a>
              )}
            </Col>
          ))}
      </div>
    </div>
  );
};

export default Footer;
