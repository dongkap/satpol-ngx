import { Injector, OnDestroy, TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, DatatableColumn, Keyword, Sort } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeProfileEducationComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    private dialogService;
    reloadEducation: boolean;
    reloadTraining: boolean;
    apiPathEducation: HttpBaseModel;
    apiPathTraining: HttpBaseModel;
    apiPathDeleteEducation: HttpBaseModel;
    apiPathDeleteTraining: HttpBaseModel;
    columnsEducation: DatatableColumn[];
    columnsTraining: DatatableColumn[];
    sortEducation: Sort;
    sortTraining: Sort;
    educationIds: any[];
    trainingIds: any[];
    keyword: Keyword;
    private loadingSubject$;
    constructor(injector: Injector, dialogService: NbDialogService);
    ngOnInit(): void;
    loadDataMenu(): Observable<any>;
    ngOnDestroy(): void;
    onAddEducation(): void;
    onAddTraining(): void;
    onEditEducation(data: any): void;
    onEditTraining(data: any): void;
    onDeleteEducationDialog(data: any, dialog: TemplateRef<any>): void;
    onDeleteTrainingDialog(data: any, dialog: TemplateRef<any>): void;
    onDeleteEducation(ref: NbDialogRef<any>): void;
    onDeleteTraining(ref: NbDialogRef<any>): void;
    onLoadEducation(): void;
    onLoadTraining(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeProfileEducationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeProfileEducationComponent, "do-employee-profile-education", never, {}, {}, never, never>;
}