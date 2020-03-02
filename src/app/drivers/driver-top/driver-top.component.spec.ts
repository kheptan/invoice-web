import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTopComponent } from './driver-top.component';

describe('DriverTopComponent', () => {
  let component: DriverTopComponent;
  let fixture: ComponentFixture<DriverTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
