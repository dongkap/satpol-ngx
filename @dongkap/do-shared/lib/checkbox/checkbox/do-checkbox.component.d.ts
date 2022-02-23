import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import { CheckboxModel } from '../models/checkbox.model';
import * as i0 from "@angular/core";
export declare class DoCheckboxComponent extends ValueAccessorDirective<CheckboxModel[]> {
    locale: string;
    colLabel: number;
    colInput: number;
    data: CheckboxModel[];
    onChecked: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onCheckedChange(item: CheckboxModel): void;
    writeValue(value: CheckboxModel[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoCheckboxComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoCheckboxComponent, "do-checkbox", never, { "colLabel": "colLabel"; "colInput": "colInput"; "data": "data"; }, { "onChecked": "onChecked"; }, never, never>;
}
