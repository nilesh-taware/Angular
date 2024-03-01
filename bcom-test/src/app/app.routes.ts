import { Routes } from '@angular/router';
import { HomeComponent } from './mycomponent/home/home.component';
import { AboutComponent } from './mycomponent/about/about.component';
import { GalleryComponent } from './mycomponent/gallery/gallery.component';
import { ContactComponent } from './mycomponent/contact/contact.component';
import { PagenotfoundComponent } from './mycomponent/pagenotfound/pagenotfound.component';
export const routes: Routes = [
            {path: ' ', component: HomeComponent },
            {path:'contact',component:ContactComponent},
            {path:'about',component:AboutComponent},
            {path:'gallery',component:GalleryComponent},
            {path:'**',component:PagenotfoundComponent}
        ];
