import { TestBed } from '@angular/core/testing';

import { InvoieResolverService } from './invoie-resolver.service';

describe('InvoieResolverService', () => {
  let service: InvoieResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoieResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
