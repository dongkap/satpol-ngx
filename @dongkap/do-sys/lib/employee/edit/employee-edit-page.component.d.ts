import { Injector, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BaseComponent, DoToastrService } from '@dongkap/do-shared';
import { EmployeeService } from '../services/employee.service';
import { EmployeeEditPersonalInformationComponent } from './personal-information/employee-edit-personal-information.component';
import { EmployeeEditEducationComponent } from './education/employee-edit-education.component';
import { EmployeeEditEmployeeStatusComponent } from './employee-status/employee-edit-employee-status.component';
import * as i0 from "@angular/core";
export declare class EmployeeEditPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private employeeService;
    private toastr;
    loading: boolean;
    tab: string;
    protected destroy$: Subject<any>;
    personalInfo: EmployeeEditPersonalInformationComponent;
    education: EmployeeEditEducationComponent;
    employeeStatus: EmployeeEditEmployeeStatusComponent;
    constructor(injector: Injector, router: Router, employeeService: EmployeeService, toastr: DoToastrService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleLoadingAnimation(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeEditPageComponent, "do-employee-edit-page", never, {}, {}, never, never>;
}
