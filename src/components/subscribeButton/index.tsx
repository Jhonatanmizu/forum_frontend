import { useState } from "react";
//Shadcn UI
import { Button } from "../";
import { cn } from "../../lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
//Data
import { events } from "./data";
//Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SubscribeButton = () => {
  const [submitting, setSubmitting] = useState(false);

  const FormSchema = z.object({
    fullName: z
      .string({
        required_error: "Nome completo é obrigatório",
      })
      .nonempty("Por favor, informe seu nome completo."),
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
    event: z.string({
      required_error: "Por favor, indique o evento no qual deseja se inscrever",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setSubmitting(true);

    try {
      setTimeout(() => {
        console.warn(JSON.stringify(data, null, 2));
      }, 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-row justify-around pt-10 text-2lg md:text-3lg">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              `text-white bg-primary rounded-full font-normal
              w-[222px] h-[58px] text-lg
              md:w-[287px] md:h-[65px] md:text-3lg
              shadow-[0px_0px_16px_5px_#0837DE]
              hover:scale-105 transition-all z-50`
            )}
            disabled
          >
            INSCRIÇÕES EM BREVE
          </Button>
        </DialogTrigger>
        <DialogContent
          className={cn(
            `flex flex-col p-5 md:p-10 bg-background-1 shadow-[0px_0px_5px_1px_#ffffff]
             w-[330px] md:w-[770px] max-w-full border-none
            text-white`
          )}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle className="text-2lg">
                  Faça usa inscrição
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-3">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="text"
                          placeholder="Nome completo"
                          className={cn(`text-lg`)}
                          onChange={field.onChange}
                          defaultValue={field.value}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="number"
                          placeholder="CPF"
                          className={cn(`text-lg`)}
                          onChange={field.onChange}
                          defaultValue={field.value}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="text"
                          placeholder="Data de nascimento"
                          className={cn(`text-lg`)}
                          onChange={field.onChange}
                          defaultValue={field.value}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          type="email"
                          placeholder="Email"
                          className={cn(`text-lg`)}
                          onChange={field.onChange}
                          defaultValue={field.value}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="event"
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
                            {events.map((event) => (
                              <SelectItem key={event.title} value={event.title}>
                                {event.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </DialogDescription>
              </DialogHeader>
              <DialogFooter
                className={cn(`flex gap-10 items-center md:items-end`)}
              >
                <Button
                  className="bg-primary w-36 h-10 shadow-[0px_0px_16px_5px_#0837DE] text-lg mt-10 order-1 md:order-last"
                  type="submit"
                >
                  {submitting ? "Enviando dados" : "Pronto"}
                </Button>
                <DialogClose className={cn(`text-white text-lg w-20 h-10`)}>
                  Cancelar
                </DialogClose>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscribeButton;
