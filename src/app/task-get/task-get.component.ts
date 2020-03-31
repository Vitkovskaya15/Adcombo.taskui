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
    .getTasks(null)
    .subscribe((data: Task[]) => {
      this.tasks = data
    });
  }

  deleteTask(id): void {
    this.tasksService.deleteTask(id).subscribe(res => {  
      this.tasks.splice(id, 1);  
    });
  }

  taskPriorityToString(TaskPriority) {
    if (TaskPriority == 0)
      return "Обычная";
    if (TaskPriority == 1)
      return "Важная";
    if (TaskPriority == 2)
      return "Очень важная"

    return "Неизвестная важность: " + TaskPriority;
  }

  finishTask(id): void {
    let task = this.tasks.find(task => task._id == id);

    task.TaskDone = new Date();

    this.tasksService.finishTask(task.TaskDone, id);

    console.log("Trying to finish task " + task.TaskName + "(" + id + ")");
  }

  onTaskPriorityChange(TaskPriority): void {
    this.tasksService
    .getTasks(TaskPriority)
    .subscribe((data: Task[]) => {
      this.tasks = data
    });    
  }

  toggleTask(id): void {
    let task = this.tasks.find(task => task._id == id);
    task.TaskChecked = !task.TaskChecked;

    console.log("Task " + id + " status: " + task.TaskChecked);
  }

  removeSelectedTasks(): void {
    let selectedTasks = this.tasks.filter(task => task.TaskChecked);
    if (selectedTasks.length != 0) {
      console.log("removeSelectedTasks");
      let i = 0;

      let deleteSingleTask = () => {
        this.tasksService.deleteTask(selectedTasks[i]._id).subscribe(res => {
          i++;
          if (i < selectedTasks.length) {        
            deleteSingleTask();
          } else {
            this.tasks = this.tasks.filter(task => !task.TaskChecked);
          }
        });
      };

      deleteSingleTask();
    }
  }  
}
