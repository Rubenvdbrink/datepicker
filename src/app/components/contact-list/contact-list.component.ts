import { Component, inject, input } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactNamePipe } from '../../pipes/contact-name/contact-name.pipe';
import { ContactService } from '../../services/contact-service';

@Component({
  selector: 'dp-contact-list',
  standalone: true,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  imports: [ContactNamePipe],
})
export class ContactListComponent {
  contacts = input.required<Contact[]>();
  contactService = inject(ContactService);

  updateColor(contact: Contact, event: Event) {
    const htmlinput = event.target as HTMLInputElement;

    const index = this.contacts().indexOf(contact);
    this.contacts()[index] = { ...contact, color: htmlinput.value };
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(() => {
      this.contacts().splice(this.contacts().indexOf(contact), 1);
      // bij gebrek aan toast:
      console.log(`Contact deleted: ${contact.firstName} ${contact.surname}`);
    });
  }

  editContact(contact: Contact) {
    this.contactService.putContact(contact).subscribe(() => {
      const index = this.contacts().indexOf(contact);
      this.contacts()[index] = { ...contact };
      // bij gebrek aan toast:
      console.log(`Contact updated: ${contact.firstName} ${contact.surname}`);
    });
  }
}
