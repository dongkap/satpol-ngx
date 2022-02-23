import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CurrencyMaskDirective {
    private ngControl;
    private el;
    prefix: string;
    decimalSeparator: string;
    thousandsSeparator: string;
    suffix: string;
    padding: number;
    private value;
    constructor(ngControl: NgControl, el: ElementRef);
    onFocus(value: any, event: any): void;
    onBlur(value: any, event: any): void;
    onModelChange(value: any): void;
    onKeyDown(event: KeyboardEvent): void;
    onLeave(value: any): string;
    onInputChange(value: any): {
        val: string;
        frac: string;
    };
    onTransform(val: string, fraction: string): string;
    toNumber(val: string): string;
    private pad;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyMaskDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CurrencyMaskDirective, "input[doCurrency]", never, { "prefix": "prefix"; "decimalSeparator": "decimal"; "thousandsSeparator": "thousand"; "suffix": "suffix"; "padding": "padding"; }, {}, never>;
}
