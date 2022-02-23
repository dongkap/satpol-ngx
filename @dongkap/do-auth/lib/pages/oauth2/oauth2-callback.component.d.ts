import { OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Idle } from '@ng-idle/core';
import { APIModel, HttpFactoryService, SecurityResourceModel } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../../services/storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../../services/storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../../services/storage/settings-indexeddb.service';
import * as i0 from "@angular/core";
export declare class OAuth2CallbackComponent implements OnDestroy {
    private router;
    private httpBaseService;
    private oauthResource;
    private apiPath;
    private authIndexedDB;
    private profileIndexedDB;
    private settingsIndexedDB;
    private idle;
    protected destroy$: Subject<any>;
    constructor(router: Router, route: ActivatedRoute, httpBaseService: HttpFactoryService, oauthResource: SecurityResourceModel, apiPath: APIModel, authIndexedDB: AuthIndexedDBService, profileIndexedDB: ProfileIndexedDBService, settingsIndexedDB: SettingsIndexedDBService, idle: Idle);
    ngOnDestroy(): void;
    private extractToken;
    private getAuthBody;
    private getAuthHeader;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2CallbackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OAuth2CallbackComponent, "do-oauth2-callback", never, {}, {}, never, never>;
}
