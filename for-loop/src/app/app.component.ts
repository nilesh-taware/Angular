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
    {name: 'Maggie', price: 10.99 },
    {name: 'Oats', price: 15.99},
    {name: 'Pasta', price: 12.99},
    {name: 'Rice', price: 18.99},
    {name: 'Sugar', price: 13.99},
    {name: 'Oil', price: 10.99 },
    {name: 'Choclate', price: 15.99},
    {name: 'Corn', price: 12.99},
    {name: 'Biscuits', price: 18.99},
    {name: 'Protein', price: 13.99}
  ];
}
