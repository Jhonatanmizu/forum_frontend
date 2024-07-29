import ThiagoReisPhoto from "../../assets/images/speakers/thiago-reis.jpeg";
import Afonso from "../../assets/images/speakers/afonso.jpeg";
import Elder from "../../assets/images/speakers/elder.jpeg";
import Pedro from "../../assets/images/speakers/pedro.jpeg";

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
    title: "Uso da IA na Medicina Hospitalar",
    speaker: "Elder Pimenta",
    photo: Elder,
    office: "Gerente de Produtos Digitais em Hospitais e Oncologia na DASA",
    link: "https://www.linkedin.com/in/elderpimenta/",
  },
  {
    time: "09:00 - 10:30",
    title: "Palestra Magna: INTELIGÊNCIA ARTIFICIAL: O FUTURO É AGORA",
    speaker: "Ricardo Araújo Rios",
    photo:
      "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4237121D1",
    office: "Doutor em Ciências da Computação e Matemática Computacional.",
    link: "http://lattes.cnpq.br/0427387583450747",
  },
  {
    time: "09:30 - 10:30",
    title: "IA na Educação",
    speaker: "Pedro Kislansky",
    photo: Pedro,
    office: "Especialista em Especialização para tecnologias WEB.",
    link: "http://lattes.cnpq.br/5361102001763670",
  },
  {
    time: "11:00 - 12:00",
    title:
      "Como a IA está transformando o atendimento e otimizando a experiência do cliente",
    speaker: "Thiago Reis de Souza",
    photo: ThiagoReisPhoto,
    office: "CARGO DE TESTE",
    link: "",
  },
  {
    time: "11:00 - 12:00",
    title: "Inteligência Artificial, mitos, desafios e tendências",
    speaker: "Afonso Celso Magalhães Madeira",
    note: "Indicação Professor Leandro UNEB",
    photo: Afonso,
    office: "Mestre em Ciência da Informação",
    link: "https://www.afonsomadeira.com/",
  },
];

export default lectures;
