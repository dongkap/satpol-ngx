import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { RoleService } from '../services/role.service';
import * as i0 from "@angular/core";
export declare class RoleListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private roleService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, roleService: RoleService);
    ngOnInit(): void;
    onAddGroup(): void;
    onViewDetail(data: any): void;
    onReset(): void;
    back(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleListPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RoleListPageComponent, "do-role-list-page", never, {}, {}, never, never>;
}
