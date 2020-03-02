import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DriversService } from './drivers.service';
import { Page } from '../common/page';
import { Driver } from './model/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverResolverService implements Resolve<Page<Driver>> {

  constructor(private service: DriversService) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<Page<Driver>>{
      return this.service.getDrivers(0);
    }

}
