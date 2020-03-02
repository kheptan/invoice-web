import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client-model/client';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-add-update',
  templateUrl: './client-add-update.component.html',
  styleUrls: ['./client-add-update.component.css']
})
export class ClientAddUpdateComponent implements OnInit {

  clientForm = new FormGroup({
    name : new FormControl(''),
    city: new FormControl(''),
    /* streetName: new FormControl(''),
    StreetNumber: new FormControl(''),
    postalCode: new FormControl(''),
    bank: new FormControl(''),
    accountNumber: new FormControl(''),
    accountType: new FormControl(''),
    fiscalCode: new FormControl(''),
    email: new FormControl(''), */
    phone: new FormControl('')
  });
  
  private client: Client;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ClientService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.client = this.clientForm.value;
    this.addClient(this.client);
    this.router.navigate(['../',{client: this.client.name,foo: 'foo'}],{ relativeTo: this.route});
  }

  addClient(client: Client) {
    this.service.addClient(client).subscribe();
  }
}
