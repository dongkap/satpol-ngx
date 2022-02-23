import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { APIModel, HttpFactoryService, UserModel, UserService } from '@dongkap/do-core';
import { ProfileIndexedDBService } from './storage/profile-indexeddb.service';
import * as i0 from "@angular/core";
export declare class AuthUserService extends UserService implements OnDestroy {
    private profileIndexedDB;
    private apiPath;
    private httpBaseService;
    constructor(profileIndexedDB: ProfileIndexedDBService, apiPath: APIModel, httpBaseService: HttpFactoryService);
    private loaderUserSubject$;
    private destroy$;
    ngOnDestroy(): void;
    loadUser(): void;
    updateName(name: string): Observable<UserModel>;
    updatePhoto(checksum: string): Observable<UserModel>;
    get onUserChange(): Observable<UserModel>;
    private awaitUser;
    private putImageBase64;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthUserService>;
}
