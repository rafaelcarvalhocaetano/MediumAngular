import { Component, OnInit} from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'md-slider-ranger',
  templateUrl: './slider-ranger.component.html',
  styleUrls: ['./slider-ranger.component.scss']
})
export class SliderRangerComponent implements OnInit {


  public start;
  public end;
  public date;

  public listDay = [];



  ngOnInit(): void {
    this.time();
  }

  public time() {
    const ter = new Date();
    this.date = moment(new Date(ter), 'MM/DD/YYYY');
    // this.start = this.date.startOf('years').toISOString();
    // this.end = this.date.endOf('years').toISOString();

    const dateLocale = this.date._locale;
    console.log("SliderRangerComponent -> time -> trt", dateLocale)

    // FULL - MES
    dateLocale._months.forEach((x: string) => console.log(' data ', x));
    // FULL WEEKDAY
    dateLocale._weekdays.forEach((x: string) => console.log(' data ', x));
    // dateLocale._months.forEach((x: string) => console.log(' data ', x));
  }

}
