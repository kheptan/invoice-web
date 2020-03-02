import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller-model/seller';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SellerService } from '../seller.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {

  seller$: Observable<Seller>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: SellerService) { }

  ngOnInit(): void {
    this.getSeller();
  }
  
  getSeller() {
    this.seller$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.service.getSeller(params.get('id'))
      )
    );
  }
}
