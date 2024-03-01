import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  ContactusComponent,GalleryComponent,RouterModule,AboutusComponent,HomeComponent,PagenotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
  
}
