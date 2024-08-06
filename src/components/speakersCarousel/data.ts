//Images
import Afonso from "../../assets/images/lectures/afonso.jpeg";
import Elder from "../../assets/images/lectures/elder.jpeg";
import Pedro from "../../assets/images/lectures/pedro.jpeg";
import Thiago from "../../assets/images/lectures/thiago.jpeg";
import Rios from "../../assets/images/lectures/rios.jpeg";

interface Lecture {
  time: string;
  title: string;
  speaker: string;
  note?: string;
  photo: string;
  office?: string;
  link?: string;
}

const lectures: Lecture[] = [
  {
    time: "08:30 - 09:30",
    title: "Palestra Magna: Inteligência Artificial : O Futuro é Agora",
    speaker: "Ricardo Araújo Rios",
    photo: Rios,
    office:
      "Pós-Doutorado em Ciências da Computação e Matemática Computacional.",
    link: "http://lattes.cnpq.br/0427387583450747",
  },
  {
    time: "09:00 - 10:30",
    title: "Uso da IA na medicina hospitalar",
    speaker: "Elder Pimenta",
    photo: Elder,
    office:
      "Mestre em Sistemas e Computação com foco em Inteligência Artificial.",
    link: "https://www.linkedin.com/in/elderpimenta/",
  },
  {
    time: "09:30 - 10:30",
    title: "IA, mitos, desafios e tendências",
    speaker: "Pedro Kislansky",
    photo: Pedro,
    office: "Especialista em Especialização para tecnologias WEB.",
    link: "http://lattes.cnpq.br/5361102001763670",
  },
  {
    time: "11:00 - 12:00",
    title:
      "Como a inteligência artificial está transformando o atendimento e otimizando a experiência do cliente",
    speaker: "Thiago Reis de Souza",
    photo: Thiago,
    office: "Especialização em inteligência artificial",
    link: "",
  },
  {
    time: "11:00 - 12:00",
    title:
      "Inteligência Artificial, educação e o futuro do trabalho: crise ou oportunidade?",
    speaker: "Afonso Madeira",
    note: "Indicação Professor Leandro UNEB",
    photo: Afonso,
    office: "Mestre em Ciência da Informação",
    link: "https://www.afonsomadeira.com/",
  },
];

export default lectures;
