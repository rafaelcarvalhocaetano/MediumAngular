import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediumStepperComponent } from './medium-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: MediumStepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
