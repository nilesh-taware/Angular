import {trigger,transition,style,animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-animator',
  standalone: true,
  templateUrl: './animator.component.html',
  styleUrls: ['./animator.component.css'],
  imports: [CommonModule,BrowserAnimationsModule],
  animations: [
    trigger('slideInBottom', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('1000ms ease-out', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class AnimatorComponent {
  imageVisible = true;

  toggleImage() {
    this.imageVisible == false
      ? (this.imageVisible = true)
      : (this.imageVisible = false);
  }

}

//Add provideAnimations() in your app.config file get get animation effescts
1.

