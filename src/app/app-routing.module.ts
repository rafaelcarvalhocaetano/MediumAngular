import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'ranger'
  },
  {
    path: '',
    children: [
      {
        path: 'stepper', loadChildren: () => import('./medium-stepper/medium-stepper.module').then(ms => ms.MediumStepperModule)
      }
    ]
  },
  {
    path: 'ranger',
    loadChildren: () => import('./slider-ranger/slider-ranger.module').then(sr => sr.SliderRangerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
