import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAddUpdateComponent } from './driver-add-update.component';

describe('DriverAddUpdateComponent', () => {
  let component: DriverAddUpdateComponent;
  let fixture: ComponentFixture<DriverAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
