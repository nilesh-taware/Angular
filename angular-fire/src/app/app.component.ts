
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ReactiveFormsModule],
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
