import { Contact } from "./contact";

export type PlannedEvent = {
  id: number;
  name: string;
  invitees: Contact[];
}
