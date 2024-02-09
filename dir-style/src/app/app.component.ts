import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dir-style';
  isActive=false;
  btnSwitch()
  {
    this.isActive=!this.isActive
  }
  getSuccess() {
    return {
      'background-color': 'lightgreen',
      'padding': '10px',
      'font-size': '20px'
    };
  }
  getError() {
    return {
      'background-color': 'red',
      'padding': '10px',
      'font-size': '20px'
    };
  }
}
