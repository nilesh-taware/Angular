import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  title = 'productlist';

  nameofProduct:string='MacBook';
  priceofProduct:number=150000;
  productQuantity:number=10;
  totalBill:number=0;
  displayTable=false;

  BillTotal(){
    this.displayTable=true;
  this.totalBill=(this.priceofProduct*this.productQuantity);
  }

}
