import { Component, OnInit, inject } from '@angular/core';
import { ContactNamePipe } from '../../pipes/contact-name/contact-name.pipe';
import { RouterLink } from '@angular/router';
import { EventStore } from '../../events/stores/event-store.service';

@Component({
  selector: 'dp-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  imports: [ContactNamePipe, RouterLink],
})
export class EventsPageComponent {
  eventStore = inject(EventStore);
  events = this.eventStore.allEvents;
}
