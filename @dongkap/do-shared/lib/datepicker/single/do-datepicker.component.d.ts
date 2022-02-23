import { NgControl } from '@angular/forms';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoDatePickerComponent extends ValueAccessorDirective<Date> {
    dateService: NbDateService<Date>;
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    min: Date;
    max: Date;
    size: NbCalendarSize;
    dateMask: (string | RegExp)[];
    constructor(ngControl: NgControl, dateService: NbDateService<Date>, locale: string);
    get value(): Date;
    set value(value: Date);
    writeValue(value: any): void;
    /**
     * Parsing from String to Date, not return format date
     */
    private parse;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoDatePickerComponent, [{ optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoDatePickerComponent, "do-datepicker", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "min": "min"; "max": "max"; "size": "size"; "dateMask": "dateMask"; }, {}, never, never>;
}
