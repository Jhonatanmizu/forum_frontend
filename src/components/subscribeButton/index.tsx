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
import { SelectOption } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { formatStringToCpf, isValidCPF, removeSpecialChars } from "@/utils";
import { toast } from "../ui/use-toast";

interface Participant {
  fullName: string;
  email: string;
  cpf: string;
  birthDate: string;
  events: string[];
  eventId: string;
}

const SubscribeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleFormData,
    updateParticipant,
    deleteParticipant,
    currentUserData,
    processingSubscribe,
    currentUserEvents,
    getMiniCourses,
    availableMiniCourses,
    formMessageTitle,
    formMessageSubTitle,
    setFormMessageTitle,
    setFormMessageSubTitle,
  } = useFirebaseStore();

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

  const form = useForm<z.infer<typeof SubscribeSchema>>({
    resolver: zodResolver(SubscribeSchema),
  });

  const onSubmit = async (data: z.infer<typeof SubscribeSchema>) => {
    const cleanData: Participant = {
      ...data,
      cpf: removeSpecialChars(data.cpf),
    } as Participant;
    const cpfIsValid = isValidCPF(data.cpf);
    if (!cpfIsValid) {
      return toast({
        variant: "destructive",
        title: "CPF inválido",
      });
    }
    await handleFormData(cleanData as Participant);
    form.reset();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    setFormMessageTitle(null);
    setFormMessageSubTitle(null);
  };

  useEffect(() => {
    getMiniCourses();
  }, []);

  return (
    <div className="flex flex-row justify-around pt-10 text-2lg md:text-3lg">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
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
                  Parece que você já está inscrito em:
                  {currentUserEvents.map((item) => {
                    return <p className="text-lg mt-2">{item.title}</p>;
                  })}
                </DialogTitle>
                <DialogDescription>
                  <p className="text-lg mt-5">Oque você deseja fazer?</p>
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
                        "Atualizar minhas inscrições!"
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
                        "Cancelar minhas inscrições!"
                      )}
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter></DialogFooter>
            </div>
          ) : formMessageTitle ? (
            <div className="flex flex-col items-center justify-around">
              <DialogHeader>
                <DialogTitle className="text-2lg">
                  <p>{formMessageTitle}</p>
                  <p>{formMessageSubTitle}</p>
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-row justify-around">
                    <Button
                      className="w-fit pr-5 pl-5 h-10 shadow-[0px_0px_5px_1px_#0837DE] text-lg mt-10 order-1 md:order-last transition-all"
                      onClick={() => handleCloseModal()}
                    >
                      Entendido!
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
                            placeholder="CPF"
                            className={cn(`text-lg`)}
                            onChange={field.onChange}
                            value={formatStringToCpf(field.value)}
                            defaultValue={formatStringToCpf(field.value)}
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
                                <SelectItem
                                  key={event.eventId}
                                  value={event.eventId}
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
