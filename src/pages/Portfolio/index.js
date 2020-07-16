import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";

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
    </div>
  );
};

export default Portfolio;
