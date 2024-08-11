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
import { cn } from "@/lib/utils";
import useFirebaseStore from "@/stores/firebase";
import { SelectOption } from "@/types";
import { formatStringToCpf, isValidCPF, removeSpecialChars } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  cpf: z
    .string({
      required_error: "CPF é obrigatório",
    })
    .min(11, "CPF deve ter exatamente 11 dígitos e ser válido"),
  eventId: z.string({
    required_error: "Por favor, indique o evento no qual deseja se inscrever",
  }),
});

type formData = z.infer<typeof formSchema>;

const Presence = () => {
  const { availableMiniCourses, getMiniCourses, confirmPresence } =
    useFirebaseStore();

  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
  });

  const selectMiniCourses: SelectOption[] = useMemo(
    () =>
      availableMiniCourses.map<SelectOption>((amc) => {
        return {
          eventId: amc?.id,
          speaker: amc.speaker,
          title: amc.name,
          type: amc.type,
        } as SelectOption;
      }),
    [availableMiniCourses.length]
  );

  useEffect(() => {
    getMiniCourses();
  }, []);

  const handleSubmit = async (data: formData) => {
    const { cpf, eventId } = data;
    const cpfIsValid = isValidCPF(data.cpf);
    if (!cpfIsValid) {
      return toast({
        variant: "destructive",
        title: "CPF inválido",
      });
    }
    await confirmPresence({ cpf: removeSpecialChars(cpf), eventId });
    form.reset();
  };

  return (
    <main className="flex flex-col relative bg-background-1 max-w-screen min-h-screen h-fit items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={cn(
            `flex flex-col p-5 md:p-10 bg-background-1 shadow-[0px_0px_5px_1px_#ffffff]
             w-[330px] md:w-[770px] max-w-full border-none
           `
          )}
        >
          <h1 className="text-xl text-white">Formulário de presença</h1>
          <div className="gap-4 flex flex-col">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="CPF"
                      {...field}
                      value={formatStringToCpf(field.value)}
                      className={cn(`text-lg`)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
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
                      {selectMiniCourses.map((event) => (
                        <SelectItem key={event.eventId} value={event.eventId}>
                          {event.title}
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
          </div>
        </form>
      </Form>
    </main>
  );
};

export default Presence;
