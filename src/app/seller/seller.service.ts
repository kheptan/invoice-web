import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from './seller-model/seller';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  constructor(private http: HttpClient) { }

  getSellers():Observable<Seller[]> {
    let url = `http://localhost:8080/app/seller`;
    return this.http.get<Seller[]>(url);
  }

  getSeller(id: number | string): Observable<Seller> {
    let url = `http://localhost:8080/app/seller/${id}`;
    return  this.http.get<Seller>(url);
  }

  addSeller(seller:Seller): Observable<Seller>{
    httpOptions.headers =
          httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let url = "http://localhost:8080/app/seller/add";
    return this.http.post<Seller>(url,seller);
  }
}
