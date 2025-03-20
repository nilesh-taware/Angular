import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgArrayPipesModule } from 'ngx-pipes';
import { myClassPipe } from './myPipe';

@Component({
  selector: 'app-datafilter',
  standalone: true,
  imports: [NgArrayPipesModule,CommonModule,FormsModule],
  templateUrl: './datafilter.component.html',
  styleUrl: './datafilter.component.css'
})
export class DatafilterComponent {

  searchTerm=''
  userData:any[]=[
    {
      id: 1,
      name: "Rohit",
      email: "rohit@gmail.com",
      age: 28,
      isActive: "Yes",
  },
  {
      id: 2,
      name: "Nitesh Rane",
      email: "niteshrane@gmail.com",
      age: 34,
      isActive: "No",
  },
  {
      id: 3,
      name: "Sanjana Jaiswal",
      email: "sanjana@gmail.com",
      age: 22,
      isActive: true,
  },
  {
      id: 4,
      name: "Shreyas Trivedi",
      email: "shreyas@gmail.com",
      age: 30,
      isActive: true,
  },
  {
      id: 5,
      name: "Shreya Pota",
      email: "pota.shreya@gmail.com",
      age: 25,
      isActive: false,
  },
  {
      id: 6,
      name: "Farhan Rastogi",
      email: "farhanrastogi@gmail.com",
      age: 27,
      isActive: true,
  },
  {
      id: 7,
      name: "Mahesh Pawar",
      email: "maheshpawar@gmail.com",
      age: 40,
      isActive: false,
  },
  {
      id: 8,
      name: "Hansraj Baker",
      email: "hansrajBaker@gmail.com",
      age: 19,
      isActive: true,
  },
  {
      id: 9,
      name: "Ivan ROy",
      email: "ivan@gmail.com",
      age: 45,
      isActive: true,
  },
  {
      id: 10,
      name: "Jessica Rohan",
      email: "jr@gmail.com",
      age: 32,
      isActive: "No",
  },
  ];


  //Inbuild angular pipes
companyName='ABC Corporation';
purchaseDate='12-12-24';
purchaseAmount=120000;

myName='Nilesh Taware';

todayDate='12-02-23';



}
