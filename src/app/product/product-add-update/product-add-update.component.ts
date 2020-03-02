import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../product-model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add-update',
  templateUrl: './product-add-update.component.html',
  styleUrls: ['./product-add-update.component.css']
})
export class ProductAddUpdateComponent implements OnInit {

  productForm = new FormGroup({
    name : new FormControl(''),
    price: new FormControl(''),
    vat: new FormControl(''),
  });
  
  private product: Product;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.product = this.productForm.value;
    this.addProduct(this.product);
    this.router.navigate(['../',{foo: 'foo'}],{ relativeTo: this.route});
  }

  addProduct(product: Product) {
    this.service.addProduct(product).subscribe();
  }
}
