import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddUpdateComponent } from './seller-add-update.component';

describe('SellerAddUpdateComponent', () => {
  let component: SellerAddUpdateComponent;
  let fixture: ComponentFixture<SellerAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
