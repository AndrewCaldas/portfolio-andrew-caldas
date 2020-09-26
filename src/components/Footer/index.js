import React from "react";
import TextBold from "../Text/TextBold";
// import TextLight from "../Text/TextLight";
import { Col } from "react-bootstrap";
import iconLinkedlin from "../../assets/icons/linkedin.png";
import iconGithub from "../../assets/icons/github.png";
import iconMedium from "../../assets/icons/medium.png";
import "./index.css";

const listIcons = () => {
  return [
    {
      id: 1,
      name: "AC",
      img: false,
      link: "/",
      brand: true
    },
    {
      id: 2,
      name: "Linkdlin",
      img: iconLinkedlin,
      link: "https://www.linkedin.com/in/andrew-caldas/"
    },
    {
      id: 3,
      name: "GitHub",
      img: iconGithub,
      link: "https://github.com/AndrewCaldas"
    },
    {
      id: 4,
      name: "Medium",
      img: iconMedium,
      link: "https://medium.com/@andrewcaldas"
    }
  ];
};

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="inside">
        {listIcons().length > 0 &&
          listIcons().map((item, index) => (
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
