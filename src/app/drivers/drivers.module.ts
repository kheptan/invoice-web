import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverTopComponent } from './driver-top/driver-top.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverAddUpdateComponent } from './driver-add-update/driver-add-update.component';


@NgModule({
  declarations: [
    DriverDetailComponent, 
    DriverTopComponent,
    DriverListComponent,
    DriverAddUpdateComponent
    ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    ReactiveFormsModule
  ]
})
export class DriversModule { }
