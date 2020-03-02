import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../common/page';
import { Invoice } from './invoice-model/invoice';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoices(pageNo: number | string):Observable<Page<Invoice>> {
    let url = `http://localhost:8080/app/invoice?pageNo=${pageNo}`;
    return this.http.get<Page<Invoice>>(url);
  }

  getInvoice(id: number | string): Observable<Invoice> {
    let url = `http://localhost:8080/app/invoice/${id}`;
    return  this.http.get<Invoice>(url);
  }

  addInvoice(invoice:Invoice): Observable<Invoice>{
    httpOptions.headers =
          httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let url = "http://localhost:8080/app/invoice/add";
    return this.http.post<Invoice>(url,invoice,httpOptions);
  }
}
