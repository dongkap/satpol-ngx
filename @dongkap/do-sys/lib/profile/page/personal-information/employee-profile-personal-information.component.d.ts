import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService, IndexedDBFactoryService, HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, SelectParamModel, SelectResponseModel } from '@dongkap/do-shared';
import { AuthIndexedDBService } from '@dongkap/do-auth';
import * as i0 from "@angular/core";
export declare class EmployeeProfilePersonalInformationComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private userService;
    private profileIndexedDB;
    private authIndexedDB;
    formGroupImage: FormGroup;
    uploadFinished: boolean;
    patternEmail: string;
    patternPhoneNumber: string;
    patternFullname: string;
    minLength: number;
    disabledUpload: boolean;
    provider: string;
    apiSelectGender: HttpBaseModel;
    paramSelectGender: SelectParamModel[];
    apiSelectCountry: HttpBaseModel;
    apiSelectProvince: HttpBaseModel;
    paramSelectProvince: SelectParamModel[];
    apiSelectCity: HttpBaseModel;
    paramSelectCity: SelectParamModel[];
    apiSelectDistrict: HttpBaseModel;
    paramSelectDistrict: SelectParamModel[];
    apiSelectSubDistrict: HttpBaseModel;
    paramSelectSubDistrict: SelectParamModel[];
    bloodTypeData: SelectResponseModel[];
    constructor(injector: Injector, userService: UserService, profileIndexedDB: IndexedDBFactoryService, authIndexedDB: AuthIndexedDBService);
    ngOnInit(): void;
    loadDataMenu(): Observable<any>;
    onSelectCountry(select: any): void;
    onSelectProvince(select: any): void;
    onSelectCity(select: any): void;
    onSelectDistrict(select: any): void;
    onClearCountry(): void;
    onClearProvince(): void;
    onClearCity(): void;
    onClearDistrict(): void;
    uploadImage(): void;
    valueSelect(prop: string): string;
    valueSelectNonLabel(prop: string): string;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeProfilePersonalInformationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeProfilePersonalInformationComponent, "do-employee-profile-personal-information", never, {}, {}, never, never>;
}