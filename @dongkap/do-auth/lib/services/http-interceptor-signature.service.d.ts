import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityResourceModel } from '@dongkap/do-core';
import { AuthSignatureService } from './auth-signature.service';
import * as i0 from "@angular/core";
export declare class HttpInterceptorSignatureService implements HttpInterceptor, OnDestroy {
    private authSignature;
    private oauthResource;
    constructor(authSignature: AuthSignatureService, oauthResource: SecurityResourceModel);
    private destroy$;
    ngOnDestroy(): void;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpInterceptorSignatureService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpInterceptorSignatureService>;
}
