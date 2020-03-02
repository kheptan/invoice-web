import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceTopComponent } from './invoice-top/invoice-top.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { LineItemComponent } from './line-item/line-item.component';
import { InvoieResolverService } from './invoie-resolver.service';


const routes: Routes = [
  { 
    path: '', 
    component: InvoiceTopComponent, 
    children: [
      {
        path: '',
        component: InvoiceListComponent,
        resolve : {items: InvoieResolverService},
        children: [
          {
            path: 'invoice/:id',
            component: InvoiceDetailComponent
          },
          {
            path: 'add',
            component: InvoiceAddComponent
            /* children: [
              {
                path: 'item',
                component: LineItemComponent
              }
            ]
             */
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
export class InvoiceRoutingModule { }
