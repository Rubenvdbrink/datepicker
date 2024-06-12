import { Routes } from '@angular/router';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EditEventPageComponent } from './pages/edit-events-page/edit-events-page.component';

export const routes: Routes = [
  { path: '', component: ContactsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'events/edit/:id', component: EditEventPageComponent },
];
