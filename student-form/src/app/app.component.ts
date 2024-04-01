import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  ngOnInit() {
     this.userForm = new FormGroup({
       'name': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
       'mobile': new FormControl(null, [Validators.required, Validators.pattern('^\\d{10}$')]),
       'pincode': new FormControl(null, [Validators.required, Validators.pattern('^\\d{6}$')]),
       'email': new FormControl(null, [Validators.required, Validators.email])
     });
  }

  onSubmit() {
     console.log(this.userForm.value);
  }
}
