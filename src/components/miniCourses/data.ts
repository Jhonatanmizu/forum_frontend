//Images
import Elder from "../../assets/images/lectures/elder.jpeg";
import Leandro from "../../assets/images/lectures/leandro.jpeg";

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
    speaker: "Leandro dos Santos Gonzalez",
    title: "Expert Sinta: criando um SISTEMA ESPECIALISTA",
    photo: Leandro,
  },
];

export default miniCourses;
