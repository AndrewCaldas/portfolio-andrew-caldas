import React from "react";
import { Row, Col, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import Text from "../Text";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import i18n from "../../locales";
import "./index.css";

let NavLinks = [
  {
    id: 1,
    name: i18n.t("header.links.portfolio"),
    href: "#"
  },
  { id: 2, name: i18n.t("header.links.about"), href: "#" },
  { id: 3, name: i18n.t("header.links.contact"), href: "#" }
];

const Header = ({ title, backgroundColor, textColor }) => {
  let word_first = title ? title.split(" ")[0] : "";
  let word_second = title ? title.split(" ")[1] : "";

  return (
    <div className="header-main">
      <div
        className="header-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <Navbar>
          <Col>
            <NavbarBrand href="#" className="title">
              <span>
                <TextBold
                  text={"< " + word_first}
                  size={"medium"}
                  color={textColor}
                />
                <TextLight
                  text={word_second + " />"}
                  size={"medium"}
                  color={textColor}
                />
              </span>
            </NavbarBrand>
          </Col>
          <Col>
            {NavLinks && (
              <Nav className="links">
                {NavLinks.map((items, index) => (
                  <NavLink key={index} id={items.id} href={items.href}>
                    <Text text={items.name} color={textColor} />
                  </NavLink>
                ))}
              </Nav>
            )}
          </Col>
          <Col>
            <Text text={"PT/EN"} color={textColor} />
          </Col>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
