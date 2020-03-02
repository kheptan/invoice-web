import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './model/driver';
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
export class DriversService {
  
  constructor(private http: HttpClient) { }

  getDrivers(pageNo: number | string):Observable<Page<Driver>> {
    let url = `http://localhost:8080/app/driver?pageNo=${pageNo}`;
    return this.http.get<Page<Driver>>(url);
  }

  getDriver(id: number | string): Observable<Driver> {
    let url = `http://localhost:8080/app/driver/${id}`;
    return  this.http.get<Driver>(url);
  }

  addDriver(driver:Driver): Observable<Driver>{
    httpOptions.headers =
          httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let url = "http://localhost:8080/app/driver/add";
    return this.http.post<Driver>(url,driver);
  }
}
