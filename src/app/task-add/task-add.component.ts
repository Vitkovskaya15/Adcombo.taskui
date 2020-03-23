import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { TasksService } from '../tasks.service';  

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  angForm: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService) {  
    this.createForm();  
  } 

  createForm() {  
    this.angForm = this.fb.group({  
      TaskName: ['', Validators.required ],  
      TaskDescription: ['', Validators.required ],  
      TaskPriority: ['', Validators.required ],
      TaskDeadline: [''] 
    });  
  }  

  addTask(TaskName, TaskDescription, TaskPriority, TaskDeadline) {  
    let TaskCreated = new Date()
    let TaskDone: Date = null

    this.tasksService.addTask(TaskName, TaskDescription, TaskPriority, TaskDeadline, TaskCreated, TaskDone);  
  }  

  ngOnInit(): void {
  }

}
