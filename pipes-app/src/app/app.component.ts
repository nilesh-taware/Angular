import { Component,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe,DatePipe,CurrencyPipe,JsonPipe,SlicePipe} from '@angular/common';
import { TestPipePipe } from './pipes/test-pipe.pipe';
import { UpperCasePipe } from '@angular/common';
import { CurrencyExchangePipe } from './pipes/currencyExchange.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,SlicePipe,JsonPipe,TestPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-app';
  caps='THIS IS LOWERCASE PIPE';
  today=Date();
  birthday=new Date(1998,12,15);
  toggle=true;
  Salary=10000;
  myJSON = {"name":"nitesh", "age":30, "car":null};
  get format(){
    return this.toggle?'mediumDate':'fullDate';
  }
  toggleFormat()
  {
    this.toggle=!this.toggle;
  }
  
}
