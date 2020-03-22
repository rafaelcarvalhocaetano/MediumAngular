import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Icons } from 'src/app/core/models/Icons';

@Component({
  selector: 'app-stepper-text',
  templateUrl: './stepper-text.component.html',
  styleUrls: ['./stepper-text.component.scss']
})
export class StepperTextComponent implements OnInit {

  @Input()
  public listText: Icons [] = [];
  @Input()
  public iconDirection = 'flex-end';
  @Input()
  public isColumn = true;
  @Input()
  public order = false;
  @Output()
  public sendStepper = new EventEmitter<Icons>();


  constructor() { }

  ngOnInit(): void {
  }

}
