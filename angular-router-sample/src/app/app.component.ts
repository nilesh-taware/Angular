import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterLinkActive } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PageNotFoundComponent,RouterLinkActive,CrisisListComponent,HeroesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router-sample';
}
