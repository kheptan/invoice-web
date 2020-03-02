import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { ClientTopComponent } from './client-top/client-top.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientAddUpdateComponent } from './client-add-update/client-add-update.component';


@NgModule({
  declarations: [ClientTopComponent, ClientListComponent, ClientDetailComponent, ClientAddUpdateComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
