import React from "react";
import Header from "../../components/Header";

import Drawings from "../../components/Drawings";

import "./index.css";

const Contact = () => {
  return (
    <div className="page-contact-main">
      <Header background={true} />
      <Drawings
        title={"Contato"}
        description={"Abaixo você poderá entrar em contato comigo!"}
        background={false}
      />
    </div>
  );
};

export default Contact;
