import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  uri = 'http://localhost:4000/tasks';  
  constructor(private http: HttpClient) { }  
  addTask(TaskName, TaskDescription, TaskPriority, TaskDeadline, TaskCreated, TaskDone) {      
    const obj = {  
      TaskName,  
      TaskDescription,  
      TaskPriority,
      TaskDeadline,
      TaskCreated,
      TaskDone
    };  
    console.log(obj);  
    this.http.post(`${this.uri}/add`, obj)  
        .subscribe(res => console.log('Done'));  
  }  
  getTasks() {  
    return this  
           .http  
           .get(`${this.uri}`);  
  }    
  deleteTask(id: any) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`)
  }
  editTask(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`)
  }
  updateTask(TaskName, TaskDescription, TaskPriority, id) {
    const obj = {  
      TaskName,  
      TaskDescription, 
      TaskPriority
    };  
    this  
      .http  
      .post(`${this.uri}/update/${id}`, obj)  
      .subscribe(res => console.log('Update is Done'));      
  }
}
