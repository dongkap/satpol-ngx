import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { SecurityResourceModel, HttpFactoryService, APIModel } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';
import * as i0 from "@angular/core";
export declare class EmployeeEditPersonalInformationComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private employeeService;
    private httpBaseService;
    private oauthResource;
    private apiPath;
    patternEmail: string;
    patternPhoneNumber: string;
    patternFullname: string;
    personalInfo: any;
    constructor(injector: Injector, router: Router, employeeService: EmployeeService, httpBaseService: HttpFactoryService, oauthResource: SecurityResourceModel, apiPath: APIModel);
    ngOnInit(): void;
    loadDataMenu(): Observable<any>;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeEditPersonalInformationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeEditPersonalInformationComponent, "do-employee-edit-personal-information", never, {}, {}, never, never>;
}
export declare function userValidator(oauthResource: SecurityResourceModel, httpBaseService: HttpFactoryService, apiPath: APIModel): AsyncValidatorFn;
