import { TestBed } from '@angular/core/testing';

import { FashionAPIservice } from './fashion-apiservice';

describe('FashionAPIservice', () => {
  let service: FashionAPIservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionAPIservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
