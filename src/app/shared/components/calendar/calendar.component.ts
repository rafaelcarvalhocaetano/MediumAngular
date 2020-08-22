import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';


@Component({
  selector: 'md-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  public start;
  public end;
  public date;
  public localeDates;
 
  public calender;

  ngOnInit(): void {
    this.time();
  }

  newArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  public time() {
    moment.defineLocale('pt-br', {
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
    this.date = moment(new Date()).locale('pr-br');

    const dayNow = Number(new Date().getDay().toString());
    this.calender = this.dayMonth(new Date().getMonth(), new Date().getFullYear());


    this.localeDates = this.date._locale;
    for (let i = 0; i < this.calender; i++) {
      let obj = {};
      const increment = i + 1;
      for (let j = 0; j < this.localeDates._week.doy; j++) {

        if (j + 1 === 1) {
          if (increment <= 7 && increment === dayNow) {
            console.log(' i ', j + 1);
          }
        }

        if (j + 1 === 2) {
          if ((increment > 7 && increment <= 14) && increment === dayNow) {
            console.log(' i ', j + 1);
          }
        }

        if (j + 1 === 3) {
          if ((increment > 14 && increment <= 21) && increment === dayNow) {
            console.log(' i ', j + 1);
          }
        }

        if (j + 1 === 4) {
          if ((increment > 21 && increment <= 28) && increment === dayNow) {
            console.log(' i ', j + 1);
          }
        }

        if (j + 1 === 5) {
          if ((increment > 28 && increment <= 31) && increment === dayNow) {
            console.log(' i ', j + 1);
          }
        }

      }

    }

    // this.localeDates._months.forEach((x: string) => console.log(' data ', x));
    // FULL WEEKDAY
    // dateLocale._weekdays.forEach((x: string) => this.listWeek.push(x));
    // dateLocale._months.forEach((x: string) => console.log(' data ', x));
  }


  private dayMonth(mes, ano) {
    const data = new Date(ano, mes, 0);
    return data.getDate();
  }
}