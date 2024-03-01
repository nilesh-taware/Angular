import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './mycomponent/home/home.component';
import { AboutComponent } from './mycomponent/about/about.component';
import { ContactComponent } from './mycomponent/contact/contact.component';
import { GalleryComponent } from './mycomponent/gallery/gallery.component';
import { PagenotfoundComponent } from './mycomponent/pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,HomeComponent,AboutComponent,ContactComponent,GalleryComponent,
    PagenotfoundComponent,AboutComponent],
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
