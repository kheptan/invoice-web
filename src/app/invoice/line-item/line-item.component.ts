import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LineItem } from '../invoice-model/line-item';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/product/product-model/product';
import { ProductService } from 'src/app/product/product.service';
import { Observable } from 'rxjs';
import { Page } from 'src/app/common/page';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {

  @Output() lineRequest = new EventEmitter<LineItem>();
  
    lineForm = new FormGroup({
      product: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(''),
	    vat:new FormControl(''),
	    value: new FormControl(''),
  });

  private lineItem: LineItem;
  products: Product[]=[];
  selectedOption: string;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts(0).subscribe(data=> this.products = data.content);
  }

  selected(): Product {  
    return this.lineForm.get('product').value;  
  }
  
  updateItems(){
    let product = this.selected();
    let price = product.price;
    let vat = product.vat;
    let qta = this.lineForm.get('quantity').value; 
    
    this.lineForm.get('price').setValue(price);
    this.lineForm.get('vat').setValue(vat);
    this.lineForm.get('value').setValue((qta*price) * (vat/100)); 
  }

  onSubmit() {
    let product = this.selected();
    this.lineItem = this.lineForm.value;
    
    
    /* let qta = this.lineForm.get('qta').value; 
    let value = this.lineForm.get('value').value;
    
    this.line.product = product;
    this.line.price = product.price;
    this.line.quantity = qta;
    this.line.value = value;
    this.line.vat = product.vat; */
    
    this.lineRequest.emit(this.lineItem)
    this.lineForm.reset();
  }
}
