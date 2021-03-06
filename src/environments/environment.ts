// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherAPI: {
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    apiKey: 'b23b4e446c851c55c6ef7fcb1554dc8b'
  },
  API_URL_LOGIN: 'http://aad9dcc76050.ngrok.io/user/login',
  API_URL_REGISTER: 'http://aad9dcc76050.ngrok.io/user/register',
  API_URL_ADD: 'http://aad9dcc76050.ngrok.io/user/addToFavourites',
  API_URL_GET_Fav: 'http://aad9dcc76050.ngrok.io/user/allFavouriteCityWeather'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
