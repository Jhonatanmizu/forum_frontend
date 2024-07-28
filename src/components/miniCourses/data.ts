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
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEQJJuOCzSrlQ/profile-displayphoto-shrink_200_200/0/1628109964524?e=1727308800&v=beta&t=uMf_3XZ3zgWoHcCicE82m5z9FaWlKijApNyo1ZiGH-o",
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
