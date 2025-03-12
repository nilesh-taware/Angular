import { GameslistComponent } from './gameslist/gameslist.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { PipeFilterComponent } from './pipe-filter/pipe-filter.component';

export const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'games',
    component:GameslistComponent

  },
  {
    path:'syllabus',
    component:SyllabusComponent
  },
  {
    path:'pipe-filter',
    component:PipeFilterComponent
  }
];
