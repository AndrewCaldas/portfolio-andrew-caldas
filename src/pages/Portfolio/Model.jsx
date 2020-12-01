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
import IconGames from "../../assets/icons/console.svg";
import IconBook from "../../assets/icons/book.svg";
import IconProfits from "../../assets/icons/profits.svg";


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
          abstract:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
          description:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
          date: "23/03/2012",
          img: Img1
        },
        {
          id: 2,
          title: "Projeto 2",
          abstract:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
          description:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
          date: "23/03/2012",
          img: Img2
        },
        {
          id: 3,
          title: "Projeto 3",
          abstract:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
          description:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
          date: "23/03/2012",
          img: Img3
        },
        {
          id: 4,
          title: "Projeto 4",
          abstract:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo ut.",
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
          "Bom, tentarei ser breve. Meu nome é Andrew, nasci e vivi a minha vida toda em São Paulo, Capital. Na minha infância tive minha primeira experiência com um computador, o bom e velho Windows XP e o monitor de tubo. Na Adolescência já estava engajado no mundo web e já oferecia serviços de web design de graça para lojas, pequenos comércios, etc. Na minha fase adulta eu conheci a programação, confesso que não foi amor pela primeira vista, mas ela me encantava muito e então tomei coragem e me inscrevi no vestibular do Centro Paula Souza para prestar Análise e Desenvolvimento de Sistema na Fatec Zona Leste. Pois bem, passei, foi uma alegria em casa e para mim, mal podia esperar pelo conhecimento que eu poderia adquirir dentro daquela instituição, e bem, foi bastante conhecimento, até que entre o 4 e 5 semestres eu fui em busca dos estágios, demorou, mas uma Startup me ofereceu a oportunidade e eu agarrei com força, e foi ali que eu me apaixonei pela carreira de Front-End e não parei mais. :)",
        img: imgProfile
      },
      title_timeline: "Experiências",
      timeline: [
        {
          id: 1,
          dateInitial: "Maio de 2019",
          dateEnd: "Agosto de 2019",
          name: "Full-Stack Web Developer Intern at RedFox Digital Solutions",
          description:
            "Consultoria para grandes empresas - B2B. Atuei com desenvolvimento de soluções digitais para grandes empresas. Utilizei alguns frameworks do Js, como: Vue.js e Node.js."
        },
        {
          id: 2,
          dateInitial: "Agosto de 2019",
          dateEnd: "Julho de 2020",
          name: "Front-end Mobile Developer Intern at IBM",
          description:
            "Consultoria para grandes empresas. Atuo com desenvolvimento Front-end para Mobile e Web, com os frameworks React e React Native, Ionic, Angular, Spring Boot(Thymeleaf) , etc.."
        },
        {
          id: 3,
          dateInitial: "Junho de 2020",
          dateEnd: "Até o momento.",
          name: "Jr. Front-End Developer - IBM",
          description:
            "I work in IBM's consulting sector for various branches of companies, and the projects are usually web or mobile."
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
              "A Leitura não era algo muito agradavél para mim a 2 anos atrás, porém eu me forçei a pelo menos ler alguns livros durante o ano, até que eu me encantei por todo aquele mundo dentro dos livros e não parei mais.",
            img: IconBook,
            link: ""
          },
          {
            id: 2,
            name: "Jogos",
            description: "Quando é para eu me desligar de tudo e de todos, o meu lazer é jogar, não importa o tipo de jogo.",
            img: IconGames,
            link: ""
          },
          {
            id: 3,
            name: "Investimentos",
            description:
              "Também penso no meu futuro, e acredito que bons investimentos podem moldar a minha qualidade de vida daqui para frente. Se um dia você me encontrar na hora do almoço, você provavelmente notará que terá alguns gráficos na minha tela do computador hahaha.",
            img: IconProfits,
            link: ""
          }
        ]
      }
    }
  };
};

export default PortfolioModel;
