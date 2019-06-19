import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Apod } from '../models/apod';


@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(private http: Http) { }

  getAPOD(): Observable<Apod> {
    console.log('Hi');
    return this.http.get(env.APODAPIAddress).map(res => {
      return res.json();
    }).catch(err => Observable.throw(err));
  }
}
