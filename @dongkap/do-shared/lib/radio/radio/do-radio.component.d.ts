import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import { RadioModel } from '../models/radio.model';
import * as i0 from "@angular/core";
export declare class DoRadioComponent extends ValueAccessorDirective<any> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    data: RadioModel[];
    constructor(ngControl: NgControl, locale: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<DoRadioComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoRadioComponent, "do-radio", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "data": "data"; }, {}, never, never>;
}
