import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment as env} from '../../environments/environment';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Weatherforecast } from '../models/weatherforecast';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: Http) { }

  getWeatherByCity(state: string, city: string): Observable<Weatherforecast> {
    return this.http.get(env.weatherAPIAddress + `/q/` + state + `/` + city + `.json`).map(res => {
      return res.json();
    }).catch(err => Observable.throw(err));
  }

  getWeatherByGeoLocation(lat: number, lon: number): Observable<Weatherforecast>  {
    const apiAddress = env.weatherAPIAddress + `/q/` + lat + `,` + lon + `.json`;
    console.log(apiAddress);
      return this.http.get(apiAddress).map(res => {
        return res.json();
      }).catch(err => Observable.throw(err));
  }
}
