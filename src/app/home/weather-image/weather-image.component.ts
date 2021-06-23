import { Component, Input, OnInit } from '@angular/core';
import { WeatherImageService } from 'src/app/core/services/weather-image.service';

@Component({
  selector: 'wa-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss']
})
export class WeatherImageComponent implements OnInit {
  @Input() weather!: string;
  @Input() width = 150;
  @Input() verticalCenter = false;
  image!: string;

  constructor (private weatherImageService: WeatherImageService) {}

  ngOnInit(): void {
    this.image = this.weatherImageService.getImage(this.weather);
  }
}
