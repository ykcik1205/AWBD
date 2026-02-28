import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex50Delete } from './ex50-delete';

describe('Ex50Delete', () => {
  let component: Ex50Delete;
  let fixture: ComponentFixture<Ex50Delete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex50Delete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex50Delete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
