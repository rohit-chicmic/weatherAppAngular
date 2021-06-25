import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonType, City } from '../core/models';
import { WeatherService } from '../core/services/weather.service';
import { Forecast } from '../core/models/forecast';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../core/services/location.service';

@Component({
  selector: 'wa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly secondaryType = ButtonType.Secondary;
  private defaultCity = 'new delhi';
  city! : City;
  forecast!: Forecast[];
  private weatherSubscription!: Subscription;
  private forecastSubscription!: Subscription;
  cityForm!: FormGroup;
  isLoggedIn = false;
  tokenData;

  constructor (private weatherService: WeatherService, private fb: FormBuilder, private locationService: LocationService) {
    this.cityForm = this.fb.group({
      cityName : ['']
    })

    this.tokenData = <string>localStorage.getItem('tokenData');
    
    this.tokenData = JSON.parse(this.tokenData);
    // console.log('===========>', this.tokenData?.api_key);
    if(this.tokenData) {
      this.isLoggedIn = true;
    }
    
  }

  ngOnInit(): void {
    this.weatherSubscription = this.weatherService
      .searchCity(this.defaultCity)
      .subscribe(city => {
        this.city = city;
      });

    this.forecastSubscription = this.weatherService
      .getForecast(this.defaultCity)
      .subscribe(
        forecast => this.forecast = forecast
      );
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
    this.forecastSubscription.unsubscribe();
  }

  onSubmit() {
    if(this.cityForm.value.cityName != ""){
      let cityName = this.cityForm.value.cityName;
      this.weatherSubscription = this.weatherService
      .searchCity(cityName)
      .subscribe(city => {
        this.city = city;
        console.log(this.city);
        
      });

    this.forecastSubscription = this.weatherService
      .getForecast(cityName)
      .subscribe(
        forecast => this.forecast = forecast
      );
    }
    this.cityForm.reset();
  }

  getLoc() {
    let position;
    this.locationService.getPosition().then(pos=>
      {
        position = pos;
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.weatherSubscription = this.weatherService
      .searchLoc(position)
      .subscribe(city => {
        this.city = city;
        console.log(this.city);
        
      });

    this.forecastSubscription = this.weatherService
      .getForecastLoc(position)
      .subscribe(
        forecast => this.forecast = forecast
      );

      });

      
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
