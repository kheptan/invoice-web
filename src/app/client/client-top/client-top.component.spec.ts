import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTopComponent } from './client-top.component';

describe('ClientTopComponent', () => {
  let component: ClientTopComponent;
  let fixture: ComponentFixture<ClientTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
