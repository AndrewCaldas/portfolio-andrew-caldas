import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";

const Portfolio = () => {
  return (
    <div>
      <Header
        title={"Andrew Caldas"}
        backgroundColor={"#eeeeee"}
        textColor={"#2A2B2A"}
      />
      <Drawings
        color={"#eeeeee"}
        title={"Portfólio"}
        description={
          "Abaixo você irá encontrar todos os projetos que já realizei!"
        }
        textColor={"#000"}
      />
    </div>
  );
};

export default Portfolio;
