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
  arrayRemove,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
// ShadcnUi
import { useToast } from "@/components/ui/use-toast";
//Data
import { events as MockEvents } from "../components/subscribeButton/data";
import { Participant, Event } from "@/types";

interface SelectOption {
  eventId: string;
  type: string;
  speaker: string;
  title: string;
}

const useFirebaseStore = () => {
  const [processingSubscribe, setProcessingSubscribe] = useState(false);
  const [currentUserData, setCurrentUserData] = useState<Participant | null>(
    null
  );
  const [currentEvent, setCurrentEvent] = useState("");
  const [currentUserEvents, setCurrentUserEvents] = useState<SelectOption[]>(
    []
  );

  const [availableMiniCourses, setAvailableMiniCourses] = useState<Event[]>([]);
  const { toast } = useToast();

  const db = firestore;

  const participantsRef = "participants/";
  const eventsRef = "events/";

  const handleFormData = async (data: Participant) => {
    setProcessingSubscribe(true);
    const { cpf, eventId } = data;

    const docRef = doc(db, participantsRef, cpf);
    const docSnap = await getDoc(docRef);

    try {
      if (docSnap.exists()) {
        const existingData = docSnap.data() || [];
        const userData = existingData as Participant;
        setCurrentUserData(userData);
        setCurrentEvent(eventId);
        const filteredEvents = MockEvents.filter((item, index) => {
          return item.eventId === userData.events[index];
        });
        setCurrentUserEvents(filteredEvents as SelectOption[]);
        setProcessingSubscribe(false);
        return;
      }
      await addNewParticipant(data);
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

    const { fullName, email, cpf, birthDate, eventId } = data;

    try {
      const userDocRef = doc(db, participantsRef, cpf);
      const eventDocRef = doc(db, eventsRef, eventId);
      const eventDocSnap = await getDoc(eventDocRef);
      const eventData = eventDocSnap.data() as Event;

      const canSubscribeInEvent =
        eventData?.participants &&
        eventData.participants?.length <= eventData.limit;

      if (!canSubscribeInEvent) {
        return toast({
          variant: "destructive",
          title: "Inscrições encerradas... 😓",
          description: "O limite de vagas foi excedido",
        });
      }

      await setDoc(userDocRef, {
        fullName: fullName,
        email: email,
        cpf: cpf,
        birthDate: birthDate,
        events: [eventId],
      });

      await updateDoc(eventDocRef, {
        participants: arrayUnion(cpf),
      });

      setCurrentEvent("");
      setCurrentUserData(null);

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

    const userDocRef = doc(db, participantsRef, cpf); //DocRef for user
    const eventDocRef = doc(db, eventsRef, currentEvent); //DocRef for user in events doc

    const userDocSnap = await getDoc(userDocRef); //Get User info
    const eventDocSnap = await getDoc(eventDocRef); //Get event info

    const existingEvents = userDocSnap.exists()
      ? userDocSnap.data().events || []
      : [];
    const existingUser = eventDocSnap.exists()
      ? eventDocSnap.data().participants || []
      : [];

    try {
      if (!existingEvents.includes(currentEvent)) {
        await updateDoc(userDocRef, {
          fullName: fullName,
          email: email,
          cpf: cpf,
          birthDate: birthDate,
          events: arrayUnion(currentEvent),
        });
      }

      if (!existingUser.includes(cpf)) {
        await updateDoc(eventDocRef, {
          participants: arrayUnion(cpf),
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

    const userDocRef = doc(db, participantsRef, cpf); //DocRef for user

    try {
      await deleteDoc(userDocRef);
      const queryCommand = query(
        collection(db, "events"),
        where("participants", "array-contains", cpf)
      );
      const querySnapshot = await getDocs(queryCommand);

      querySnapshot.forEach(async (doc) => {
        await updateDoc(doc.ref, {
          participants: arrayRemove(cpf),
        });
      });

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

  const getMiniCourses = async () => {
    try {
      const docRef = collection(db, "events");
      const docSnap = await getDocs(docRef);
      const data: Event[] =
        docSnap.docs.map((d) => {
          return {
            id: d.id,
            ...d.data(),
          } as Event;
        }) || [];
      const eventsWithNotExceedLimit = data.filter((d: Event) => {
        return !d?.participants || d?.participants?.length <= d.limit;
      });
      setAvailableMiniCourses(eventsWithNotExceedLimit);
      return eventsWithNotExceedLimit;
    } catch (error) {
      console.error("Error when we tried to get mini courses", error);
      throw error;
    }
  };

  return {
    processingSubscribe,
    currentUserData,
    currentUserEvents,
    handleFormData,
    addNewParticipant,
    updateParticipant,
    deleteParticipant,
    getMiniCourses,
    availableMiniCourses,
  };
};

export default useFirebaseStore;
