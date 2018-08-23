import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
  constructor(private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token.getToken(),
      })
  };

  getAllListFilms(): any {
    return this.http.get(this.rootUrl + 'film', this.httpOptions);
  }

  getAllListFilmsRemoved(): any {
      return this.http.get(this.rootUrl + 'history/film/list', this.httpOptions);
  }

  getCategories(): any {
      return this.http.get(this.rootUrl + 'category', this.httpOptions);
  }

  getGenres(): any {
      return this.http.get(this.rootUrl + 'genre', this.httpOptions);
  }

  getActors(): any {
      return this.http.get(this.rootUrl + 'actor', this.httpOptions);
  }

  createFilm(data): any {
    return this.http.post(this.rootUrl + 'film', data, this.httpOptions);
  }

  editFilm(data, id): any {
      return this.http.put(this.rootUrl + 'film/' + id, data, this.httpOptions);
  }

  removeFilm(id): any {
      return this.http.delete(this.rootUrl + 'film/' + id, this.httpOptions);
  }

  restoreFilm(id): any {
      return this.http.put(this.rootUrl + 'history/film/restore/' + id, this.httpOptions);
  }

  deleteFilm(id): any {
      return this.http.delete(this.rootUrl + 'history/film/delete/' + id, this.httpOptions);
  }
}
