import { TestBed, inject } from '@angular/core/testing';

import { CacheServiceServiceService } from './cache-service-service.service';

describe('CacheServiceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheServiceServiceService]
    });
  });

  it('should be created', inject([CacheServiceServiceService], (service: CacheServiceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
