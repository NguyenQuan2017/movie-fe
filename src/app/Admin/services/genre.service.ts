import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
  constructor(private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token.getToken(),
      })
  };

  getListGenres(): any {
      return this.http.get(this.rootUrl + 'genre', this.httpOptions);
  }

  getListRemoveGenres(): any {
      return this.http.get(this.rootUrl + 'history/genre/list', this.httpOptions);
  }
  getCategories(): any {
    return this.http.get(this.rootUrl + 'category', this.httpOptions);
  }

  createGenre(data): any {
    return this.http.post(this.rootUrl + 'genre', data, this.httpOptions);
  }

  updateGenre(data, id): any {
      return this.http.put(this.rootUrl + 'genre/' + id, data, this.httpOptions);
  }

  removeGenre(id): any {
    return this.http.delete(this.rootUrl + 'genre/' + id, this.httpOptions);
  }

  restoreGenre(id): any {
      return this.http.put(this.rootUrl + 'history/genre/restore/' + id, this.httpOptions);
  }

  deleteGenre(id): any {
      return this.http.delete(this.rootUrl + 'history/genre/delete/' + id, this.httpOptions);
  }

}
