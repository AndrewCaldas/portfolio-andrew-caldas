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
    </div>
  );
};

export default Portfolio;
