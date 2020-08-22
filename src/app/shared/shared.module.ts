import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    StepperComponent,
    InputComponent,
    CalendarComponent
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
    ReactiveFormsModule,
    CalendarComponent
  ]
})
export class SharedModule { }
