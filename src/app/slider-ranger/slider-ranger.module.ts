import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SliderRangerComponent } from './slider-ranger.component';

const routes: Routes = [
  {
    path: '',
    component: SliderRangerComponent
  }
];


@NgModule({
  declarations: [SliderRangerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SliderRangerModule { }
