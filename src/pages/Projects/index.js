import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import ImgProvision from "../../assets/img/img-1.jpeg";
import Header from "../../components/Header/index";
import Drawings from "../../components/Drawings";
// import TextBold from "../../components/Text/TextBold";
import TextLight from "../../components/Text/TextLight";
import Footer from "../../components/Footer";
import ButtonBorder from "../../components/Button/ButtonBorder";

import "./index.css";

const Projects = props => {
  let { id } = useParams();
  // const history = useHistory();

  const [object, setObject] = useState({});

  // PROVISION
  useEffect(() => {
    if (!id || !setObject) return;
    findByIdProvision(id, setObject);
  }, [id, setObject]);

  return (
    <div id={object ? object.id : null}>
      <Header background={true} />
      {object && (
        <div className="projects-main">
          <Drawings
            title={object ? object.title : ""}
            description={object ? object.abstract : ""}
            background={false}
          // withHeader={true}
          />

          <div className="section">
            <span className="image-main">
              <img src={object ? object.img : ""} alt="" />
            </span>
          </div>

          <Container>
            <div className="descrition-main">
              <TextLight
                text={object ? object.description : ""}
                size="small"
                color="#000"
              />
            </div>

            <div className="button-project">
              <ButtonBorder
                text="Ir para o Site"
                _onClick={() => {
                  // history.push("/");
                  alert("foi");
                }}
              />
            </div>
          </Container>

          <Footer />
        </div>
      )}
    </div>
  );
};

const findByIdProvision = (id, setObject) => {
  if (!id) return {};
  setObject(projects.find(el => el.id === parseInt(id)));
};

let projects = [
  {
    id: 1,
    title: "Projeto 1",
    abstract:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    date: "23/03/2012",
    img: ImgProvision
  },
  {
    id: 2,
    title: "Projeto 2",
    abstract:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut",
    date: "23/03/2012",
    img: ImgProvision
  },
  {
    id: 3,
    title: "Projeto 3",
    abstract:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut",
    date: "23/03/2012",
    img: ImgProvision
  },
  {
    id: 4,
    title: "Projeto 4",
    abstract:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut. ",
    description:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut",
    date: "23/03/2012",
    img: ImgProvision
  }
];

export default Projects;
