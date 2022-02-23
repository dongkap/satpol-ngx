import { Injector, TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { OccupationService } from '../services/occupation.service';
import * as i0 from "@angular/core";
export declare class OccupationListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private occupationService;
    private dialogService;
    apiPath: HttpBaseModel;
    apiPathDelete: HttpBaseModel;
    columns: DatatableColumn[];
    reload: boolean;
    expanded: boolean;
    private occupationCodes;
    constructor(injector: Injector, router: Router, occupationService: OccupationService, dialogService: NbDialogService);
    ngOnInit(): void;
    onAdd(): void;
    onViewDetail(data: any): void;
    onDeleteDialog(data: any, dialog: TemplateRef<any>): void;
    onDelete(ref: NbDialogRef<any>): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OccupationListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OccupationListPageComponent, "do-occupation-list-page", never, {}, {}, never, never>;
}
