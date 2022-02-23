import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { LocaleService } from '../services/locale.service';
import * as i0 from "@angular/core";
export declare class LocaleListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private localeService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, localeService: LocaleService);
    ngOnInit(): void;
    onAddGroup(): void;
    onViewDetail(data: any): void;
    onReset(): void;
    back(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocaleListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocaleListPageComponent, "do-locale-list-page", never, {}, {}, never, never>;
}
