import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';
  constructor(private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token.getToken(),
          'accept': 'multipart/form-data'
      })
  };

  getListFilm(): any {
    return this.http.get(this.rootUrl + 'film', this.httpOptions);
  }

  getListVideo(): any {
    return this.http.get(this.rootUrl + 'video', this.httpOptions);
  }

  createVideo(data): any {
    return this.http.post(this.rootUrl + 'video', data, this.httpOptions);
  }

  editVideo(data, id): any {
    return this.http.put(this.rootUrl + 'video/' + id, data, this.httpOptions);
  }

  getLink(link) {
     console.log(link);
    return this.http.post(this.rootUrl + 'video/get-link', {link_video: link}, this.httpOptions);
  }
}
