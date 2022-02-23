import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
import * as i0 from "@angular/core";
export declare class HttpInterceptorTokenService implements HttpInterceptor, OnDestroy {
    private authToken;
    constructor(authToken: AuthTokenService);
    private destroy$;
    ngOnDestroy(): void;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpInterceptorTokenService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpInterceptorTokenService>;
}
