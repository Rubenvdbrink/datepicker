import { Contact } from "./contact";

export type PlannedEvent = {
  id: number;
  name: string;
  invitees: Contact[];
}

export function createNewEvent(): PlannedEvent {
  return {
    id: 0,
    name: '',
    invitees: [],
  };
}

export function createPartialEvent(overrides: Partial<PlannedEvent>): PlannedEvent {
  return {
    id: 0,
    name: '',
    invitees: [],
    ...overrides
  }
}
