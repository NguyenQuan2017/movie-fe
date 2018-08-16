import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';
import {Router} from '@angular/router';


@Injectable()
export class AuthenticatedService {

    readonly  rootUrl = 'http://movieserver.localhost:8081/api/admin/';

    constructor(private  http: HttpClient, private token: TokenService, private router: Router) {
    }

    login(data) {
        const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
        return this.http.post(this.rootUrl + 'login', data);
    }

    logout () {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token.getToken()
            })
        };
        this.token.removeToken();
        this.http.post(this.rootUrl + 'logout', httpOptions);
        return this.router.navigate(['admin/login']);
    }
    getMe() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token.getToken()
            })
        };
        return this.http.get(this.rootUrl + 'me', httpOptions);
    }

}