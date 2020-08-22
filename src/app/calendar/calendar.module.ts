import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
];


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CalendarModule { }
