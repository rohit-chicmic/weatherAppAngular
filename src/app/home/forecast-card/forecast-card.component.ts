import { Component, Input } from '@angular/core';
import { format } from 'date-fns';
import { Forecast } from 'src/app/core/models/forecast';

@Component({
  selector: 'wa-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent {
  @Input() item!: Forecast;

  getDate(date: string): string {
    return format(new Date(date), 'p');
  }
}
