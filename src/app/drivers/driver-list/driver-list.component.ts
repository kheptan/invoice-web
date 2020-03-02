import { Component, OnInit } from '@angular/core';
import { Driver } from '../model/driver';
import { DriversService } from '../drivers.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Page } from 'src/app/common/page';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers: Array<Driver>=[];
  private page: Page<Driver>;
  private currentPage: number;
  pages$: Observable<Page<Driver>>;

  constructor(private driverService: DriversService,
    private actr: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPage = 0;
    //this.driverService.getDrivers(this.currentPage)
    //this.pages$ = this.driverService.getDrivers(this.currentPage);
    this.actr.data.pipe(map(data=> data.items)).subscribe(val=> {this.drivers = val.content; this.page = val});
  }

  next(event){
    if(this.currentPage < this.page.totalPages && !this.page.last) {
      this.currentPage ++;
    }
    this.driverService.getDrivers(this.currentPage).subscribe(val=> {this.drivers = val.content; this.page = val});
  }

  back(event){
    if(this.currentPage > 0 && !this.page.first) {
      this.currentPage --;
    }
    this.driverService.getDrivers(this.currentPage).subscribe(val=> {this.drivers = val.content; this.page = val});
  }

}
