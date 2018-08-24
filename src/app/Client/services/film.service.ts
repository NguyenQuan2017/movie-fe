import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/public/';
  constructor(private  http: HttpClient) { }

  getHighLightFilm(): any {
    return this.http.get(this.rootUrl + 'film/highlight');
  }
  getHighLightFilmFrist(): any {
    return this.http.get(this.rootUrl + 'film/highlight/first');
  }

  getNewestFilm(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/newest');
  }

  getFilmInformation(nameFilm): any {
    return this.http.get(this.rootUrl + 'film/information/' + nameFilm);
  }

  getTheaterFilm(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/newest');
  }

  getRelatedFilm(slug): any {
    return this.http.get(this.rootUrl + 'film/related/' + slug);
  }

  getVideoFilm(slug): any {
    return this.http.get(this.rootUrl + 'film/video/' + slug);
  }
}
