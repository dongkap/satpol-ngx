import { NgControl } from '@angular/forms';
import { NbCalendarSize } from '@nebular/theme';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoDatePickerRangeComponent extends ValueAccessorDirective<any> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    icon: boolean;
    min: Date;
    max: Date;
    size: NbCalendarSize;
    dateMask: (string | RegExp)[];
    constructor(ngControl: NgControl, locale: string);
    get value(): any;
    set value(value: any);
    writeValue(value: any): void;
    onTyped(value: string): void;
    private enableError;
    private disableError;
    /**
     * Parsing from String to Date, not return format date
     */
    private parse;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoDatePickerRangeComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoDatePickerRangeComponent, "do-datepicker-range", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "icon": "icon"; "min": "min"; "max": "max"; "size": "size"; "dateMask": "dateMask"; }, {}, never, never>;
}
