import { Injector, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';
import * as i0 from "@angular/core";
export declare class EmployeeEditEmployeeStatusComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private employeeService;
    apiSelectOccupation: HttpBaseModel;
    apiSelectRole: HttpBaseModel;
    apiSelectEmployeeParent: HttpBaseModel;
    username: string;
    permissionsData: CheckboxModel[];
    constructor(injector: Injector, router: Router, employeeService: EmployeeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadDataMenu(): Observable<any>;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeEditEmployeeStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeEditEmployeeStatusComponent, "do-employee-edit-employee-status", never, {}, {}, never, never>;
}
