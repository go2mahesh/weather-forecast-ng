import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: Http) { }

  getNewsHeadlines(): Observable<News> {
    return this.http.get(env.newsAPIAddress + 'top-headlines?country=us&apiKey=' + env.newsAPIKey).map((res) => {
      return res.json();
    }).catch(err => Observable.throw(err));
  }

  getNews(txtSearch: string): Observable<News> {
    if ( txtSearch.length > 0) {
      const apiAddress: string = env.newsAPIAddress + 'everything?q=' + txtSearch.trim() + '&apiKey=' + env.newsAPIKey;
      console.log(apiAddress);
      return this.http.get(apiAddress).map((res) => {
        return res.json();
      }).catch(err => Observable.throw(err));
    }

    }
}
