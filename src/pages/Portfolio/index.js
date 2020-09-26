import React from "react";
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

const PageObject = Object.assign({}, PortfolioModel());

const Portfolio = () => {
  const history = useHistory();

  return (
    <div>
      <Header background={false} />
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

// let listCategories = {
//   id: 1,
//   title: "Hobbies",
//   listCategories: [
//     {
//       id: 1,
//       name: "teste 1",
//       description:
//         "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă",
//       img: "",
//       link: ""
//     },
//     {
//       id: 2,
//       name: "teste 2",
//       description:
//         "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă",
//       img: "",
//       link: ""
//     },
//     {
//       id: 3,
//       name: "teste 3",
//       description:
//         "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă",
//       img: "",
//       link: ""
//     }
//   ]
// };

export default Portfolio;
