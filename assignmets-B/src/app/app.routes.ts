import { SyllabusComponent } from './../../../productlist/src/app/syllabus/syllabus.component';
import { Routes } from '@angular/router';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { DatafilterComponent } from './datafilter/datafilter.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { SyllabusComponent } from './syllabus/syllabus.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { StudentComponent } from './student/student.component';
import { AnimatorComponent } from './animator/animator.component';
import { VideosearchComponent } from './videosearch/videosearch.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'staff',
    component: StaffDetailComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'api-call',
    component: HttpRequestComponent,
  },
  {
    path: 'data-filter',
    component: DatafilterComponent,
  },
  {
    path: 'student-data',
    component: StudentdataComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'ticket',
    component: TicketbookingComponent,
  },
  {
    path: 'syllabus',
    component: SyllabusComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },

  {
    path: 'animator',
    component: AnimatorComponent,
  },
  {
    path: 'youtube',
    component: VideosearchComponent,
  },
  
  { path: '**', component: PagenotfoundComponent },
];
