interface Event {
  startAt: string;
  endAt: string;
  title: string;
  speaker: string;
  type: string;
}

const thursdayEvents: Event[] = [
  {
    startAt: "08h",
    endAt: "09",
    title: "Credenciamento e boas-vindas",
    speaker: "",
    type: "Credenciamento",
  },
  {
    startAt: "09h",
    endAt: "10:30",
    title: "Palestra Magna: Inteligência Artificial : O Futuro é Agora",
    speaker: "Ricardo Araújo Rios",
    type: "Palestra",
  },
  {
    startAt: "10h30",
    endAt: "11",
    title: "INTERVALO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "11h",
    endAt: "12",
    title:
      "Palestra 2 : Como a inteligência artificial está transformando o atendimento e otimizando a experiência do cliente",
    speaker: "Thiago Reis de Souza",
    type: "Palestra",
  },
  {
    startAt: "12h",
    endAt: "14",
    title: "INTERVALO PARA ALMOÇO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "14h",
    endAt: "",
    title: "Oficina: Expert Sinta: criando um SISTEMA ESPECIALISTA",
    speaker: "Leandro dos Santos Gonzales",
    type: "Oficina",
  },
];

const fridayEvents: Event[] = [
  {
    startAt: "08h",
    endAt: "08:30",
    title: "Credenciamento",
    speaker: "",
    type: "Credenciamento",
  },
  {
    startAt: "08:30h",
    endAt: "09:30",
    title: "Palestra 1 : Uso da IA na Medicina Hospitalar",
    speaker: "Elder Pimenta",
    type: "Palestra",
  },
  {
    startAt: "09:30h",
    endAt: "10:30",
    title: "Palestra 2 : IA na Educação",
    speaker: "Pedro Kislansky",
    type: "Palestra",
  },
  {
    startAt: "10:30h",
    endAt: "11",
    title: "INTERVALO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "11h",
    endAt: "12",
    title:
      "Palestra 3 : Inteligência Artificial, educação e o futuro do trabalho: crise ou oportunidade?",
    speaker: "Afonso Celso Magalhães Madeira",
    type: "Palestra",
  },
  {
    startAt: "12h",
    endAt: "14",
    title: "INTERVALO PARA ALMOÇO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "14h",
    endAt: "",
    title:
      "Mini curso : Inteligência Artificial na Saúde: Abrindo o Código Fonte",
    speaker: "Elder Pimenta",
    type: "Minicurso",
  },
  {
    startAt: "17h",
    endAt: "",
    title: "Encerramento",
    speaker: "",
    type: "Encerramento",
  },
];

export { thursdayEvents, fridayEvents };
