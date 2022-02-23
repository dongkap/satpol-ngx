import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { SelectionType } from '@swimlane/ngx-datatable';
import { JobPlacementService } from '../services/job-placement.service';
import * as i0 from "@angular/core";
export declare class JobPlacementListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private jobPlacementService;
    apiPath: HttpBaseModel;
    columns: DatatableColumn[];
    selectionType: SelectionType;
    constructor(injector: Injector, router: Router, jobPlacementService: JobPlacementService);
    ngOnInit(): void;
    onViewDetail(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JobPlacementListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JobPlacementListPageComponent, "do-job-placement-list-page", never, {}, {}, never, never>;
}
