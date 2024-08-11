//Zod
import { z } from "zod";

const SubscribeSchema = z.object({
  fullName: z
    .string({
      required_error: "Nome completo é obrigatório",
    })
    .min(5, "Por favor, informe seu nome completo."),
  cpf: z
    .string({
      required_error: "CPF é obrigatório",
    })
    .regex(/^\d{11}$/, "CPF deve ter exatamente 11 dígitos"),
  birthDate: z
    .string({
      required_error: "A data de nascimento é obrigatória",
    })
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "A data de nascimento deve estar no formato Dia/Mês/Ano"
    ),
  email: z
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Email invalido"),
  eventId: z.string({
    required_error: "Por favor, indique o evento no qual deseja se inscrever",
  }),
});

export { SubscribeSchema };
