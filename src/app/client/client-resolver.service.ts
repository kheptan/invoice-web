import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../common/page';
import { Client } from './client-model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientResolverService implements Resolve<Page<Client>>{

  constructor(private service: ClientService) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<Page<Client>>{
      return this.service.getClients(0);
    }
}
