import { Injector, TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { CorporateService } from '../services/corporate.service';
import * as i0 from "@angular/core";
export declare class CorporateListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private corporateService;
    private dialogService;
    apiPath: HttpBaseModel;
    apiPathDelete: HttpBaseModel;
    columns: DatatableColumn[];
    reload: boolean;
    expanded: boolean;
    private corporateCodes;
    constructor(injector: Injector, router: Router, corporateService: CorporateService, dialogService: NbDialogService);
    ngOnInit(): void;
    onAdd(): void;
    onViewDetail(data: any): void;
    onDeleteDialog(data: any, dialog: TemplateRef<any>): void;
    onDelete(ref: NbDialogRef<any>): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CorporateListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CorporateListPageComponent, "do-corporate-list-page", never, {}, {}, never, never>;
}
