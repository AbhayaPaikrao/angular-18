import { Component ,Input, Output} from '@angular/core';

import {Task} from './task.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  //standalone: true,
  //imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

@Input({required: true}) task!:Task;
@Output() complete = new EventEmitter<string>();

onCompleteTask(){
  this.complete.emit(this.task.id);
}

}
