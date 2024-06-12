import { Component, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact-service';
import { ContactListComponent } from '../../components/contact-list/contact-list.component';
import { DpContactFormComponent } from '../../components/dp-contact-form/dp-contact-form.component';

@Component({
    selector: 'dp-contacts-page',
    standalone: true,
    templateUrl: './contacts-page.component.html',
    styleUrl: './contacts-page.component.scss',
    imports: [ContactListComponent, DpContactFormComponent]
})
export class ContactsPageComponent implements OnInit {
  contactsService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.setContacts();
  }

  contactAdded(contact: Contact) {
    this.setContacts();
    console.log(`Contact added: ${contact.firstName} ${contact.surname}`);
  }

  setContacts() {
    this.contactsService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

}
