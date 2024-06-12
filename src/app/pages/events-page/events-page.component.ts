import { Component, OnInit, inject } from '@angular/core';
import { PlannedEvent } from '../../models/planned-event';
import { EventService } from '../../services/events-service';
import { ContactNamePipe } from '../../pipes/contact-name/contact-name.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dp-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  imports: [ContactNamePipe, RouterLink],
})
export class EventsPageComponent implements OnInit {
  events: PlannedEvent[] = [];
  eventsService = inject(EventService);

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    this.eventsService.getAll().subscribe((events) => {
      this.events = events;
    });
  }
}
