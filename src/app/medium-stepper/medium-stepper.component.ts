import { Component, TemplateRef, ViewChild } from '@angular/core';

import { Icons } from '../core/models/Icons';

@Component({
  selector: 'app-medium-stepper',
  templateUrl: './medium-stepper.component.html',
  styleUrls: ['./medium-stepper.component.scss']
})
export class MediumStepperComponent {

  @ViewChild('test', {static: true})
  public test: TemplateRef<any>;

  @ViewChild('test1', {static: true})
  public test1: TemplateRef<any>;

  public listIcons: Icons [] = [
    {
      completed: true,
      Icon: 'fab fa-angular',
    },
    {
     completed: true,
     Icon: 'fab fa-vuejs',
    },
    {
      completed: false,
      Icon: 'fab fa-react',
    },
    {
      completed: false,
      Icon: 'fab fa-js-square',
    },
    {
      completed: false,
      Icon: 'fab fa-java',
    },
    {
      completed: false,
      Icon: 'fab fa-node-js',
    }
  ];

  public listText: Icons [] = [
    {
      completed: true,
      Icon: 'fab fa-angular',
      template: this.test
    },
    {
     completed: true,
     Icon: 'fab fa-vuejs',
     template: this.test1
    }
    // {
    //   completed: false,
    //   Icon: 'fab fa-react',
    //   template: 'template 003'
    // },
    // {
    //   completed: false,
    //   Icon: 'fab fa-js-square',
    //   template: 'template 004'
    // },
    // {
    //   completed: false,
    //   Icon: 'fab fa-java',
    //   template: 'template 005'
    // },
    // {
    //   completed: false,
    //   Icon: 'fab fa-node-js',
    //   template: 'template 006'
    // }
  ];

  public direct = 'flex-end';
  public directIconText = 'flex-start';


  public stepperEvent(event: Icons) {
    this.listIcons.indexOf(event);
  }

}
