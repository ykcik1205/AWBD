import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex50Details } from './ex50-details';

describe('Ex50Details', () => {
  let component: Ex50Details;
  let fixture: ComponentFixture<Ex50Details>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex50Details]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex50Details);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
