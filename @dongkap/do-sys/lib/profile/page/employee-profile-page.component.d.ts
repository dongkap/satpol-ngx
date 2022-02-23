import { Injector, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent, DoToastrService } from '@dongkap/do-shared';
import { EmployeeProfilePersonalInformationComponent } from './personal-information/employee-profile-personal-information.component';
import { EmployeeProfileEducationComponent } from './education/employee-profile-education.component';
import { EmployeeProfileEmployeeStatusComponent } from './employee-status/employee-profile-employee-status.component';
import * as i0 from "@angular/core";
export declare class EmployeeProfilePageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private toastr;
    loading: boolean;
    tab: string;
    protected destroy$: Subject<any>;
    personalInfo: EmployeeProfilePersonalInformationComponent;
    education: EmployeeProfileEducationComponent;
    employeeStatus: EmployeeProfileEmployeeStatusComponent;
    constructor(injector: Injector, toastr: DoToastrService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleLoadingAnimation(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeProfilePageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeProfilePageComponent, "do-employee-profile-page", never, {}, {}, never, never>;
}
