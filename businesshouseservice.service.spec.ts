import { TestBed } from '@angular/core/testing';

import { BusinesshouseserviceService } from './businesshouseservice.service';

describe('BusinesshouseserviceService', () => {
  let service: BusinesshouseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesshouseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
