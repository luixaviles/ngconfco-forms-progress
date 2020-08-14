import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopAddComponent } from './workshop/workshop-add/workshop-add.component';
import { WorkshopEditComponent } from './workshop/workshop-edit/workshop-edit.component';
import { WorkshopListComponent } from './workshop/workshop-list/workshop-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workshop/list',
    pathMatch: 'full'
  },
  {
    path: 'workshop',
    redirectTo: 'workshop/list'
  },
  {
    path: 'workshop/list', // url
    component: WorkshopListComponent
  },
  {
    path: 'workshop/add', // url
    component: WorkshopAddComponent
  },
  {
    path: 'workshop/edit/:id',
    component: WorkshopEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
