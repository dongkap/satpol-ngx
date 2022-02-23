import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { BusinessPartnerService } from '../services/business-partner.service';
import * as i0 from "@angular/core";
export declare class BusinessPartnerListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private businessPartnerService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, businessPartnerService: BusinessPartnerService);
    ngOnInit(): void;
    onAdd(): void;
    onViewDetail(data: any): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BusinessPartnerListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BusinessPartnerListPageComponent, "do-business-partner-list-page", never, {}, {}, never, never>;
}
