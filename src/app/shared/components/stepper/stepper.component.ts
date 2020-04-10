import { Component, Input, Output, EventEmitter, OnInit, ɵConsole } from '@angular/core';

import { Icons } from 'src/app/core/models/Icons';

@Component({
  selector: 'md-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input()
  public listIcons: Icons [] = [];

  @Output()
  public sendStepper = new EventEmitter<any>();

  public indexId = [];


  ngOnInit() {
    this.updateList();
  }

  private updateList() {
    let index = 0;
    const inter = setInterval(() => {
      this.indexId.push(index);
      index += 1;
      this.clearInterval(index, inter);
    }, 1000);
  }

  private clearInterval(index: number, variableName) {
    if (!this.listIcons[index].completed) {
      clearInterval(variableName);
    }
  }


}
