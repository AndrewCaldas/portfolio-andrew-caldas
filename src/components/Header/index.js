import React, { useEffect, useLayoutEffect, useState } from "react";
import { Col, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
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

// const getScrollPosition = () => {
//   var doc = document.documentElement;
//   var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
//   var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
//   debugger;
// };

const handleScroll = (setScrolling, scrolling) => {
  if (window.scrollY === 0 && scrolling === true) {
    setScrolling(false);
  } else if (window.scrollY !== 0 && scrolling !== true) {
    setScrolling(true);
  }
};

const Header = ({ title, state }) => {
  let word_first = title ? title.split(" ")[0] : "Andrew";
  let word_second = title ? title.split(" ")[1] : "Caldas";

  let status = state ? state : "white";

  let colortext = status === "dark" ? "#1b262c" : "#f4f6ff";

  let backgroundCol = "transparent";
  // rgba(103, 71, 199, 0.85)
  // "#6747c7"

  let [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // window.onscroll(getScrollPosition());
    window.addEventListener("scroll", handleScroll(setScrolling, scrolling));
  }, []);

  useLayoutEffect(() => {
    // your pre layout code (or 'effect') here.
    window.removeEventListener("scroll", handleScroll(setScrolling, scrolling));
  }, []);

  console.log("scrolling: ", scrolling);

  return (
    <div className="header-main">
      <div
        className="header-container"
        style={{ backgroundColor: backgroundCol }}
      >
        <Navbar>
          <Col>
            <NavbarBrand href="#" className="title">
              <span>
                <TextBold
                  text={"< " + word_first}
                  size={"medium"}
                  color={colortext}
                  upperCase={false}
                />
                <TextLight
                  text={word_second + " />"}
                  size={"medium"}
                  color={colortext}
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
                    <Text text={items.name} color={colortext} />
                  </NavLink>
                ))}
              </Nav>
            )}
          </Col>
          <Col>
            <Text text={"PT/EN"} color={colortext} />
          </Col>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
