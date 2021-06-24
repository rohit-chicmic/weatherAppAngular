import { WeatherState } from '../models'

const images: any = {
  [WeatherState.Thunderstorm]: 'assets/thunderstorm.png',
  [WeatherState.Drizzle]: 'assets/drizzle.png',
  [WeatherState.Rain]: 'assets/rain.png',
  [WeatherState.Snow]: 'assets/snow.png',
  [WeatherState.Atmosphere]: 'assets/atmosphere.png',
  [WeatherState.Clear]: 'assets/clear.png',
  [WeatherState.Clouds]: 'assets/clouds.png',
  [WeatherState.Haze]: 'assets/haze.png'
};

export default images;

