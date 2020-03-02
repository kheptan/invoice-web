import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../common/page';
import { Product } from './product-model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Page<Product>>{

  constructor(private service: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<Page<Product>>{
      return this.service.getProducts(0);
    }
}
