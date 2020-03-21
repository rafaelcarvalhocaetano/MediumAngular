import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumStepperComponent } from './medium-stepper.component';

describe('MediumStepperComponent', () => {
  let component: MediumStepperComponent;
  let fixture: ComponentFixture<MediumStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
