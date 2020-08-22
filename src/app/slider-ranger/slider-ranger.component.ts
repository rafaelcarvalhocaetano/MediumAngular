import { Component } from '@angular/core';

@Component({
  selector: 'md-slider-ranger',
  templateUrl: './slider-ranger.component.html',
  styleUrls: ['./slider-ranger.component.scss']
})
export class SliderRangerComponent {

  public valueRanger = 0;
  public min = 0;
  public max = 10;
  public valorRecebido = 200;
  item = '';

  getInteration(event, data: string) {
    const newValue = Number((event.target.value - this.min) * 100 / (this.max - this.min));
    const newPosition = 10 - (newValue * 0.2);
    if (data === 'decrement') {
      if (newPosition < 0) {
        console.log(' dataitem ---- ');
        this.valorRecebido -= Number(event.target.value);
      } else {
        console.log(' dataitem ++++ ');
        this.valorRecebido += Number(event.target.value);
      }
    }
  }
}
