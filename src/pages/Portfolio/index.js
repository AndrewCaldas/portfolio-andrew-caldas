import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";
import Cards from "../../components/Cards";

import Img1 from "../../assets/img/img-1.jpeg";
import Img2 from "../../assets/img/img-2.jpeg";
import Img3 from "../../assets/img/img-3.jpeg";
import Img4 from "../../assets/img/img-4.jpeg";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Drawings
        title={"Andrew Caldas"}
        description={"Desenvolvedor Front-End"}
        twoSides={true}
      />
      {listProjects &&
        listProjects.map((item, index) => (
          <Cards
            rowIndex={index}
            objectId={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            img={item.img}
          />
        ))}
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

export default Portfolio;
