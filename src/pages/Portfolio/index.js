import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";
import Cards from "../../components/Cards";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Drawings
        title={"Portfólio"}
        description={
          "Abaixo você irá encontrar todos os projetos que já realizei!"
        }
      />
      <Cards />
      <Cards />
      <Drawings
        title={"Sobre"}
        description={"Abaixo você irá saber tudo sobre mim!"}
      />
    </div>
  );
};

export default Portfolio;
