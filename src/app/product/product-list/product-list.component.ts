import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../product-model/product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Page } from 'src/app/common/page';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>=[];
  private page: Page<Product>;
  private currentPage: number;
  pages$: Observable<Page<Product>>;

  constructor(private service: ProductService,
    private actr: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPage = 0;
    //this.driverService.getDrivers(this.currentPage)
    //this.pages$ = this.driverService.getDrivers(this.currentPage);
    this.actr.data.pipe(map(data=> data.items)).subscribe(val=> {this.products = val.content; this.page = val});
  }

  next(event){
    if(this.currentPage < this.page.totalPages && !this.page.last) {
      this.currentPage ++;
    }
    this.service.getProducts(this.currentPage).subscribe(val=> {this.products = val.content; this.page = val});
  }

  back(event){
    if(this.currentPage > 0 && !this.page.first) {
      this.currentPage --;
    }
    this.service.getProducts(this.currentPage).subscribe(val=> {this.products = val.content; this.page = val});
  }
}
