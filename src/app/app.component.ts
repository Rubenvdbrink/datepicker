import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterModule, MenuComponent]
})
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'Angular';
  }
}
