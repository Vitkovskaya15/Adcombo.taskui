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
  getTasks(TaskPriority) {  
    let uri = `${this.uri}`;
    if (TaskPriority && TaskPriority >= 0)
      uri = uri + "/" + TaskPriority;
    return this  
           .http  
           .get(uri);  
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
  updateTask(TaskName, TaskDescription, TaskPriority, TaskDeadline, id) {
    const obj = {  
      TaskName,  
      TaskDescription, 
      TaskPriority,
      TaskDeadline
    };  
    this  
      .http  
      .post(`${this.uri}/update/${id}`, obj)  
      .subscribe(res => console.log('Update is Done'));      
  }
  finishTask(TaskDone, id) {
    const obj = {
      TaskDone
    }
    this
      .http
      .post(`${this.uri}/finish/${id}`, obj)
      .subscribe(res => console.log('Finish is Done'));
  }
}
