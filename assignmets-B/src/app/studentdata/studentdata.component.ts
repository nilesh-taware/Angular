import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-studentdata',
  standalone: true,
  imports: [OrderModule,FormsModule,CommonModule],
  templateUrl: './studentdata.component.html',
  styleUrl: './studentdata.component.css'
})
export class StudentdataComponent {
  students = [
    { name: 'Drashti Adalaja', age: 21, grade: 'A' },
    { name: 'Yuvraj Bhati', age: 22, grade: 'B' },
    { name: 'Krishna Agrawal', age: 20, grade: 'A+' },
    { name: 'Divya Patil', age: 23, grade: 'B+' },
    { name: 'Shreya Kava', age: 19, grade: 'C' }
  ];

}
