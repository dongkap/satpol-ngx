import { Injector } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthIndexedDBService } from '@dongkap/do-auth';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class SecurityPageComponent extends BaseFormComponent<any> {
    injector: Injector;
    private dialogService;
    private authIndexedDB;
    private enc;
    private oauthResource;
    private authToken;
    authProvider: boolean;
    provider: any;
    constructor(injector: Injector, dialogService: NbDialogService, authIndexedDB: AuthIndexedDBService);
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecurityPageComponent, "do-security-page", never, {}, {}, never, never>;
}
