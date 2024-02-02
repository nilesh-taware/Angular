import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Image On Click Event Example';
   imgCount=0;
   btnClickCount=0;
  onImageClick()
  {
    this.imgCount++;
    alert('You Clicked Image..!'+'You Clicked Image:');
  }
  btnClick()
  {
    this.btnClickCount++;
    alert('You clicked button.');
  }
}
