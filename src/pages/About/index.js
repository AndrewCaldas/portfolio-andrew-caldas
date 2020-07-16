import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";

const About = () => {
  return (
    <div>
      <Header />
      <Drawings
        title={"Sobre"}
        description={"Abaixo você irá saber tudo sobre mim!"}
      />
    </div>
  );
};

export default About;
