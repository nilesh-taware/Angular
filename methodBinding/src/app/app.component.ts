import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Method Binding';

  OnBtnClick()
  {
    console.log('This is my second application.!');
  }
  submitMethod()
  {
    alert(this.title);
  }

}
