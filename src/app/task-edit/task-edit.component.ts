import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { TasksService } from '../tasks.service';  

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  angForm: FormGroup;  
  task: any = {};

  constructor(
    private route: ActivatedRoute, 
    private router: Router,     
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

    ngOnInit(): void {
      this.route.params.subscribe(params => {  
        this.tasksService.editTask(params['id']).subscribe(res => {  
          this.task = res;  
      });  
    });    
  }

  updateTask(TaskName, TaskDescription, TaskPriority, TaskDeadline): void {
    console.log('Update is started')
    this.route.params.subscribe(params => {  
      this.tasksService.updateTask(TaskName, TaskDescription, TaskPriority, TaskDeadline, params.id);  
      this.router.navigate(['tasks']);  
    });    
  }

  parseDate(dateString: string): Date {
    console.log('parseDate called with ' + dateString)
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }  
}
