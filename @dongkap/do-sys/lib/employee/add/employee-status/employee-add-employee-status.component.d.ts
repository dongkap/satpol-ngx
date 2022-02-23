import { Injector, OnDestroy, OnInit } from '@angular/core';
import { HttpBaseModel } from '@dongkap/do-core';
import { DoWizardStep } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeAddEmployeeStatusComponent extends DoWizardStep implements OnInit, OnDestroy {
    injector: Injector;
    apiSelectOccupation: HttpBaseModel;
    apiSelectRole: HttpBaseModel;
    apiSelectEmployeeParent: HttpBaseModel;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    validateRoute(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeAddEmployeeStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeAddEmployeeStatusComponent, "do-employee-add-employee-status", never, {}, {}, never, never>;
}
