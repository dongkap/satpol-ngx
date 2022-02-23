import { Injector, TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { AppsService } from '../services/apps.service';
import * as i0 from "@angular/core";
export declare class AppsListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private appsService;
    private dialogService;
    apiPath: HttpBaseModel;
    apiPathDelete: HttpBaseModel;
    columns: DatatableColumn[];
    reload: boolean;
    expanded: boolean;
    private appCodes;
    constructor(injector: Injector, router: Router, appsService: AppsService, dialogService: NbDialogService);
    ngOnInit(): void;
    onAdd(): void;
    onViewDetail(data: any): void;
    onDeleteDialog(data: any, dialog: TemplateRef<any>): void;
    onDelete(ref: NbDialogRef<any>): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppsListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppsListPageComponent, "do-apps-list-page", never, {}, {}, never, never>;
}
