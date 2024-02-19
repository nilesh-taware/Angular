import { Routes } from '@angular/router';
import { HomeComponentComponent } from './myComponent/home-component/home-component.component';
import { AboutComponentComponent } from './myComponent/about-component/about-component.component';
export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
];
