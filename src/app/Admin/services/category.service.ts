import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';

  constructor( private http: HttpClient, private token: TokenService) { }
  public httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken(),
    })
  };

  getAllCategories(): any {
      return this.http.get(this.rootUrl + 'category', this.httpOptions);
  }

  getAllCategoryDelete(): any {
      return this.http.get(this.rootUrl + 'history/category/list', this.httpOptions);
  }

  createCategory(data) {
      return this.http.post(this.rootUrl +  'category', data, this.httpOptions);
  }

  updateCategory(data, id) {
      return this.http.put(this.rootUrl + 'category/' + id, data, this.httpOptions);
  }

  removeCategory(id): any {
      return this.http.delete(this.rootUrl + 'category/' + id, this.httpOptions);
  }

  restoreCategory(id): any {
      return this.http.put(this.rootUrl + 'history/category/restore/' + id, this.httpOptions);
  }

  deleteCategory(id): any {
      return this.http.delete(this.rootUrl + 'history/category/delete/' + id, this.httpOptions);
  }
}
