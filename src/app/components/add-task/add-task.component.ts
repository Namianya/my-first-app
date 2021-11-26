import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<any> = new EventEmitter();
  text!: string;
  completed: boolean = false;
  date!: Date;
  day: string = 'Friday';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('please add the text first');
      return;
    }
    if (!this.date) {
      alert('please add the Date first');
      return;
    }
   const newTask = {
     text: this.text,
     completed: this.completed,
     date: this.date
   };

    this.onAddTask.emit(newTask) ;
    this.text = '';
    this.date = new Date();
  }
}
