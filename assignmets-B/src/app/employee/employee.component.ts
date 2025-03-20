import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  appTitle='Employee Details';
  employeeDetails:any[]=[

    {id:1,name:'Nil MEvada',dept:'IT',city:'Ahmedabad'},
    {id:2,name:'Nilesh Taware',dept:'IT',city:'Mumbai'},
    {id:3,name:'Sanjana Jayswal',dept:'Comp Science',city:'Ahmedabad'}
  ];


}
