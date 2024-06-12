import { Contact } from "../models/contact";
import { ContactNamePipe } from "./contact-name.pipe";

describe('ContactNamePipe', () => {
  let sut: ContactNamePipe;

  beforeEach(() => {
    sut = new ContactNamePipe();
  });

  it('Should give correct contact name', () => {
    let contact: Contact = { id: 1, firstName: 'John', surname: 'Doe', email: "ruben.vandenbrink@infosupport.com" };
    const expected = 'John Doe';
    const result = sut.transform(contact);

    expect(result).toBe(expected);
  });
});