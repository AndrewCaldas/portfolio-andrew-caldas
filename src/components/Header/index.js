import React, { useEffect, useState } from "react";
import { Col, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import Text from "../Text";
import TextBold from "../Text/TextBold";
import TextLight from "../Text/TextLight";
import i18n from "../../locales";
// import { useHistory } from "react-router-dom";
import "./index.css";

// let auxPositionElement = null;

let NavLinks = [
  {
    id: 1,
    name: i18n.t("header.links.portfolio"),
    href: "/portfolio",
    component: "session-portfolio"
  },
  {
    id: 2,
    name: i18n.t("header.links.about"),
    href: "/about"
    // component: "session-about"
  },
  { id: 3, name: i18n.t("header.links.contact"), href: "/contact" }
];

const detectScrolling = (setClassScrolling, param, background) => {
  window.onscroll = function() {
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

// const autoScrolling = component => {
//   if (!component) return;
//   let e = document.getElementById(component);
//   if (e !== null) {
//     let getYPosition = e.getBoundingClientRect().top - 100;
//     // let teste = e.ScrollTop;
//     // debugger;
//     if (getYPosition > 0) {
//       document.documentElement.scrollTo(0, getYPosition);
//     } else {
//       document.location.href = "#" + component;
//     }
//   }
// };

const Header = ({ title, state, background }) => {
  let word_first = title ? title.split(" ")[0] : "Andrew";
  let word_second = title ? title.split(" ")[1] : "Caldas";

  let status = state ? state : "white";
  let colortext = status === "dark" ? "#1b262c" : "#f4f6ff";

  let [classScrolling, setClassScrolling] = useState(
    background ? "default-class-background" : ""
  );

  // const history = useHistory();

  useEffect(() => {
    // detectScrolling(setScrolling, 425);
    detectScrolling(setClassScrolling, 1, background);
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
            {NavLinks && (
              <Nav className="links">
                {NavLinks.map((items, index) => (
                  <NavLink
                    key={index}
                    id={"nav-" + items.id}
                    href={items.href}
                    // onClick={() => autoScrolling(items.component)}
                  >
                    <Text text={items.name} color={colortext} />
                  </NavLink>
                ))}
              </Nav>
            )}
          </Col>
          <Col className="locale">
            <Text text={"PT/EN"} color={colortext} />
          </Col>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
