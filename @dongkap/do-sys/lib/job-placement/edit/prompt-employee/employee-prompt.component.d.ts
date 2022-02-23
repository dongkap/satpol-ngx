import { OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { APIModel, HttpBaseModel } from '@dongkap/do-core';
import { DatatableColumn, Sort, SortProperties } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeePromptComponent implements OnInit {
    private api;
    protected ref: NbDialogRef<EmployeePromptComponent>;
    education: any;
    apiPath: HttpBaseModel;
    columns: DatatableColumn[];
    sort: Sort;
    sortsDefault: SortProperties[];
    disabled: boolean;
    selected: any[];
    constructor(api: APIModel, ref: NbDialogRef<EmployeePromptComponent>);
    ngOnInit(): void;
    onSubmit(): void;
    onReset(): void;
    onSelected(data: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeePromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeePromptComponent, "do-employee-prompt", never, { "education": "education"; }, {}, never, never>;
}
