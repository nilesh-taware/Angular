import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[StudentService]
})
export class AppComponent {
    students: any[];
    constructor(private injectstudentService: StudentService) {
        this.students = this.injectstudentService.getStudents();
    }
    ngOnInit() {
      this.students = this.injectstudentService.getStudents();
  }
}
