import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';

  constructor( private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token.getToken(),
      })
  };

  getListCountries() {
    return this.http.get(this.rootUrl + 'country', this.httpOptions);
  }

  createCountry(data) {
    return this.http.post(this.rootUrl + 'country', data, this.httpOptions);
  }

  updateCountry(data, id) {
    return this.http.put(this.rootUrl + 'country/' + id, data, this.httpOptions);
  }
}
