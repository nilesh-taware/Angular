import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
export const routes: Routes = [
    { path: '', component:HomeComponent  },
  { path: 'about', component:AboutusComponent },
  {path:'contact',component:ContactusComponent},
  {path:'notfound',component:PagenotfoundComponent},
  {path:'gallery',component:GalleryComponent}
];
