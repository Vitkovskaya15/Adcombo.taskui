import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';  
import { TaskGetComponent } from './task-get/task-get.component';  
import { TaskEditComponent } from './task-edit/task-edit.component';  
const routes: Routes = [
  {  
    path: 'task/create',  
    component: TaskAddComponent  
  },  
  {  
    path: 'tasks',  
    component: TaskGetComponent  
  },  
  {  
    path: 'tasks/edit/:id',  
    component: TaskEditComponent  
  },      
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
