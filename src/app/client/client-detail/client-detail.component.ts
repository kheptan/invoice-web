import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';
import { Client } from '../client-model/client';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client$: Observable<Client>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }
  getClient() {
    this.client$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.service.getClient(params.get('id'))
      )
    );
  }

}
