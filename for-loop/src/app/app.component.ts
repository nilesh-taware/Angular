import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';//Module required for use of *ngFor Directive

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product List';
  standalone=true;

  products: Product[] = [
    {name: 'Maggie', price: 10.99},
    {name: 'Maggie', price: 10.99},
    {name: 'Maggie', price: 10.99},
    {name: 'Maggie', price: 10.99}
    
  ];
}
