import { Component ,Input} from '@angular/core';
import { Hero } from '../../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe,CommonModule,FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero: Hero | undefined;
}
