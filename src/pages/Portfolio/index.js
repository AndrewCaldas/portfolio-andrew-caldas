import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";
import Cards from "../../components/Cards";
import SlickSlider from "../../components/SlickSlider";
import Institutional from "../../components/Institutional";
import i18n from "../../locales";

import Img1 from "../../assets/img/img-1.jpeg";
import Img2 from "../../assets/img/img-2.jpeg";
import Img3 from "../../assets/img/img-3.jpeg";
import Img4 from "../../assets/img/img-4.jpeg";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <SlickSlider
        list={listImages}
        mask={true}
        title={"Andrew Caldas"}
        description={"Desenvolvedor Front-End"}
      />

      <div id="session-portfolio">
        <Drawings
          text={i18n.t("portfolio.text")}
          background={false}
          // textLegal={i18n.t("portfolio.text_legal")}
        />

        {listProjects &&
          listProjects.map((item, index) => (
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
          title="Sobre mim"
          description="eu sou eu.."
          background={true}
        />

        <Institutional />
      </div>
    </div>
  );
};

let listProjects = [
  {
    id: 1,
    title: "Projeto 1",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    date: "23/03/2012",
    img: Img1
  },
  {
    id: 2,
    title: "Projeto 2",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    date: "23/03/2012",
    img: Img2
  },
  {
    id: 3,
    title: "Projeto 3",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    date: "23/03/2012",
    img: Img3
  },
  {
    id: 4,
    title: "Projeto 4",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    date: "23/03/2012",
    img: Img4
  }
];

let listImages = [
  {
    id: 1,
    img: Img1
  },
  {
    id: 2,
    img: Img2
  },
  {
    id: 3,
    img: Img3
  },
  {
    id: 4,
    img: Img4
  }
];

export default Portfolio;
