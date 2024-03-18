import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
//import { EventEmitter} from '@angular/core';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title: String = '';

    addItem(value: String): void {
        this.title = value;
    }

}
