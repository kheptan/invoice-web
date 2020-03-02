import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Driver } from '../model/driver';
import { DriversService } from '../drivers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-add-update',
  templateUrl: './driver-add-update.component.html',
  styleUrls: ['./driver-add-update.component.css']
})
export class DriverAddUpdateComponent implements OnInit {
  
  driverForm = new FormGroup({
    name : new FormControl(''),
    carNumber: new FormControl(''),
  });
  
  private driver: Driver;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: DriversService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.driver = this.driverForm.value;
    this.addDriver(this.driver);
    this.router.navigate(['../',{driver: this.driver.name,foo: 'foo'}],{ relativeTo: this.route});
  }

  addDriver(driver: Driver) {
    this.service.addDriver(driver).subscribe();
  }
}
