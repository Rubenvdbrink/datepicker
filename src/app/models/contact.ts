export type Contact = {
  id: number;
  firstName: string;
  surname: string;
  email: string;
  color?: string;
};

export function createNewContact(): Contact {
  return {
    id: 0,
    firstName: '',
    surname: '',
    email: '',
  };
}

export function createPartialContact(overrides: Partial<Contact>) : Contact {
  return {
    id: 0,
    firstName: '',
    surname: '',
    email: '',
    ...overrides
  }
}
