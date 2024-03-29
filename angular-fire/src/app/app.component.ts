import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import{AngularFireModule}from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebase),
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'angular-fire';
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
 });

 onSubmit() {
    console.log(this.form.value);
    // Save data to Firebase here
 }
}
