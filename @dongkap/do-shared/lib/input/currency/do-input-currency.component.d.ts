import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoInputCurrencyComponent extends ValueAccessorDirective<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    prefix: string;
    decimalSeparator: string;
    thousandsSeparator: string;
    suffix: string;
    padding: number;
    constructor(ngControl: NgControl, locale: string);
    writeValue(value: any): void;
    transform(value: any): string;
    toNumber(value: string): {
        val: string;
        frac: string;
    };
    private pad;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoInputCurrencyComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoInputCurrencyComponent, "do-input-currency", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "minLength": "minLength"; "maxLength": "maxLength"; "prefix": "prefix"; "decimalSeparator": "decimal"; "thousandsSeparator": "thousand"; "suffix": "suffix"; "padding": "padding"; }, {}, never, never>;
}
