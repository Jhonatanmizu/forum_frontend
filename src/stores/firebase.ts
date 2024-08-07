//React
import { useState } from "react";
//Firebase
import { firestore } from "../services/firebase/config";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  deleteDoc,
} from "firebase/firestore";
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
  const [processingSubscribe, setProcessingSubscribe] = useState(false);
  const [currentUserData, setCurrentUserData] = useState<Participant | null>(
    null
  );
  const [currentEvent, setCurrentEvent] = useState("");
  const { toast } = useToast();

  const db = firestore;

  const participantsRef = "participants/";

  const handleFormData = async (data: Participant) => {
    setProcessingSubscribe(true);
    const { cpf, event } = data;

    const docRef = doc(db, participantsRef, cpf);
    const docSnap = await getDoc(docRef);

    try {
      if (docSnap.exists()) {
        const existingData = docSnap.data() || [];
        setCurrentUserData(existingData as Participant);
        setCurrentEvent(event);
        setProcessingSubscribe(false);
        return;
      } else {
        addNewParticipant(data);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro na comunicação com o servidor... 😓",
        description: "Você pode tentar novamente em alguns instantes!",
      });
      console.error(error);
    } finally {
      setProcessingSubscribe(false);
    }
  };

  const addNewParticipant = async (data: Participant) => {
    setProcessingSubscribe(true);

    const { fullName, email, cpf, event, birthDate } = data;

    try {
      const docRef = doc(db, participantsRef, cpf);

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
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao enviar sua inscrição... 😓",
        description: "Você pode tentar novamente em alguns instantes!",
      });
      console.error(error);
    } finally {
      setProcessingSubscribe(false);
    }
  };

  const updateParticipant = async () => {
    setProcessingSubscribe(true);

    if (!currentUserData) return;

    const { fullName, email, cpf, birthDate } = currentUserData;

    const docRef = doc(db, participantsRef, cpf);
    const docSnap = await getDoc(docRef);

    const existingEvents = docSnap.exists() ? docSnap.data().events || [] : [];

    try {
      if (!existingEvents.includes(currentEvent)) {
        await updateDoc(docRef, {
          fullName: fullName,
          email: email,
          cpf: cpf,
          birthDate: birthDate,
          events: arrayUnion(currentEvent),
        });
      }
      toast({
        title: "A sua inscrição foi atualizada! 😎",
        description:
          "Lembre de marcar presença no dia do evento! Procure um dos nossos colaboradores!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao atualizar inscrição... 😓",
        description: "Você pode tentar novamente em alguns instantes!",
      });
      console.error(error);
    } finally {
      setProcessingSubscribe(false);
    }
  };

  const deleteParticipant = async () => {
    setProcessingSubscribe(true);

    if (!currentUserData) return;

    const { cpf } = currentUserData;

    const docRef = doc(db, participantsRef, cpf);

    try {
      await deleteDoc(docRef);

      toast({
        title: "A sua inscrição foi removida! 🤧",
        description: "Esperamos te ver em outros eventos!",
      });

      setCurrentUserData(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao remover inscrição... 😓",
        description: "Você pode tentar novamente em alguns instantes!",
      });
      console.error(error);
    } finally {
      setProcessingSubscribe(false);
    }
  };

  return {
    processingSubscribe,
    currentUserData,
    handleFormData,
    addNewParticipant,
    updateParticipant,
    deleteParticipant,
  };
};

export default useFirebaseStore;
