import { Injectable, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ContactService {
  http = inject(HttpClient);

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.backendUrl}/contacts`);
  }

  addContact({ id, ...contactData }: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      `${environment.backendUrl}/contacts`,
      contactData
    );
  }

  deleteContact(contact: Contact): Observable<void> {
    return this.http.delete<void>(
      `${environment.backendUrl}/contacts/${contact.id}`
    );
  }

  putContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(
      `${environment.backendUrl}/contacts/${contact.id}`,
      contact
    );
  }

  // met promise & in memory data
  // async getAllAsync(): Promise<Contact[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.contacts);
  //     }, 5000);
  //   });
  // }
  // contacts: Contact[] = [
  //   { id: 4, firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
  //   {
  //     id: 8,
  //     firstName: 'Frank',
  //     surname: 'Muscles',
  //     email: 'frank@muscles.com',
  //   },
  //   {
  //     id: 15,
  //     firstName: 'Eddy',
  //     surname: 'Valentino',
  //     email: 'eddy@valfam.co.uk',
  //   },
  // ];
}
