import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeProductEx27 } from './fake-product-ex27';

describe('FakeProductEx27', () => {
  let component: FakeProductEx27;
  let fixture: ComponentFixture<FakeProductEx27>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeProductEx27]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeProductEx27);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
