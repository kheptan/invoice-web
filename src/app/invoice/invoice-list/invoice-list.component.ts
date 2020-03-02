import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../invoice-model/invoice';
import { Page } from 'src/app/common/page';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Array<Invoice>=[];
  private page: Page<Invoice>;
  private currentPage: number;
  pages$: Observable<Page<Invoice>>;
  
  constructor(private service: InvoiceService,
    private actr: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPage = 0;
    //this.driverService.getDrivers(this.currentPage)
    //this.pages$ = this.driverService.getDrivers(this.currentPage);
    this.actr.data.pipe(map(data=> data.items)).subscribe(val=> {this.invoices = val.content; this.page = val});
  }

  next(event){
    if(this.currentPage < this.page.totalPages && !this.page.last) {
      this.currentPage ++;
    }
    this.service.getInvoices(this.currentPage).subscribe(val=> {this.invoices = val.content; this.page = val});
  }

  back(event){
    if(this.currentPage > 0 && !this.page.first) {
      this.currentPage --;
    }
    this.service.getInvoices(this.currentPage).subscribe(val=> {this.invoices = val.content; this.page = val});
  }


}
