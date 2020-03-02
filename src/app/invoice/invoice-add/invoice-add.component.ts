import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Invoice } from '../invoice-model/invoice';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/client/client.service';
import { Client } from 'src/app/client/client-model/client';
import { Observable } from 'rxjs';
import { Page } from 'src/app/common/page';
import { DriversService } from 'src/app/drivers/drivers.service';
import { SellerService } from 'src/app/seller/seller.service';
import { Driver } from 'src/app/drivers/model/driver';
import { Seller } from 'src/app/seller/seller-model/seller';
import { LineItem } from '../invoice-model/line-item';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  invoiceForm = new FormGroup({
    invoiceNumber: new FormControl(''),
    date: new FormControl(''),
    status: new FormControl(''),
	  client:new FormControl(''),
	  driver: new FormControl(''),
	  seller: new FormControl('')
  });

  private invoice: Invoice;
  itemLines: LineItem[]=[];
  
  clients: Array<Client>=[];
  drivers: Array<Driver>=[];
  sellers: Array<Seller>=[];

  client: Client;
  driver: Driver;
  seller: Seller;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: InvoiceService,
    private clientService: ClientService,
    private driverService: DriversService,
    private sellerService: SellerService) { }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements(){
    this.clientService.getClients(0).subscribe(data=> this.clients = data.content);
    this.driverService.getDrivers(0).subscribe(data=> this.drivers = data.content);
    this.sellerService.getSellers().subscribe(data=> this.sellers = data);
  }

  selectedClient(){
    this.client = this.invoiceForm.get('client').value;
  }
  selectedDriver(){
    this.driver =this.invoiceForm.get('driver').value;
  }

  selectedSeller(){
    this.seller = this.invoiceForm.get('seller').value;
  }

  onSubmit(){
    this.invoice = this.invoiceForm.value;
    this.invoice.items =  this.itemLines; 
    this.addInvoice(this.invoice);
    this.router.navigate(['../',{foo: 'foo'}],{ relativeTo: this.route});
  }

  addInvoice(invoice: Invoice) {
    this.service.addInvoice(invoice).subscribe();
  }

  addLine(data) {
    this.itemLines.push(data);   
    console.log(data);
  }

}
