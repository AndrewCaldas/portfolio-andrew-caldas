import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";
import Cards from "../../components/Cards";
import SlickSlider from "../../components/SlickSlider";
import Institutional from "../../components/Institutional";
import i18n from "../../locales";
import imgProfile from "../../assets/img/img-profile.jpeg";

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
          title={sectionAbout.title}
          description={sectionAbout.description}
          background={sectionAbout.background}
        />

        <Institutional
          id={sectionAbout.owner.id}
          text={sectionAbout.owner.text}
          img={sectionAbout.owner.img}
        />
      </div>
    </div>
  );
};

let sectionAbout = {
  id: 1,
  title: "Sobre Mim",
  description: "Minha Trajetória",
  background: true,
  owner: {
    id: 1,
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: imgProfile
  }
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
