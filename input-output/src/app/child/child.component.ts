import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() exampleEvent = new EventEmitter();

        displayText() {
            this.exampleEvent.emit("Sending data to a parent component");
        }
}
