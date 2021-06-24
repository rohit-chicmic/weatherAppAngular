import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { City, CityResponse } from '../models';
import { Forecast, ForecastResponse } from '../models/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = environment.weatherAPI.baseUrl;
  private apiKey = environment.weatherAPI.apiKey;

  constructor(private http: HttpClient) { }

  private buildUrl(category: string, queryText: string) {
    return `${this.baseUrl}/${category}?q=${queryText}&appid=${this.apiKey}&units=metric`;
  }

  searchCity(cityName: string): Observable<City> {
    return this.http.get<CityResponse>(this.buildUrl('weather', cityName))
      .pipe(
        map(({ id, name, main, wind, visibility, weather }) => {
          const { temp, humidity, pressure } = main;
          return {
            id,
            name,
            temp,
            windSpeed: wind.speed,
            visibility,
            humidity,
            pressure,
            weather: weather[0].main
          }
        })
      );
  }

  getForecast(cityName: string): Observable<Forecast[]> {
    return this.http.get<ForecastResponse>(this.buildUrl('forecast', cityName))
      .pipe(
        map(({ list }) => {
          const forecast = list.slice(1, 9);
          return forecast.map(({ main, weather, dt_txt }) => ({
            date: dt_txt,
            weather: weather[0].main,
            temp: {
              max: main.temp_max,
              min: main.temp_min
            }
          }));
        })
      );
  }
}
