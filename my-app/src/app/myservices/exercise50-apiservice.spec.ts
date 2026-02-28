import { TestBed } from '@angular/core/testing';

import { Exercise50APIservice } from './exercise50-apiservice';

describe('Exercise50APIservice', () => {
  let service: Exercise50APIservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise50APIservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
