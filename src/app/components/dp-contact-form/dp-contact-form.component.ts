import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact-service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'dp-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dp-contact-form.component.html',
  styleUrl: './dp-contact-form.component.scss',
})
export class DpContactFormComponent {
  contacts = input.required<Contact[]>();
  contactAdded = output<Contact>();
  contactService = inject(ContactService);

  newContact: Contact = {
    id: 0,
    email: '',
    firstName: '',
    surname: '',
  };

  addContact(form: NgForm) {
    this.contactService.addContact(this.newContact).subscribe((contact) => {
      this.contactAdded.emit(contact);
    });
    this.newContact = {
      id: 0,
      email: '',
      firstName: '',
      surname: '',
    };
    form.reset();
  }

  // addContact(form: NgForm) {
  //   this.contacts().push(this.newContact);
  //   this.contactAdded.emit(this.newContact);
  //   this.newContact = {
  //     id: 0,
  //     email: '',
  //     firstName: '',
  //     surname: '',
  //   };
  //   form.reset();
  // }
}
