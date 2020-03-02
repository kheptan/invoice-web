import { Injectable } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../common/page';
import { Invoice } from './invoice-model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoieResolverService implements Resolve<Page<Invoice>>{

  constructor(private service: InvoiceService) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<Page<Invoice>>{
      return this.service.getInvoices(0);
  }
}
