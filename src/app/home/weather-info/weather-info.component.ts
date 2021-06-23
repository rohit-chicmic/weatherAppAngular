import { Component, Input } from '@angular/core';
import { City } from 'src/app/core/models';

@Component({
  selector: 'wa-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
  @Input() city!: City;
  readonly currentDate = new Date();
}
