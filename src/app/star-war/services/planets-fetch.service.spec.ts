import { TestBed } from '@angular/core/testing';

import { PlanetsFetchService } from './planets-fetch.service';

describe('PlanetsFetchService', () => {
  let service: PlanetsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
