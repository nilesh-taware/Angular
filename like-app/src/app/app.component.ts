import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'like-app';
  likeCount=false;
  count=0;
  likeButton()
  {
    this.count++;
    if (this.likeCount) {
      this.likeCount=!this.likeCount;
    } else {
      this.count-1;
    }
    
  }
}
