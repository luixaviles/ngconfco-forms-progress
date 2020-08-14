import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WorkshopAddComponent } from './workshop-add/workshop-add.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkshopComponent, WorkshopListComponent, WorkshopAddComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class WorkshopModule { }
