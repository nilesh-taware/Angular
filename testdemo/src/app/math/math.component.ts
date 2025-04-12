import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {

  add(a:number,b:number){
    return a+b;
  }
  sub(a:number,b:number){
    return a-b;
  }
  multi(a:number,b:number){
    return a*b;
  }
  div(a:number,b:number){
  return a/b;
  }



}
