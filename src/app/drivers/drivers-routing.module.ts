import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverTopComponent } from './driver-top/driver-top.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverAddUpdateComponent } from './driver-add-update/driver-add-update.component';
import { DriverResolverService } from './driver-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: DriverTopComponent, 
    children: [
      {
        path: '',
        component: DriverListComponent,
        resolve : {items: DriverResolverService},
        children: [
          {
            path: 'driver/:id',
            component: DriverDetailComponent
          },
          {
            path: 'add',
            component: DriverAddUpdateComponent      
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
