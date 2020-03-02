import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client-model/client';
import { Observable } from 'rxjs';
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
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(pageNo: number | string):Observable<Page<Client>> {
    let url = `http://localhost:8080/app/client?pageNo=${pageNo}`;
    return this.http.get<Page<Client>>(url);
  }

  getClient(id: number | string): Observable<Client> {
    let url = `http://localhost:8080/app/client/${id}`;
    return  this.http.get<Client>(url);
  }

  addClient(client:Client): Observable<Client>{
    httpOptions.headers =
          httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let url = "http://localhost:8080/app/client/add";
    return this.http.post<Client>(url,client);
  }
}
