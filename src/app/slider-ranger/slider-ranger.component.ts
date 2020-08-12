import { Component, OnInit} from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'md-slider-ranger',
  templateUrl: './slider-ranger.component.html',
  styleUrls: ['./slider-ranger.component.scss']
})
export class SliderRangerComponent implements OnInit {
  public date;
  public localeDates: any;
  public calender;
  public diaPrimeiro = null;

  public meses = [];


  ngOnInit(): void {
    this.time();
  }


  newArray(length: number): any [] {
    if (length >= 0) {
      return new Array(length);
    }
  }






  public time() {
    moment.defineLocale('PT-BR', {
      months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
      monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
      weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
      weekdaysMin : 'D_S_T_Q_Q_S_S'.split('_'),
      // calendar : {
      //   sameDay: '[Hoje às] LT',
      //   nextDay: '[Amanhã às] LT',
      //   nextWeek: 'dddd [às] LT',
      //   lastDay: '[Ontem às] LT',
      //   sameElse: 'L'
      // },
      // relativeTime : {
      //   future : 'em %s',
      //   past : '%s atrás',
      //   s : 'segundos',
      //   m : 'um minuto',
      //   mm : '%d minutos',
      //   h : 'uma hora',
      //   hh : '%d horas',
      //   d : 'um dia',
      //   dd : '%d dias',
      //   M : 'um mês',
      //   MM : '%d meses',
      //   y : 'um ano',
      //   yy : '%d anos'
      // },
    });
    // QTD DIAS NO MES
    this.date = moment('2020-02-02').locale('PT-BR');
    this.localeDates = this.date._locale;


    // quantidade de dias do mes corrente
    this.calender = this.dayMonth(new Date().getMonth(), new Date().getFullYear());

    // mostra o dia da semana - SEGUNDA OU TER ...
    // const indexWeek = String(new Date().getDay().toString()).split('/').reverse();
    // this.localeDates._weekdaysMin[String(indexWeek)]

    // dia que inicia o mes
    // for (let i = Number(new Date().getDate()); i >= 1; i--) {
    //   this.localeDates._weekdaysMin.forEach((x: string) => this.objectDate.dia = x);
    // }
    const ano = new Date().getFullYear();
    const mes = new Date().getMonth() + 1;

    this.diaPrimeiro = new Date(ano, mes - 1, 1).getDay();
    // this.objectDate.semana = this.diaPrimeiro + 1;
    const totalDias = new Date(ano, mes, 0).getDate();
    let inicio = this.diaPrimeiro;

    for (let diaMes = 0; diaMes < totalDias;) {
      let semana = [];
      for (let diaSemana = inicio; diaSemana < 7 && diaMes < totalDias; diaSemana++) {
        semana[diaSemana] = diaMes + 1;
        diaMes++;
      }
      this.meses.push(semana);
      inicio = 0;
    }
  }


  private dayMonth(mes, ano) {
    const data = new Date(ano, mes, 0);
    return data.getDate();
  }

}
