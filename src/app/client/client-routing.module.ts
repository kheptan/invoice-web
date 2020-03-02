import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientAddUpdateComponent } from './client-add-update/client-add-update.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientTopComponent } from './client-top/client-top.component';
import { ClientResolverService } from './client-resolver.service';


const routes: Routes = [
  { 
    path: '', 
    component: ClientTopComponent, 
    children: [
      {
        path: '',
        component: ClientListComponent,
        resolve : {items: ClientResolverService},
        children: [
          {
            path: 'client/:id',
            component: ClientDetailComponent
          },
          {
            path: 'add',
            component: ClientAddUpdateComponent
            
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
export class ClientRoutingModule { }
