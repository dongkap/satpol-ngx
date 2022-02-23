import { HttpRequest } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EncryptionService, SecurityResourceModel } from '@dongkap/do-core';
import { AuthIndexedDBService } from './storage/auth-indexeddb.service';
import * as i0 from "@angular/core";
export declare class AuthSignatureService {
    private translate;
    private enc;
    private oauthResource;
    private authStorage;
    constructor(translate: TranslateService, enc: EncryptionService, oauthResource: SecurityResourceModel, authStorage: AuthIndexedDBService);
    private timeStamp;
    signHeaders(req: HttpRequest<any>): Observable<HttpRequest<any>>;
    key(): Observable<string>;
    timestamp(): string;
    date(): string;
    signature(url: string): Observable<string>;
    private getPath;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthSignatureService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthSignatureService>;
}
