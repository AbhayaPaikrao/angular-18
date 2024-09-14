
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NewTaskData } from './task/task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  //standalone: true,
  //imports: [JsonPipe, TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() name?: string;
  // @Input() name: string | undefined;
  @Input({required: true}) userId!:string;
  isAddingTask = false;
  constructor (private tasksService :TasksService){}
  //private tasksService = new TasksService();
 
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id : string){
   // this.tasks =this.tasks.filter((task) => task.id !== id); 
   return this.tasksService.getUserTasks(this.userId);
  }
  onStartAddTask(){
    this.isAddingTask= true;
  }
  onCancelAddTask(){
    this.isAddingTask = false;  
  }
  onAddTask(taskData:NewTaskData){
    // this.tasks.push({
    //   id: new Date().getTime().toString(),
    //   userId:this.userId,
    //   title: taskData.title,
    //   summary:taskData.summary,
    //   dueDate :taskData.date
    // });
    this.isAddingTask = false;
  }
}
