import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';


const myroutes: Routes = [
           
            {
              path:'family',
              component:GrandparentComponent
            },
            {
              path:'task',
              component:TaskManagerComponent
            }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }