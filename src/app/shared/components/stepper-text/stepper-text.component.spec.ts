import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTextComponent } from './stepper-text.component';

describe('StepperTextComponent', () => {
  let component: StepperTextComponent;
  let fixture: ComponentFixture<StepperTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
