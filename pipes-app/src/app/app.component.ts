import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-app';
  birthday=new Date(1998,12,15);
  toggle=true;
  get format(){
    return this.toggle?'mediumDate':'fullDate';
  }
  toggleFormat()
  {
    this.toggle=!this.toggle;
  }
}
