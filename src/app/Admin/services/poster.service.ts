import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
  constructor(private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token.getToken(),
      })
  };

  getListPoster(): any {
    return this.http.get(this.rootUrl + 'poster', this.httpOptions);
  }

  getListFilms(): any {
      return this.http.get(this.rootUrl + 'film', this.httpOptions);
  }

  createPoster(data): any {
      return this.http.post(this.rootUrl + 'poster', data, this.httpOptions);
  }

  updatePoster(data, id): any {
      return this.http.put(this.rootUrl + 'poster/' + id, data, this.httpOptions);
  }

}
