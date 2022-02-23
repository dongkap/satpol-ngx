import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatatableFilter, Keyword, Sort, SortProperties } from '../../datatable/models/datatable.model';
import { BaseFormComponent } from './base-form.component';
export declare abstract class BaseFilterComponent<T> extends BaseFormComponent<T> {
    injector: Injector;
    formGroupFilter: FormGroup;
    filters: DatatableFilter[];
    keyword: Keyword;
    rows: any[];
    sort: Sort;
    sortsDefault: SortProperties[];
    constructor(injector: Injector, filtersConfig?: {
        [key: string]: any;
    }, controlsConfig?: {
        [key: string]: any;
    });
    doFilterAdvanced(keyword: Keyword): void;
}
