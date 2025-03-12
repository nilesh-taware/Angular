import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pipe-filter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pipe-filter.component.html',
  styleUrl: './pipe-filter.component.css'
})
export class PipeFilterComponent {
  selectedRate:number=1;
  products = [
    { id: 1, name: 'Product A', rate: 4.5 },
    { id: 2, name: 'Product B', rate: 3.2 },
    { id: 3, name: 'Product C', rate: 4.5 },
    { id: 4, name: 'Product D', rate: 2.0 },
  ];



}
