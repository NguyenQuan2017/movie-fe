import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';

@Injectable()
export  class  UserService {
    readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';

    constructor(private  http: HttpClient, private token: TokenService) {
    }
    public httpOptions = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.token.getToken(),
        })
    };

    getAllUser() {
        return this.http.get(this.rootUrl + 'user', this.httpOptions);
    }

    createUser(data): Observable<any> {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.token.getToken(),
            'Accept': 'multipart/form-data'
        });
        return this.http.post(this.rootUrl + 'user', data, {headers: headers});
    }
    getAllUserDeleted() {
        return this.http.get(this.rootUrl + 'history/user/list', this.httpOptions);
    }
    deleteUser(id) {
        return this.http.delete(this.rootUrl + 'user/' + id, this.httpOptions);
    }

    restoreUser(id) {
        return this.http.put(this.rootUrl + 'history/user/restore/' + id, this.httpOptions);
    }
    deleteUserHistory(id) {
        return this.http.delete(this.rootUrl + 'history/user/delete/' + id, this.httpOptions);
    }

    getRole() {
        return this.http.get(this.rootUrl + 'role', this.httpOptions);
    }

    updateUser(data, id): any {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.token.getToken(),
            'Accept': 'multipart/form-data',
            // 'Accept': 'application/json'
        });
        return this.http.put(this.rootUrl + 'user/' + id, data, {headers: headers});
    }
}
