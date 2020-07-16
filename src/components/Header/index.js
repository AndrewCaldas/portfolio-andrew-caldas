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
    href: "/portfolio"
  },
  { id: 2, name: i18n.t("header.links.about"), href: "/sobre" },
  { id: 3, name: i18n.t("header.links.contact"), href: "/contato" }
];

const Header = ({ title }) => {
  let word_first = title ? title.split(" ")[0] : "Andrew";
  let word_second = title ? title.split(" ")[1] : "Caldas";

  return (
    <div className="header-main">
      <div className="header-container" style={{ backgroundColor: "#6747c7" }}>
        <Navbar>
          <Col>
            <NavbarBrand href="#" className="title">
              <span>
                <TextBold
                  text={"< " + word_first}
                  size={"medium"}
                  color={"#f4f6ff"}
                  upperCase={false}
                />
                <TextLight
                  text={word_second + " />"}
                  size={"medium"}
                  color={"#f4f6ff"}
                  upperCase={false}
                />
              </span>
            </NavbarBrand>
          </Col>
          <Col>
            {NavLinks && (
              <Nav className="links">
                {NavLinks.map((items, index) => (
                  <NavLink key={index} id={items.id} href={items.href}>
                    <Text text={items.name} color={"#f4f6ff"} />
                  </NavLink>
                ))}
              </Nav>
            )}
          </Col>
          <Col>
            <Text text={"PT/EN"} color={"#f4f6ff"} />
          </Col>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
