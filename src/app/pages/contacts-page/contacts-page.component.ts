import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactListComponent } from '../../components/contact-list/contact-list.component';
import { DpContactFormComponent } from '../../components/dp-contact-form/dp-contact-form.component';

@Component({
    selector: 'dp-contacts-page',
    standalone: true,
    templateUrl: './contacts-page.component.html',
    styleUrl: './contacts-page.component.scss',
    imports: [ContactListComponent, DpContactFormComponent]
})
export class ContactsPageComponent {
  // contactStore = inject(ContactStore); 
  // contacts = this.contactStore.contacts;

  contactAdded(contact: Contact) {
    // this.contactStore.addContact(contact);
    console.log(`Contact added: ${contact.firstName} ${contact.surname}`);
  }
}
