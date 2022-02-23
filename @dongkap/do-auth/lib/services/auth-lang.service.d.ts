import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsIndexedDBService } from './storage/settings-indexeddb.service';
import * as i0 from "@angular/core";
export declare class AuthLanguageService {
    private locale;
    private settingsIndexedDB;
    constructor(locale: string, settingsIndexedDB: SettingsIndexedDBService);
    getLocale(req: HttpRequest<any>): Observable<HttpRequest<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthLanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthLanguageService>;
}
