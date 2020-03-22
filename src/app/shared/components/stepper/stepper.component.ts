import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Icons } from 'src/app/core/models/Icons';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  @Input()
  public listIcons: Icons [] = [];

  @Input()
  public iconDirection = 'flex-end';

  @Output()
  public sendStepper = new EventEmitter<Icons>();


}
