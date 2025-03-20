import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css'
})
export class HttpRequestComponent {
userList:any[]=[];
newsDisplay:any[]=[];
  news: any;
  newsService: any;
  constructor(private http:HttpClient){

  }

  getallUser(){

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    this.userList=res;

    });
  }


  }


