import { TestBed } from '@angular/core/testing';

import { SpeciesFetchService } from './species-fetch.service';

describe('SpeciesFetchService', () => {
  let service: SpeciesFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
