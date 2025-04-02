import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomPipe } from '../pipes/custom.pipe';

@Component({
  selector: 'app-staff-detail',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,CustomPipe],
  templateUrl: './staff-detail.component.html',
  styleUrl: './staff-detail.component.css'
})
export class StaffDetailComponent {
  staffDetails=[
    { id: 1, name: 'Nilesh Taware', department: 'IT', position: 'Professor' },
    { id: 2, name: 'Nil Mevada', department: 'Computer Science', position: 'Assistant Professor' },
    { id: 3, name: 'Jaydeep Rathod', department: 'Mathematics', position: 'Professor' },
    { id: 4, name: 'Shreya Pota', department: 'Physics', position: 'Assistant Professor' },
    { id: 5, name: 'Sanjabna Jayswal', department: 'Chemistry', position: 'Professor' },
    { id: 6, name: 'Meenaxi Malla', department: 'Biology', position: 'Assistant Professor' },
    { id: 7, name: 'Janvi Solanki', department: 'English', position: 'Professor' }
  ];


  displayStaffDetails(){

  }

}
