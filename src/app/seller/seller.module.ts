import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerTopComponent } from './seller-top/seller-top.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddUpdateComponent } from './seller-add-update/seller-add-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SellerTopComponent, SellerDetailComponent, SellerListComponent, SellerAddUpdateComponent, SellerAddUpdateComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
