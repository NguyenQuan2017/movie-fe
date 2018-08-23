import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
  constructor(private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token.getToken(),
      })
  };

  getListActor(): any {
    return this.http.get(this.rootUrl + 'actor', this.httpOptions);
  }

  createActor(data): any {
      return this.http.post(this.rootUrl + 'actor', data, this.httpOptions);
  }

  updateActor(data, id): any {
      return this.http.put(this.rootUrl + 'actor/' + id, data, this.httpOptions);
  }
}
