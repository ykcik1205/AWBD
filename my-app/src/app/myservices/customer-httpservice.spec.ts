import { TestBed } from '@angular/core/testing';

import { CustomerHTTPservice } from './customer-httpservice';

describe('CustomerHTTPservice', () => {
  let service: CustomerHTTPservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHTTPservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
