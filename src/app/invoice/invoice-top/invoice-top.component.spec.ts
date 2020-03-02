import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTopComponent } from './invoice-top.component';

describe('InvoiceTopComponent', () => {
  let component: InvoiceTopComponent;
  let fixture: ComponentFixture<InvoiceTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
