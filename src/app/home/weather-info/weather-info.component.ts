import { Component, Input } from '@angular/core';
import { City } from 'src/app/core/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'wa-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
  @Input() city!: City;
  readonly currentDate = new Date();

  tokenData;

  constructor(private userService: UserService) {
    this.tokenData = <string>localStorage.getItem('tokenData');
    
    this.tokenData = JSON.parse(this.tokenData);
  }

  addToFavourite(city: City) {
    let data = {
      city : city.name,
      api_key: this.tokenData.api_key
    }

    this.userService.addFav(data).subscribe( res => {
      console.log(res);
      
    });
  }
}
