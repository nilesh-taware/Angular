import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HttpClientModule,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'http-Call';
  public getjsonValue:any;
  public postjsonValue:any;
  public putjsonValue:any;
  constructor(private http:HttpClient)
  {}
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
    this.putMethod();
  }
  public getMethod()
  {
    this.http.get('https://dummyjson.com/products/1').subscribe((data)=>
    {
      console.log(data);
      this.getjsonValue=data;
      this.getjsonValue =  this.getjsonValue;

    });
  }
  public postMethod()
  {
    const header=new HttpHeaders({
      contentType:'application/json'
    })
    let body={
      title:'Test title',
      body:'Test body',
      userId:1,
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts',body,
    {headers:header}).subscribe((data)=>
    {
      console.log(data);
      this.postjsonValue=data;

    });
  }

  public putMethod()
  {
    this.http.put('https://jsonplaceholder.typicode.com/posts/1',
    {}).subscribe((data)=>
    {
      console.log(data);
      this.putjsonValue=data;

    });
  }
}
