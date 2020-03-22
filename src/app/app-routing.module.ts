import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'stepper'
  },
  {
    path: '',
    children: [
      {
        path: 'stepper', loadChildren: () => import('./medium-stepper/medium-stepper.module').then(ms => ms.MediumStepperModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
