interface selectOption {
  eventId: string;
  type: string;
  speaker: string;
  title: string;
}

const events: selectOption[] = [
  {
    eventId: "vCGRFkGeN6VEzKR2pUNx",
    type: "Minicurso",
    speaker: "Elder Pimenta",
    title: "Inteligência Artificial na Saúde: Abrindo o Código Fonte",
  },
  {
    eventId: "1EtKenBwdkFhD8ZFNKjp",
    type: "Oficina",
    speaker: "Leandro dos Santos Gonzalez",
    title: "Expert Sinta: criando um SISTEMA ESPECIALISTA",
  },
];

const lectures: Partial<selectOption>[] = [
  {
    type: "Palestra",
    speaker: "Elder Pimenta",
    title: "Uso da IA na medicina hospitalar",
  },
  {
    type: "Palestra Magna",
    speaker: "Ricardo Araújo Rios",
    title: "Inteligência Artificial: O Futuro é Agora",
  },
  {
    type: "Palestra",
    speaker: "Pedro Kislansky",
    title: "IA, mitos, desafios e tendências",
  },
  {
    type: "Palestra",
    speaker: "Thiago Reis de Souza",
    title:
      "Como a inteligência artificial está transformando o atendimento e otimizando a experiência do cliente",
  },
  {
    type: "Palestra",
    speaker: "Afonso Madeira",
    title:
      "Inteligência Artificial, educação e o futuro do trabalho: crise ou oportunidade?",
  },
];

export { events, lectures };
