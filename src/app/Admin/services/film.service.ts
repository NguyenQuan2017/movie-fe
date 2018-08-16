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

  createFilm(data): any {
    return this.http.post(this.rootUrl + 'film', data, this.httpOptions);
  }

  EditFilm(data, id): any {
      return this.http.put(this.rootUrl + 'film/' + id, data, this.httpOptions);
  }
}
