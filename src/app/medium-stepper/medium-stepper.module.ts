import { NgModule } from '@angular/core';

import { MediumStepperComponent } from './medium-stepper.component';
import { StepperRoutingModule } from './medium-stepper-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MediumStepperComponent],
  imports: [
    StepperRoutingModule,
    SharedModule
  ]
})
export class MediumStepperModule { }
