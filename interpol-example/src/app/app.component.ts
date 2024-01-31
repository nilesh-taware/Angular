import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpol-example';
  student1={

    roll_number:'11',
    stud_name:'Nilesh',
    stud_marks:'100',
    stud_clg:'JG University'
  };
  student2={
    roll_number:'12',
    stud_name:'Nitin',
    stud_marks:'60',
    stud_clg:'JG University'
  };
  student3={

    roll_number:'1',
    stud_name:'Akash',
    stud_marks:'20',
    stud_clg:'JG University'
  };
  student4={
    roll_number:'21',
    stud_name:'Mukesh',
    stud_marks:'30',
    stud_clg:'JG University'
  };
}
