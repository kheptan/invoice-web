import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTopComponent } from './product-top/product-top.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddUpdateComponent } from './product-add-update/product-add-update.component';
import { ProductResolverService } from './product-resolver.service';


const routes: Routes = [
  { 
    path: '', 
    component: ProductTopComponent, 
    children: [
      {
        path: '',
        component: ProductListComponent,
        resolve : {items: ProductResolverService},
        children: [
          {
            path: 'product/:id',
            component: ProductDetailComponent
          },
          {
            path: 'add',
            component: ProductAddUpdateComponent
            
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
export class ProductRoutingModule { }
