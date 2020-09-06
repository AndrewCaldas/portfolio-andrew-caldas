import React from "react";
import i18n from "../../locales";
import Img1 from "../../assets/img/img-1.jpeg";
import Img2 from "../../assets/img/img-2.jpeg";
import Img3 from "../../assets/img/img-3.jpeg";
import Img4 from "../../assets/img/img-4.jpeg";
import imgProfile from "../../assets/img/img-profile.jpeg";
import iconMedium from "../../assets/icons/medium.png";
import iconLinkedlin from "../../assets/icons/linkedin.png";
import iconGithub from "../../assets/icons/github.png";

const PortfolioModel = () => {
  return {
    slides: {
      id: 1,
      title: "Andrew Caldas",
      description: "Desenvolvedor Front-End",
      images: [
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
      ]
    },
    portfolio: {
      id: 1,
      title: i18n.t("portfolio.text"),
      projects: [
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
      ]
    },
    about: {
      id: 1,
      title: "Sobre Mim",
      description: "Minha Trajetória",
      background: true,
      owner: {
        id: 1,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: imgProfile
      },
      title_timeline: "Experiências",
      timeline: [
        {
          id: 1,
          dateInitial: 2019,
          dateEnd: 2020,
          name: "teste 1",
          description: "description 1"
        },
        {
          id: 2,
          dateInitial: 2019,
          dateEnd: 2020,
          name: "teste 2",
          description: "description 1"
        },
        {
          id: 3,
          dateInitial: 2019,
          dateEnd: 2020,
          name: "teste 3",
          description: "description 1"
        },
        {
          id: 4,
          dateInitial: 2019,
          dateEnd: 2020,
          name: "teste 4",
          description: "description 1"
        }
      ],
      categories: {
        id: 1,
        title: "Hobbies",
        listCategories: [
          {
            id: 1,
            name: "Leitura",
            description:
              "Leitura se tornou um hábito saudavel entre minha rotina diaria.",
            img: Img1,
            link: ""
          },
          {
            id: 2,
            name: "Jogos",
            description: "Quando é para se desligar de tudo, eu amo jogar.",
            img: Img1,
            link: ""
          },
          {
            id: 3,
            name: "Investimentos",
            description:
              "Também penso no meu futuro, e acredito que bons investimentos podem moldar a minha qualidade de vida daqui para frente.",
            img: Img1,
            link: ""
          }
        ]
      }
    },
    footer: [
      {
        id: 1,
        name: "AC",
        img: false,
        link: "#",
        brand: true
      },
      {
        id: 2,
        name: "Linkdlin",
        img: iconLinkedlin,
        link: "#"
      },
      {
        id: 3,
        name: "GitHub",
        img: iconGithub,
        link: "#"
      },
      {
        id: 4,
        name: "Medium",
        img: iconMedium,
        link: "#"
      }
    ]
  };
};

export default PortfolioModel;
