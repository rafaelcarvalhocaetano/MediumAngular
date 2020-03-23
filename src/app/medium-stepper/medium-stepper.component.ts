import { Component, OnInit } from '@angular/core';

import { Icons } from '../core/models/Icons';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'md-medium-stepper',
  templateUrl: './medium-stepper.component.html',
  styleUrls: ['./medium-stepper.component.scss']
})
export class MediumStepperComponent implements OnInit {


  public form: FormGroup;

  public listIcons: Icons [] = [
    {
      completed: true,
      Icon: 'fab fa-angular'
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

  public direct = 'flex-end';
  public indexId = null;

  constructor(
    private formbuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.formbuilder.group({
      Nome: [null],
      SobreNome: [null],
      TemplateTwo: this.formbuilder.group({
        Rua: [null],
        Bairro: [null],
        Cidade: [null],
        Estado: [null]
      }),
      TemplateThree: this.formbuilder.group({
        Idade: [null],
        Nascimento: [null],
        CidadeDeNascimento: [null],
        EstadoDeNascimento: [null]
      }),
      TemplateFour: this.formbuilder.group({
        Empressa: [null],
        Cargo: [null],
        Setor: [null],
      }),
      TemplateFive: this.formbuilder.group({
        NomeEsposa: [null],
        NomeFilho: [null]
      }),
      TemplateSix: this.formbuilder.group({
        Evento: [null],
        Cidade: [null],
        Bairro: [null],
        Estado: [null]
      }),
    });
  }

  public stepperEvent(event: number) {
    this.indexId = event;
  }



}
