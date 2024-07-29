//Images
import Elder from "../../assets/images/speakers/elder.jpeg";

interface MiniCourse {
  type: string;
  speaker: string;
  title: string;
  photo: string;
}

const miniCourses: MiniCourse[] = [
  {
    type: "Minicurso",
    speaker: "Elder Pimenta",
    title: "Inteligência Artificial na Saúde: Abrindo o Código Fonte",
    photo: Elder,
  },
  {
    type: "Oficina",
    speaker: "Leandro dos Santos Gonzales",
    title: "Expert Sinta: criando um sistema especialista",
    photo:
      "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4139994U5",
  },
];

export default miniCourses;
