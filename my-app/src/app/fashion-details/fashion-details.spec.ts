import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDetails } from './fashion-details';

describe('FashionDetails', () => {
  let component: FashionDetails;
  let fixture: ComponentFixture<FashionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
