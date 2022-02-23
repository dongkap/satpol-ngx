import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormComponent, DoWizardService } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeAddPageComponent extends BaseFormComponent<any> {
    injector: Injector;
    private service;
    private router;
    constructor(injector: Injector, service: DoWizardService, router: Router);
    formIsValid(): boolean;
    onSubmit(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeAddPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeAddPageComponent, "do-employee-add-page", never, {}, {}, never, never>;
}
