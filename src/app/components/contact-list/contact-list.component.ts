import { Component, inject, input } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactNamePipe } from '../../pipes/contact-name/contact-name.pipe';
import { ContactStore } from '../../events/stores/contact-store.service';

@Component({
  selector: 'dp-contact-list',
  standalone: true,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  imports: [ContactNamePipe],
})
export class ContactListComponent {
  contactStore = inject(ContactStore);
  contacts = this.contactStore.contacts;

  updateColor(contact: Contact, event: Event) {
    const htmlinput = event.target as HTMLInputElement;
    const value = htmlinput.value;
    this.editContact({ ...contact, color: value });
  }

  deleteContact(contact: Contact) {
    this.contactStore.deleteContact(contact);
  }

  editContact(contact: Contact) {
    this.contactStore.putContact(contact);
  }
}
