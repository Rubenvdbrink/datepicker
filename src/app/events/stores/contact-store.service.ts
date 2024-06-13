import { Injectable, signal } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact-service';

@Injectable({
  providedIn: 'root',
})
export class ContactStore {
  readonly #contacts = signal<Contact[]>([]);
  readonly contacts = this.#contacts.asReadonly();
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
    this.contactService
      .getAll()
      .subscribe((contacts) => this.#contacts.set(contacts));
  }

  addContact(contact: Contact) {
    this.contactService.addContact(contact).subscribe((newContact) => {
      this.#contacts.set([...this.#contacts(), newContact]);
    });
  }

  putContact(contact: Contact) {
    this.contactService.putContact(contact).subscribe((updatedContact) => {
      const index = this.#contacts().indexOf(contact);
      this.#contacts()[index] = { ...updatedContact };
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(() => {
      this.#contacts.set(this.#contacts().filter((c) => c !== contact));
    });
  }
}
