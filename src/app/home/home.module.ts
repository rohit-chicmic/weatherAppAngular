import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    WeatherImageComponent,
    WeatherInfoComponent,
    ForecastCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
