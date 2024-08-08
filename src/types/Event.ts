import { Participant } from "./Participant";

export interface Event {
  id?: string;
  name: string;
  limit: number;
  type: string;
  speaker: string;
  participants?: Participant[];
}
