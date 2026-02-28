import { TestBed } from '@angular/core/testing';

import { CustomerHTTPService } from './customer-httpservice';

describe('CustomerHTTPService', () => {
  let service: CustomerHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
