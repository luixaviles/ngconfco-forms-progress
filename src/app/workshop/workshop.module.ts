import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WorkshopAddComponent } from './workshop-add/workshop-add.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkshopEditComponent } from './workshop-edit/workshop-edit.component';

@NgModule({
  declarations: [WorkshopComponent, WorkshopListComponent, WorkshopAddComponent, WorkshopEditComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkshopModule { }
