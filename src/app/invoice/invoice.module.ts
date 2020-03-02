import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceTopComponent } from './invoice-top/invoice-top.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { LineItemComponent } from './line-item/line-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';


@NgModule({
  declarations: [InvoiceTopComponent, InvoiceListComponent, InvoiceAddComponent, LineItemComponent, InvoiceDetailComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvoiceModule { }
