import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './myComponent/home-component/home-component.component';
import { AboutComponentComponent } from './myComponent/about-component/about-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  HomeComponentComponent,
AboutComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
}
