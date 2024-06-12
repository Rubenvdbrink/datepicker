import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PlannedEvent } from '../models/planned-event';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class EventService {
  http = inject(HttpClient);

  getAll(): Observable<PlannedEvent[]> {
    return this.http.get<PlannedEvent[]>(`${environment.backendUrl}/events`);
  }
  get(id: PlannedEvent['id']): Observable<PlannedEvent> {
    return this.http.get<PlannedEvent>(
      `${environment.backendUrl}/events/${id}`
    );
  }
  create({ id, ...eventData }: PlannedEvent): Observable<PlannedEvent> {
    return this.http.post<PlannedEvent>(
      `${environment.backendUrl}/events`,
      eventData
    );
  }
  update({ id, ...eventData }: PlannedEvent): Observable<PlannedEvent> {
    return this.http.put<PlannedEvent>(
      `${environment.backendUrl}/events/${id}`,
      eventData
    );
  }
}
