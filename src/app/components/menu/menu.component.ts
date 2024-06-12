import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dp-menu',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
