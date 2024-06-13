import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact-service';
import {
  Contact,
  createNewContact,
  createPartialContact,
} from '../../models/contact';
import { ContactStore } from '../../events/stores/contact-store.service';

@Component({
  selector: 'dp-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dp-contact-form.component.html',
  styleUrl: './dp-contact-form.component.scss',
})
export class DpContactFormComponent {
  contactAdded = output<Contact>();
  contactStore = inject(ContactStore);

  newContact: Contact;

  constructor() {
    this.newContact = createPartialContact({ firstName: 'Placeholder name' });
  }

  addContact(form: NgForm) {
    this.contactStore.addContact(this.newContact);
    this.newContact = createNewContact();
    form.reset();
  }
}
