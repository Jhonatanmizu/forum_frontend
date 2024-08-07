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
//Schema
import { SubscribeSchema } from "./schema";
//Store
import useFirebaseStore from "../../stores/firebase";
//Icons
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const SubscribeButton = () => {
  const {
    handleFormData,
    updateParticipant,
    deleteParticipant,
    currentUserData,
    processingSubscribe,
  } = useFirebaseStore();

  const form = useForm<z.infer<typeof SubscribeSchema>>({
    resolver: zodResolver(SubscribeSchema),
  });

  const onSubmit = async (data: z.infer<typeof SubscribeSchema>) => {
    await handleFormData(data);
  };

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
          >
            quero me inscrever
          </Button>
        </DialogTrigger>
        <DialogContent
          className={cn(
            `flex flex-col p-5 md:p-10 bg-background-1 shadow-[0px_0px_5px_1px_#ffffff]
             w-[330px] md:w-[770px] max-w-full border-none
            text-white`
          )}
        >
          {currentUserData ? (
            <div>
              <DialogHeader>
                <DialogTitle className="text-2lg">
                  Parece que você já está inscrito
                </DialogTitle>
                <DialogDescription>
                  <p className="text-lg">Oque você deseja fazer?</p>
                  <div className="flex flex-row justify-around">
                    <Button
                      className="bg-primary w-fit pr-5 pl-5 h-10 shadow-[0px_0px_16px_5px_#0837DE] text-lg mt-10 order-1 md:order-last transition-all"
                      onClick={() => updateParticipant()}
                    >
                      {processingSubscribe ? (
                        <div className="flex gap-5">
                          <HourglassEmptyIcon className="animate-spin" />
                          <p>Processando ...</p>
                        </div>
                      ) : (
                        "Atualizar minha inscrição!"
                      )}
                    </Button>
                    <Button
                      className="w-fit pr-5 pl-5 h-10 shadow-[0px_0px_5px_1px_#e73149] text-lg mt-10 order-1 md:order-last transition-all"
                      onClick={() => deleteParticipant()}
                    >
                      {processingSubscribe ? (
                        <div className="flex gap-5">
                          <HourglassEmptyIcon className="animate-spin" />
                          <p>Processando ...</p>
                        </div>
                      ) : (
                        "Cancelar minha inscrição!"
                      )}
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter></DialogFooter>
            </div>
          ) : (
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
                                <SelectItem
                                  key={event.title}
                                  value={event.title}
                                >
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
                    className="bg-primary w-fit pr-5 pl-5 h-10 shadow-[0px_0px_16px_5px_#0837DE] text-lg mt-10 order-1 md:order-last transition-all"
                    type="submit"
                  >
                    {processingSubscribe ? (
                      <div className="flex gap-5">
                        <HourglassEmptyIcon className="animate-spin" />
                        <p>Enviando dados ...</p>
                      </div>
                    ) : (
                      "Pronto"
                    )}
                  </Button>
                  <DialogClose className={cn(`text-white text-lg w-20 h-10`)}>
                    Cancelar
                  </DialogClose>
                </DialogFooter>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscribeButton;
