import { Component } from '@angular/core';
import { student } from '../model/student.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from "../pipes/custom.pipe";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomPipe],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  students: student[] = [];
  student: student = { rollNo: 0, name: '', course: '' };

  constructor() {
    this.loadStudentsFromLocalStorage();
  }

  saveStudentsToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  loadStudentsFromLocalStorage() {
    const data = localStorage.getItem('students');
    if (data) {
      this.students = JSON.parse(data);
    }
  }

  addOrUpdateStudent() {
    if (!this.student.rollNo || !this.student.name || !this.student.course) {
      alert('All fields are required');
      return;
    }

    const existingIndex = this.students.findIndex(s => s.rollNo === this.student.rollNo);
    if (existingIndex > -1) {
      // Update existing student
      this.students[existingIndex] = { ...this.student };
    } else {
      // Add new student
      this.students.push({ ...this.student });
    }

    this.saveStudentsToLocalStorage();
    this.clearForm();
  }

  editStudent(s: student) {
    this.student = { ...s };
  }

  deleteStudent(rollNo: number) {
    this.students = this.students.filter(s => s.rollNo !== rollNo);
    this.saveStudentsToLocalStorage();
  }

  clearForm() {
    this.student = { rollNo: 0, name: '', course: '' };
  }

}
