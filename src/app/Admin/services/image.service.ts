import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
    constructor(private http: HttpClient, private token: TokenService) { }
    public httpOptions = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.token.getToken(),
        })
    };

    getListImage(): any {
      return this.http.get(this.rootUrl + 'image', this.httpOptions);
    }

    getListImageRemoved(): any {
      return this.http.get(this.rootUrl + 'history/image/list', this.httpOptions);
    }

    editImage(data, id): any {
        return this.http.put(this.rootUrl + 'image/' + id, data, this.httpOptions);
    }
}
