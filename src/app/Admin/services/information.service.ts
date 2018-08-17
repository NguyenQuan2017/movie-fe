import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

    readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
    constructor(private http: HttpClient, private token: TokenService) { }
    public httpOptions = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.token.getToken(),
        })
    };

    getListInformationFilm(): any {
      return this.http.get(this.rootUrl + 'information', this.httpOptions);
    }

    getListInformationRemoved(): any {
      return this.http.get(this.rootUrl + 'history/information/list', this.httpOptions);
    }

    getListFilm(): any {
      return this.http.get(this.rootUrl + 'film', this.httpOptions);
    }

    createInformationFilm(data): any {
      return this.http.post(this.rootUrl + 'information', data, this.httpOptions);
    }

    editInformationFilm(data, id): any {
      return this.http.put(this.rootUrl + 'information/' + id, data, this.httpOptions);
    }

    removeInformation(id): any {
      return this.http.delete(this.rootUrl + 'information/' + id, this.httpOptions);
    }

    restoreInformation(id): any {
      return this.http.put(this.rootUrl + 'history/information/restore/' + id, this.httpOptions);
    }

    deleteInformation(id): any {
      return this.http.delete(this.rootUrl + 'history/information/delete/' + id, this.httpOptions);
    }
}
