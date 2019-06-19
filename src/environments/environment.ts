// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherAPIAddress: 'http://api.wunderground.com/api/a15b7b4d039d71a0/forecast10day',
  APODAPIAddress: 'https://api.nasa.gov/planetary/apod?api_key=xiy3pSh7goOKGr055w3vjw02XCgBCQZA9PN1pC8K',
  nasaAPIKey: 'xiy3pSh7goOKGr055w3vjw02XCgBCQZA9PN1pC8K',
  newsAPIKey: '1d050f1acf4f470f8c32e15c90ab88d5',
  wundergroundAPIKey: 'a15b7b4d039d71a0',
  newsAPIAddress: 'https://newsapi.org/v2/'

};

/*
*&apiKey=1d050f1acf4f470f8c32e15c90ab88d5
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
