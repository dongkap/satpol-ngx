import { Injector, OnDestroy, OnInit } from '@angular/core';
import { HttpBaseModel } from '@dongkap/do-core';
import { DoWizardStep, SelectParamModel } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeAddEducationComponent extends DoWizardStep implements OnInit, OnDestroy {
    injector: Injector;
    apiSelectEducationalLevel: HttpBaseModel;
    paramSelectEducationalLevel: SelectParamModel[];
    noSchool: boolean;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSelectEducationalLevel(select: any): void;
    validateRoute(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeAddEducationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeAddEducationComponent, "do-employee-add-education", never, {}, {}, never, never>;
}
