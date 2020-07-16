import React from "react";
import Header from "../../components/Header";
import Drawings from "../../components/Drawings";

const Contact = () => {
  return (
    <div>
      <Header />
      <Drawings
        title={"Contato"}
        description={"Abaixo você poderá entrar em contato comigo!"}
      />
    </div>
  );
};

export default Contact;
