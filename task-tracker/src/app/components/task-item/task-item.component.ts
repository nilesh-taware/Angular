import { Component } from '@angular/core';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [TasksComponent,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
addTask($event: Event) {
throw new Error('Method not implemented.');
}

  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  //faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task);
  }
}
