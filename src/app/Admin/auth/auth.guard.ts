import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../services/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private tokenService: TokenService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (!this.tokenService.isTokenExpired() && this.tokenService.isValid()) {
            return true;
        }
        this.router.navigate(['/admin/login']);
        this.tokenService.removeToken();
        return false;
    }
}
