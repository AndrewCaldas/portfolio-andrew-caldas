import React, { useEffect, useState } from "react";
import { Col, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import Text from "../Text";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import i18n from "../../locales";
import "./index.css";

const detectScrolling = (setClassScrolling, param, background) => {
  window.onscroll = function () {
    if (window.pageYOffset > param) {
      setClassScrolling("scrolling-class");
    } else {
      if (background) {
        setClassScrolling("default-class-background");
      } else {
        setClassScrolling("default-class");
      }
    }
  };
};

const scrollToBottom = (ref) => {
  if (!ref.current) return
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

let NavLinks = [
  {
    id: 1,
    name: i18n.t("header.links.portfolio"),
    href: "/portfolio",
  },
  { id: 3, name: i18n.t("header.links.contact"), href: "/contact" }
];

const Header = ({ title, state, background, navLinks }) => {
  let word_first = title ? title.split(" ")[0] : "Andrew";
  let word_second = title ? title.split(" ")[1] : "Caldas";

  let status = state ? state : "white";
  let colortext = status === "dark" ? "#1b262c" : "#f4f6ff";

  let [classScrolling, setClassScrolling] = useState(
    background ? "default-class-background" : ""
  );

  const [navlinksState, setNavlinksState] = useState(NavLinks)

  useEffect(() => {
    if (!navLinks || navLinks.length === 0) return
    setNavlinksState(navLinks)
  }, [navLinks])

  useEffect(() => {
    detectScrolling(setClassScrolling, 1, background);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header-main">
      <div className={`header-container ${classScrolling}`}>
        <Navbar>
          <Col className="brand">
            <NavbarBrand href="/" className="title">
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
          <Col className="header-links">
            {navlinksState && navlinksState.length > 0 && (
              <Nav className="links">
                {navlinksState.map((items, index) => (
                  <NavLink
                    key={index}
                    id={`nav-${items.id}`}
                    href={items.href}
                    onClick={() => items.ref && scrollToBottom(items.ref)}
                  >
                    <Text text={items.name} color={colortext} />
                  </NavLink>
                ))}
              </Nav>
            )}
          </Col>
          <Col className="locale">
            {/* <Text text={"PT/EN"} color={colortext} /> */}
          </Col>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
