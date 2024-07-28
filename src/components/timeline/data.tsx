interface Event {
  startAt: string;
  endAt: string;
  title: string;
  speaker: string;
  type: string;
}

const thursdayEvents: Event[] = [
  {
    startAt: "08",
    endAt: "09",
    title: "Credenciamento e boas-vindas",
    speaker: "",
    type: "Credenciamento",
  },
  {
    startAt: "09",
    endAt: "10:30",
    title: "Palestra Magna: INTELIGÊNCIA ARTIFICIAL : O FUTURO É AGORA",
    speaker: "Ricardo Araújo Rios",
    type: "Palestra",
  },
  {
    startAt: "10:30",
    endAt: "11",
    title: "INTERVALO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "11",
    endAt: "12",
    title:
      "Palestra 2 : Como a IA está transformando o atendimento e otimizando a experiência do cliente",
    speaker: "Thiago Reis de Souza",
    type: "Palestra",
  },
  {
    startAt: "12",
    endAt: "14",
    title: "INTERVALO PARA ALMOÇO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "14",
    endAt: "",
    title: "Oficina: Expert Sinta - criando um sistema especialista",
    speaker: "Leandro dos Santos Gonzales",
    type: "Oficina",
  },
];

const fridayEvents: Event[] = [
  {
    startAt: "08",
    endAt: "08:30",
    title: "Credenciamento",
    speaker: "",
    type: "Credenciamento",
  },
  {
    startAt: "08:30",
    endAt: "09:30",
    title: "Palestra 1 : Uso da IA na Medicina Hospitalar",
    speaker: "Elder Pimenta",
    type: "Palestra",
  },
  {
    startAt: "09:30",
    endAt: "10:30",
    title: "Palestra 2 : IA na Educação",
    speaker: "Pedro Kislansky",
    type: "Palestra",
  },
  {
    startAt: "10:30",
    endAt: "11",
    title: "INTERVALO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "11",
    endAt: "12",
    title: "Palestra 3 : Inteligência Artificial, mitos, desafios e tendências",
    speaker: "Afonso Celso Magalhães Madeira",
    type: "Palestra",
  },
  {
    startAt: "12",
    endAt: "14",
    title: "INTERVALO PARA ALMOÇO",
    speaker: "",
    type: "Intervalo",
  },
  {
    startAt: "14",
    endAt: "",
    title:
      "Mini curso : Inteligência Artificial na Saúde: Abrindo o Código Fonte",
    speaker: "Elder Pimenta",
    type: "Minicurso",
  },
  {
    startAt: "17",
    endAt: "",
    title: "Encerramento",
    speaker: "",
    type: "Encerramento",
  },
];

export { thursdayEvents, fridayEvents };
