import { initializeApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListDtudentComponent } from './list-dtudent/list-dtudent.component';
import {AngularFirestoreModule}from '@angular/fire/firestore'
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: false,
  imports: [RouterOutlet,RouterModule,CreateStudentComponent,EditStudentComponent,ListDtudentComponent,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-firebase-crud-example';
}
