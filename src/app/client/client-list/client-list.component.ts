import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Client } from '../client-model/client';
import { map } from 'rxjs/operators';
import { Page } from 'src/app/common/page';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Array<Client>=[];
  private page: Page<Client>;
  private currentPage: number;
  pages$: Observable<Client>;
  
  constructor(private clientService: ClientService,
    private actr: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.actr.data.
            pipe(map(data=> data.items))
            .subscribe(val=> {this.clients = val.content; this.page = val});
  }

  next(event){
    if(this.currentPage < this.page.totalPages && !this.page.last) {
      this.currentPage ++;
    }
    this.clientService.getClients(this.currentPage).subscribe(val=> {this.clients = val.content; this.page = val});
  }

  back(event){
    if(this.currentPage > 0 && !this.page.first) {
      this.currentPage --;
    }
    this.clientService.getClients(this.currentPage).subscribe(val=> {this.clients = val.content; this.page = val});
  }

}
