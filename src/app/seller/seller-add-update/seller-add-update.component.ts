import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SellerService } from '../seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../seller-model/seller';
import { Address } from 'src/app/common/address';
import { BankAccount } from 'src/app/common/bankaccount';

@Component({
  selector: 'app-seller-add-update',
  templateUrl: './seller-add-update.component.html',
  styleUrls: ['./seller-add-update.component.css']
})
export class SellerAddUpdateComponent implements OnInit {

  sellerForm = new FormGroup({
    name : new FormControl(''),
    city: new FormControl(''),
    streetName: new FormControl(''),
    streetNumber: new FormControl(''),
    postalCode: new FormControl(''),
    bank: new FormControl(''),
    accountNumber: new FormControl(''),
    accountType: new FormControl(''),
    fiscalCode: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: SellerService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    let address = {} as Address;
    let account = {} as BankAccount;
    let seller = {} as Seller;

    address.city = this.sellerForm.get('city').value;
    address.streetName = this.sellerForm.get('streetName').value;
    address.streetNumber = this.sellerForm.get('streetNumber').value;
    address.postalCode = this.sellerForm.get('postalCode').value;
    
    account.bank = this.sellerForm.get('bank').value;
    account.accountNumber = this.sellerForm.get('accountNumber').value;
    account.accountType = this.sellerForm.get('accountType').value;
    
    seller.name = this.sellerForm.get('name').value;
    seller.fiscalCode = this.sellerForm.get('fiscalCode').value;
    seller.email = this.sellerForm.get('email').value;
    seller.phone = this.sellerForm.get('phone').value;
    seller.account = account;
    seller.address = address;

    this.addSeller(seller);
  }
  
  addSeller(seller: Seller) {
    this.service.addSeller(seller).subscribe();
    this.router.navigate(['../'],{ relativeTo: this.route});
  }

}
