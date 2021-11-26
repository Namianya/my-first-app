import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<any> = new EventEmitter<Task>();
  faTimes = faTimes;
  @Output() onToggleTask: EventEmitter<any> = new EventEmitter<Task>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.onDeleteTask.emit(this.task);
  }
  onToggle(){
    this.onToggleTask.emit(this.task)
  }
}
