import { TestBed } from '@angular/core/testing';

import { FeitInstagramApiService } from './feit-instagram-api.service';

describe('FeitInstagramApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeitInstagramApiService = TestBed.get(FeitInstagramApiService);
    expect(service).toBeTruthy();
  });
});
