import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail/hero-detail.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,UpperCasePipe,FormsModule,HeroesComponent,MessagesComponent,HeroDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JG UNIVERSITY HEROES';
}
