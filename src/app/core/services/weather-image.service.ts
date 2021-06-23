import { Injectable } from '@angular/core';
import { WeatherState } from '../models';
import { weatherImages } from '../constants'

@Injectable({
  providedIn: 'root'
})
export class WeatherImageService {
  getImage(weatherState: string) {
    const state = weatherState.toLocaleUpperCase();
    if (weatherImages[state]) {
      return weatherImages[state];
    }

    return weatherImages[WeatherState.Clouds];
  }
}
