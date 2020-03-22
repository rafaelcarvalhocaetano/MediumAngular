import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperTextComponent } from './components/stepper-text/stepper-text.component';


@NgModule({
  declarations: [
    StepperComponent,
    StepperTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepperComponent,
    StepperTextComponent,
    CommonModule
  ]
})
export class SharedModule { }
