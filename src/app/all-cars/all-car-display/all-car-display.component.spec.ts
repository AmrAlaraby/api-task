import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarDisplayComponent } from './all-car-display.component';

describe('AllCarDisplayComponent', () => {
  let component: AllCarDisplayComponent;
  let fixture: ComponentFixture<AllCarDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCarDisplayComponent]
    });
    fixture = TestBed.createComponent(AllCarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
