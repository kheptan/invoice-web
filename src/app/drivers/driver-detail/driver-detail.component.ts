import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DriversService } from '../drivers.service';
import { Driver } from '../model/driver';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {
  
  driver$: Observable<Driver>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DriversService
  ) { }

  ngOnInit(): void {
    this.getDriver();
  }

  getDriver() {
    this.driver$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.service.getDriver(params.get('id'))
      )
    );
  }
}
