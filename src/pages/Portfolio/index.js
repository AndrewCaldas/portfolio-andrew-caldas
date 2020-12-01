import React, { useRef } from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";
import Cards from "../../components/Cards";
import SlickSlider from "../../components/SlickSlider";
import Institutional from "../../components/Institutional";
// import i18n from "../../locales";
import Timeline from "../../components/Timeline";
import PortfolioModel from "./Model";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import i18n from "../../locales";

const PageObject = Object.assign({}, PortfolioModel());

const Portfolio = () => {
  const history = useHistory();

  const sessionAbout = useRef(null)

  let NavLinks = [
    {
      id: 1,
      name: i18n.t("header.links.portfolio"),
      href: "/portfolio",
    },
    {
      id: 2,
      name: i18n.t("header.links.about"),
      ref: sessionAbout
    },
    { id: 3, name: i18n.t("header.links.contact"), href: "/contact" }
  ];

  return (
    <div>
      <Header background={false} navLinks={NavLinks} />
      <SlickSlider
        list={PageObject.slides.images}
        mask={true}
        title={PageObject.slides.title}
        description={PageObject.slides.description}
      />

      <div id="session-portfolio">
        <Drawings
          text={PageObject.portfolio.title}
          background={false}
        // textLegal={i18n.t("portfolio.text_legal")}
        />

        {PageObject.portfolio.projects &&
          PageObject.portfolio.projects.map((item, index) => (
            <span key={index}>
              <Cards
                rowIndex={index}
                objectId={item.id}
                title={item.title}
                description={item.abstract}
                date={item.date}
                img={item.img}
                type={"big"}
                _onClick={() => {
                  history.push(`/project/${item.id}`);
                }}
              />
            </span>
          ))}
      </div>

      <div id="session-about" ref={sessionAbout}>
        <Drawings
          title={PageObject.about.title}
          description={PageObject.about.description}
          background={PageObject.about.background}
        />

        <Institutional
          id={PageObject.about.owner.id}
          text={PageObject.about.owner.text}
          img={PageObject.about.owner.img}
        />

        <Timeline
          title={PageObject.about.title_timeline}
          timeline={PageObject.about.timeline}
        />

        <Categories
          objectId={PageObject.about.categories.id}
          title={PageObject.about.categories.title}
          categories={PageObject.about.categories.listCategories}
        />

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
