import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { ComponentRef } from '@angular/core';
import { Contact } from '../models/contact';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<ContactListComponent>;
  let componentRef: ComponentRef<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    componentRef = fixture.componentRef;
  });

  it('should show 2 contacts when 2 contacts are bound', () => {
    setContacts([
      { id: 1, firstName: 'John', surname: 'Doe', email: '' },
      { id: 2, firstName: 'Sjon', surname: 'Doe', email: '' },
    ]);

    fixture.detectChanges();

    const contactElements = element.querySelectorAll('.row');

    expect(contactElements.length).toBe(2);
  });

  it('should show the full name of a contact by using the pipe', () => {
    setContacts([
        { id: 1, firstName: 'John', surname: 'Doe', email: '' },
        { id: 2, firstName: 'Sjon', surname: 'Doe', email: '' },
    ]);

    fixture.detectChanges();

    const contactElements = element.querySelectorAll('.row');

    expect(contactElements[0].textContent).toContain('John Doe');
    expect(contactElements[1].textContent).toContain('Sjon Doe');
  });

  function setContacts(contacts: Contact[]) {
    componentRef.setInput('contacts', contacts);
  }
});
