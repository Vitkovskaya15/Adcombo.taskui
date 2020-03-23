import { Component, OnInit } from '@angular/core';
import Task from '../Task';  
import { TasksService } from '../tasks.service';  

@Component({
  selector: 'app-task-get',
  templateUrl: './task-get.component.html',
  styleUrls: ['./task-get.component.css']
})
export class TaskGetComponent implements OnInit {

  tasks: Task[]

  constructor(
    private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService
    .getTasks()
    .subscribe((data: Task[]) => {
      this.tasks = data
    });
  }

  deleteTask(id): void {
    this.tasksService.deleteTask(id).subscribe(res => {  
      this.tasks.splice(id, 1);  
    });  ;
  }

}
