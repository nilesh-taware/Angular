import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(): any[] {
    return [
      {
        ID: 'std101', FirstName: 'Rohit', LastName: 'Tiwary',
        Branch: 'CSE', DOB: '29/02/1998', Gender: 'Female'
    },
    {
        ID: 'std102', FirstName: 'Saurabh', LastName: 'Khatri',
        Branch: 'CSE', DOB: '12/94/1999', Gender: 'Male'
    }
    ];
  }
}
