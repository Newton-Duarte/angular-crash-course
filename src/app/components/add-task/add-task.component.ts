import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder = false;
  @Output() onAddTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a text for the task');
    }
    const newTask = { text: this.text, day: this.day, reminder: this.reminder }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
