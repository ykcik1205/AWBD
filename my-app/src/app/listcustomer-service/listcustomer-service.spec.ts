import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcustomerService } from './listcustomer-service';

describe('ListcustomerService', () => {
  let component: ListcustomerService;
  let fixture: ComponentFixture<ListcustomerService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListcustomerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcustomerService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
