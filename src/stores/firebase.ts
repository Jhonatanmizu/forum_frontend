//Firebase
import { firestore } from "../services/firebase/config";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
//ShadcnUi
import { useToast } from "@/components/ui/use-toast";

interface Participant {
  fullName: string;
  email: string;
  cpf: string;
  birthDate: string;
  event: string;
}

const useFirebaseStore = () => {
  const { toast } = useToast();

  const db = firestore;

  const participantsRef = "participants/";

  const addNewParticipant = async (data: Participant) => {
    const { fullName, email, cpf, event, birthDate } = data;

    try {
      const docRef = doc(db, participantsRef, cpf);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingEvents = docSnap.data().events || [];
        if (!existingEvents.includes(event)) {
          await updateDoc(docRef, {
            fullName: fullName,
            email: email,
            cpf: cpf,
            birthDate: birthDate,
            events: arrayUnion(event),
          });
        }
        toast({
          title: "A sua inscrição foi atualizada! 😎",
          description:
            "Lembre de marcar presença no dia do evento! Procure um dos nossos colaboradores!",
        });
      } else {
        await setDoc(docRef, {
          fullName: fullName,
          email: email,
          cpf: cpf,
          birthDate: birthDate,
          events: [event],
        });

        toast({
          title: "Sua inscrição foi confirmada! 🥳",
          description:
            "Lembre de marcar presença no dia do evento! Procure um dos nossos colaboradores!",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao enviar sua inscrição... 😓",
        description: "Você pode tentar novamente em alguns instantes!",
      });
      console.error(error);
    }
  };

  return {
    addNewParticipant,
  };
};

export default useFirebaseStore;
