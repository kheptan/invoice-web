import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerTopComponent } from './seller-top/seller-top.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddUpdateComponent } from './seller-add-update/seller-add-update.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';


const routes: Routes = [
  { 
    path: '', 
    component: SellerTopComponent, 
    children: [
      {
        path: '',
        component: SellerListComponent,
        //resolve : {items: DriverResolverService},
        children: [
          {
            path: 'seller/:id',
            component: SellerDetailComponent
          },
          {
            path: 'add',
            component: SellerAddUpdateComponent
            
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
export class SellerRoutingModule { }
