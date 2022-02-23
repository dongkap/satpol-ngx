import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
import * as i0 from "@angular/core";
export declare class AuthGuardService implements CanActivate {
    private router;
    private authTokenService;
    private authService;
    constructor(router: Router, authTokenService: AuthTokenService, authService: UserService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuardService>;
}
