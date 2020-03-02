import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-model/product';
import { Page } from '../common/page';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(pageNo: number | string):Observable<Page<Product>> {
    let url = `http://localhost:8080/app/product?pageNo=${pageNo}`;
    return this.http.get<Page<Product>>(url);
  }

  getProduct(id: number | string): Observable<Product> {
    let url = `http://localhost:8080/app/product/${id}`;
    return  this.http.get<Product>(url);
  }

  addProduct(product:Product): Observable<Product>{
    httpOptions.headers =
          httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let url = "http://localhost:8080/app/product/add";
    return this.http.post<Product>(url,product);
  }
}
