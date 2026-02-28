import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcustomerHTTPService } from './listcustomer-httpservice';

describe('ListcustomerHTTPService', () => {
  let component: ListcustomerHTTPService;
  let fixture: ComponentFixture<ListcustomerHTTPService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListcustomerHTTPService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcustomerHTTPService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
