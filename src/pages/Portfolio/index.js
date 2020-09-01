import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";
import Cards from "../../components/Cards";
import SlickSlider from "../../components/SlickSlider";
import Institutional from "../../components/Institutional";
// import i18n from "../../locales";
import Timeline from "../../components/Timeline";
import PortfolioModel from "./Model";

const PageObject = PortfolioModel();

const Portfolio = () => {
  return (
    <div>
      <Header />
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
                description={item.description}
                date={item.date}
                img={item.img}
              />
            </span>
          ))}
      </div>

      <div id="session-about">
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
      </div>
    </div>
  );
};

export default Portfolio;
