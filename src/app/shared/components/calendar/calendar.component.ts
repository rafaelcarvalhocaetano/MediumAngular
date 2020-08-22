import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';


@Component({
  selector: 'md-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public date;
  public localeDates: any;
  public primaryDay = null;
  public increment = 0;

  public months = [];
  public indexClick: number;

  public initialDay = new Date().getDate();
  public month = new Date().getMonth();
  public listWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  public listMonth = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  ngOnInit(): void {
    this.timePicker();
  }

  public timePicker(index?: number) {

    this.momentStart();
    this.months = [];

    // quantidade de dias do mes corrente
    // this.calender = this.dayMonth(new Date().getMonth(), new Date().getFullYear());

    // mostra o dia da semana - SEGUNDA OU TER ...
    // const indexWeek = String(new Date().getDay().toString()).split('/').reverse();
    // this.localeDates._weekdaysMin[String(indexWeek)]

    // dia que inicia o mes
    // for (let i = Number(new Date().getDate()); i >= 1; i--) {
    //   this.localeDates._weekdaysMin.forEach((x: string) => this.objectDate.dia = x);
    // }
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1) + (index ? index : 0);


    this.primaryDay = new Date(year, month - 1, 1).getDay();
    const totalDays = new Date(year, month, 0).getDate();
    let initial = this.primaryDay;
    for (let day = 0; day < totalDays;) {
      const week = [];
      for (let i = initial; i < 7 && day < totalDays; i++) {
        week[i] = day + 1;
        day++;
      }
      this.months.push(week);
      initial = 0;
    }
  }

  private momentStart() {
    moment.defineLocale('PT-BR', {
      months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
      monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
      weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
      weekdaysMin : 'D_S_T_Q_Q_S_S'.split('_'),
    });
    // QTD DIAS NO MES
    this.date = moment(new Date()).locale('PT-BR');
    this.localeDates = this.date._locale;
  }

  public backMonth() {
    this.increment -= 1;
    this.timePicker(this.increment);
  }

  public nextMonth() {
    this.increment += 1;
    this.timePicker(this.increment);
  }

  public selectDay(indexDay: number) {
    this.initialDay = indexDay;
  }
}