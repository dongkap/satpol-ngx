import { Injector, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeProfileEmployeeStatusComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    loadingForm: boolean;
    dataEmployeeStatus: any;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadDataMenu(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeProfileEmployeeStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeProfileEmployeeStatusComponent, "do-employee-profile-employee-status", never, {}, {}, never, never>;
}
