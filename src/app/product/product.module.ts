import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductTopComponent } from './product-top/product-top.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddUpdateComponent } from './product-add-update/product-add-update.component';


@NgModule({
  declarations: [ProductTopComponent, ProductListComponent, ProductDetailComponent, ProductAddUpdateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
