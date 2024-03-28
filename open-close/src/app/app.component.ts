import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  standalone: true,
  imports: [RouterOutlet,BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    provideAnimations(),
  ]
})
export class AppComponent {
  title = 'open-close';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
