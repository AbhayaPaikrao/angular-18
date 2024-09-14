import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[TaskComponent,TasksComponent,NewTaskComponent],
    exports: [TasksComponent],
    imports:[BrowserModule,CommonModule,SharedModule]
})
export class TaskModule{}