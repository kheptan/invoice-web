import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Seller } from '../seller-model/seller';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {
  
  sellers$: Observable<Seller[]>;
  
  constructor(
    private actRoute: ActivatedRoute, 
    private router: Router,
    private service: SellerService
  ) { }

  ngOnInit() {
    this.sellers$ = this.getSellers();
  }
  
  getSellers(): Observable<Seller[]> {
    return this.service.getSellers();
  }

}
