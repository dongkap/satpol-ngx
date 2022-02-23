import { Injector, OnDestroy, OnInit } from '@angular/core';
import { AsyncValidatorFn } from '@angular/forms';
import { DoWizardStep, SelectResponseModel } from '@dongkap/do-shared';
import { APIModel, HttpFactoryService, SecurityResourceModel } from '@dongkap/do-core';
import * as i0 from "@angular/core";
export declare class EmployeeAddPersonalInformationComponent extends DoWizardStep implements OnInit, OnDestroy {
    injector: Injector;
    private httpBaseService;
    private oauthResource;
    private apiPath;
    formGroupName: string;
    patternEmail: string;
    patternPhoneNumber: string;
    patternFullname: string;
    genderData: any[];
    bloodTypeData: SelectResponseModel[];
    private isCheckEmail;
    constructor(injector: Injector, httpBaseService: HttpFactoryService, oauthResource: SecurityResourceModel, apiPath: APIModel);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onKeyDownEmail(event: KeyboardEvent): void;
    validateRoute(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeAddPersonalInformationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeAddPersonalInformationComponent, "do-employee-add-personal-information", never, {}, {}, never, never>;
}
export declare function userValidator(oauthResource: SecurityResourceModel, httpBaseService: HttpFactoryService, apiPath: APIModel): AsyncValidatorFn;
