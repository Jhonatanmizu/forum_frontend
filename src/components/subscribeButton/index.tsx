//Shadcn UI
import { Button } from "../";
import { cn } from "../../lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

const SubscribeButton = () => {
  return (
    <div className="flex flex-row justify-around pt-10 text-2lg md:text-3lg">
      <AlertDialog>
        <AlertDialogTrigger asChild>
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
        </AlertDialogTrigger>
        <AlertDialogContent
          className={cn(
            `flex flex-col p-5 md:p-10 bg-background-1 shadow-[0px_0px_5px_1px_#ffffff]
              w-[330px] md:w-[770px] max-w-full border-none
            text-white`
          )}
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2lg">
              Faça usa inscrição
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="nome completo"
                className={cn(`text-lg`)}
              />
              <Input
                type="number"
                placeholder="cpf"
                className={cn(`text-lg`)}
              />
              <Input
                type="text"
                placeholder="data de nascimento"
                className={cn(`text-lg`)}
              />
              <Input
                type="email"
                placeholder="email"
                className={cn(`text-lg`)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-black text-lg">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction className="bg-primary shadow-[0px_0px_16px_5px_#0837DE] text-lg">
              Pronto
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SubscribeButton;
