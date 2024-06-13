import { Injectable, signal } from '@angular/core';
import { EventService } from '../../services/events-service';
import { PlannedEvent } from '../../models/planned-event';

@Injectable({
  providedIn: 'root',
})
export class EventStore {
  readonly #allEvents = signal<PlannedEvent[]>([]);
  readonly allEvents = this.#allEvents.asReadonly();

  constructor(eventService: EventService) {
    eventService.getAll().subscribe(events => this.#allEvents.set(events));
  }
}
