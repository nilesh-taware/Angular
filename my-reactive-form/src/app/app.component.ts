import { ReactiveFormsModule,FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule}from'@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,MatCardModule,MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form;
  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      message: [''],
    });
  }
  ngOnInit() {
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }
}
