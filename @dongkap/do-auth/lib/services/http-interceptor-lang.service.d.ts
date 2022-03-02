import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthLanguageService } from './auth-lang.service';
import * as i0 from "@angular/core";
export declare class HttpInterceptorLangService implements HttpInterceptor, OnDestroy {
    private authLanguage;
    constructor(authLanguage: AuthLanguageService);
    private destroy$;
    ngOnDestroy(): void;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpInterceptorLangService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpInterceptorLangService>;
}