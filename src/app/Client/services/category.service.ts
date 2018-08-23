import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/public/';
  constructor(private  http: HttpClient) { }

  getCategories(): any {
    return this.http.get(this.rootUrl + 'category');
  }
}
