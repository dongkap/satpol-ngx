import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { EncryptionService } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from './storage/auth-indexeddb.service';
import * as i0 from "@angular/core";
export declare class AuthGuardChildService implements CanActivateChild {
    private router;
    private authTokenService;
    private translate;
    private enc;
    private storage;
    constructor(router: Router, authTokenService: AuthTokenService, translate: TranslateService, enc: EncryptionService, storage: AuthIndexedDBService);
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuardChildService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuardChildService>;
}
