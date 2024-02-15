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
  title = 'bcom-This is practice app for student';
  btnClickCount=0;
  isTodaySunday=false;
  isServerActive=true;
  onBtnClick()
  {
    this.btnClickCount++;
    //alert('You Clicked Button.'+this.btnClickCount);
  }
  onBtntClick()
  {
    this.isTodaySunday=!this.isTodaySunday;

  }
}
