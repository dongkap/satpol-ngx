import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { SelectionType } from '@swimlane/ngx-datatable';
import { EmployeeService } from '../services/employee.service';
import * as i0 from "@angular/core";
export declare class EmployeeListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private employeeService;
    apiPath: HttpBaseModel;
    columns: DatatableColumn[];
    reload: boolean;
    expanded: boolean;
    selectionType: SelectionType;
    constructor(injector: Injector, router: Router, employeeService: EmployeeService);
    ngOnInit(): void;
    onAdd(): void;
    onViewDetail(data: any): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeListPageComponent, "do-employee-list-page", never, {}, {}, never, never>;
}
