export interface City {
  id: number;
  name: string;
  temp: string;
  windSpeed: number;
  visibility: number;
  humidity: number;
  pressure: number;
  weather: string;
}

export interface CityResponse {
  id: number;
  name: string;
  main: {
    temp: string;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  weather: {
    main: string;
  }[];
}