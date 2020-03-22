import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';  

const routes: Routes = [
  {  
    path: 'task/create',  
    component: TaskAddComponent  
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
