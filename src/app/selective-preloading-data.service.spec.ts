import { TestBed } from '@angular/core/testing';

import { SelectivePreloadingDataService } from './selective-preloading-data.service';

describe('SelectivePreloadingDataService', () => {
  let service: SelectivePreloadingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectivePreloadingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
