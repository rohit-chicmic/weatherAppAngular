export interface Forecast {
  date: string;
  temp: {
    max: number;
    min: number;
  };
  weather: string;
}

export interface ForecastResponse {
  list: {
    main: {
      temp_max: number;
      temp_min: number;
    },
    weather: {
      main: string;
    }[],
    dt_txt: string;
  }[];
}