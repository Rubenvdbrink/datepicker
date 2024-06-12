import { Component, NgModule, OnInit, inject } from '@angular/core';
import { PlannedEvent } from '../../models/planned-event';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventService } from '../../services/events-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dp-edit-events-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-events-page.component.html',
  styleUrl: './edit-events-page.component.scss',
})
export class EditEventPageComponent implements OnInit {
  plannedEvent?: PlannedEvent;

  route = inject(ActivatedRoute);
  router = inject(Router);
  eventService = inject(EventService);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');

      if (id !== null) {
        let parsedId = parseInt(id, 10);
        this.eventService.get(parsedId).subscribe((event) => {
          this.plannedEvent = event;
        });
      }
    });
  }
  async update() {
    if (this.plannedEvent !== undefined) {
      this.eventService.update(this.plannedEvent).subscribe(() => {
        this.router.navigate(['/events']);
        
        // bij gebrek aan toast:
        console.log('Event updated');
      });
    }
  }
}
