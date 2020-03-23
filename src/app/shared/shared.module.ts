import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    StepperComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    InputComponent
  ],
  exports: [
    StepperComponent,
    InputComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
