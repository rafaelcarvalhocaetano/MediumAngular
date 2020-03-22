import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediumStepperComponent } from './medium-stepper.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MediumStepperComponent
  }
];

@NgModule({
  declarations: [MediumStepperComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MediumStepperModule { }
