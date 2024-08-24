//React
import { useForm } from "react-hook-form";
//Components
import { Button } from "@/components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
//Utils
import { cn } from "@/lib/utils";
import { formatStringToCpf, isValidCPF, removeSpecialChars } from "@/utils";
//Config
import useFirebaseStore from "@/stores/firebase";
//Zod
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const firstStepFormSchema = z.object({
  cpf: z
    .string({
      required_error: "CPF é obrigatório",
    })
    .min(11, "CPF deve ter exatamente 11 dígitos e ser válido"),
});

const secondStepFormSchema = z.object({
  eventId: z.string({
    required_error:
      "Por favor, indique o evento no qual deseja confirmar a presença",
  }),
});

type firstStepFormData = z.infer<typeof firstStepFormSchema>;
type secondStepFormData = z.infer<typeof secondStepFormSchema>;

const Presence = () => {
  const {
    confirmPresence,
    getUserData,
    currentUserData,
    currentUserEvents,
    clearCurrentUserData,
  } = useFirebaseStore();

  const firstStepForm = useForm<firstStepFormData>({
    resolver: zodResolver(firstStepFormSchema),
  });

  const secondStepForm = useForm<secondStepFormData>({
    resolver: zodResolver(secondStepFormSchema),
  });

  const handleFirstStep = async (data: firstStepFormData) => {
    const cpfIsValid = isValidCPF(data.cpf);
    if (!cpfIsValid) {
      return toast({
        variant: "destructive",
        title: "CPF inválido",
      });
    }

    await getUserData(removeSpecialChars(data.cpf));
  };

  const handleConfirmPresence = async (data: secondStepFormData) => {
    if (!currentUserData) return;

    const presenceData = {
      cpf: currentUserData.cpf,
      eventId: data.eventId,
    };

    try {
      await confirmPresence(presenceData);

      toast({
        title: "Presença confirmada!",
      });

      handleResetSteps();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao enviar sua solicitação... 😓",
        description: "Você pode tentar novamente em alguns instantes!",
      });
      console.error(error);
    }
  };

  // 74575663093

  const handleResetSteps = () => {
    firstStepForm.reset();
    secondStepForm.reset();
    clearCurrentUserData();
  };

  return (
    <main className="flex flex-col relative bg-background-1 max-w-screen min-h-screen h-fit items-center justify-center">
      <h1 className="text-xl text-white mb-3">Formulário de presença</h1>
      <div className="gap-4 flex flex-col">
        {currentUserData ? (
          <Form {...secondStepForm}>
            <form
              onSubmit={secondStepForm.handleSubmit(handleConfirmPresence)}
              className={cn(
                `flex flex-col p-5 md:p-10 bg-background-1 shadow-[0px_0px_5px_1px_#ffffff]
               w-[330px] md:w-[770px] max-w-full border-none`
              )}
            >
              <p className="text-text text-lg">Nome do participante:</p>
              <p className="text-text text-lg ml-5">
                {currentUserData.fullName}
              </p>
              <p className="text-text text-lg">CPF do participante:</p>
              <p className="text-text text-lg ml-5 mb-5">
                {currentUserData.cpf}
              </p>
              <FormField
                control={secondStepForm.control}
                name="eventId"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className={cn(`text-lg`)}>
                        <SelectValue placeholder="Selecione o evento desejado" />
                      </SelectTrigger>
                      <SelectContent className={cn(`text-lg`)}>
                        {currentUserEvents.map((e) => (
                          <SelectItem key={e.eventId} value={e.eventId}>
                            {e.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-primary w-full pr-5 pl-5 h-10 shadow-[0px_0px_16px_5px_#0837DE] text-lg mt-10 order-1 md:order-last transition-all"
                type="submit"
              >
                Confirmar presença
              </Button>
              <Button
                className="bg-transparent w-full pr-5 pl-5 h-10 hover:shadow-[0px_0px_15px_1px_#e73149] text-lg mt-10 order-1 md:order-last transition-all"
                onClick={() => handleResetSteps()}
              >
                Cancelar
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...firstStepForm}>
            <form
              onSubmit={firstStepForm.handleSubmit(handleFirstStep)}
              className={cn(
                `flex flex-col p-5 md:p-10 bg-background-1 shadow-[0px_0px_5px_1px_#ffffff]
                 w-[330px] md:w-[770px] max-w-full border-none`
              )}
            >
              <FormField
                control={firstStepForm.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text text-lg">
                      Insira o CPF para confirmar a presença
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="CPF do participante"
                        {...field}
                        value={formatStringToCpf(field.value)}
                        className={cn(`text-lg`)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-primary w-full pr-5 pl-5 h-10 shadow-[0px_0px_16px_5px_#0837DE] text-lg mt-10 order-1 md:order-last transition-all"
                type="submit"
              >
                Verificar dados
              </Button>
            </form>
          </Form>
        )}
      </div>
    </main>
  );
};

export default Presence;
