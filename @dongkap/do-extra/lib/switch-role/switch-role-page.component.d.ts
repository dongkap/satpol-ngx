import { Injector, OnInit } from '@angular/core';
import { AuthIndexedDBService } from '@dongkap/do-auth';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class SwitchRolePageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private authIndexedDB;
    apiSelectUserRole: HttpBaseModel;
    private authority;
    constructor(injector: Injector, authIndexedDB: AuthIndexedDBService);
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchRolePageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchRolePageComponent, "do-switch-role-page", never, {}, {}, never, never>;
}
