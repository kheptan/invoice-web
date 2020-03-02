import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Observable } from 'rxjs';
import { Invoice } from '../invoice-model/invoice';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  invoice$: Observable<Invoice>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InvoiceService
  ) { }

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice() {
    this.invoice$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.service.getInvoice(params.get('id'))
      )
    );
  }

}
