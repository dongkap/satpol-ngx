import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { TableColumn, SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent } from '@dongkap/do-shared';
import { ParameterService } from '../../services/parameter.service';
import { ParameterGroupModel } from '../../models/parameter.model';
import * as i0 from "@angular/core";
export declare class ParameterListDetailPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private parameterService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: TableColumn[];
    parameterGroup: ParameterGroupModel;
    expanded: boolean;
    constructor(injector: Injector, router: Router, parameterService: ParameterService);
    ngOnInit(): void;
    onAddGroup(event: any): void;
    onViewDetail(data: any): void;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterListDetailPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParameterListDetailPageComponent, "do-parameter-list-detail-page", never, {}, {}, never, never>;
}
