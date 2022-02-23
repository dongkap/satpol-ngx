import { NgControl } from '@angular/forms';
import { ValidatorAccessorDirective } from './validator-accessor.component';
import * as i0 from "@angular/core";
export declare abstract class ValueAccessorDirective<T> extends ValidatorAccessorDirective {
    ngControl: NgControl;
    locale: string;
    format: string;
    skeleton: boolean;
    show: boolean;
    protected _value: any;
    defaultValue: any;
    constructor(ngControl: NgControl, locale: string);
    get value(): T;
    set value(value: T);
    writeValue(value: T): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueAccessorDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ValueAccessorDirective<any>, never, never, { "format": "format"; "skeleton": "skeleton"; "show": "show"; }, {}, never>;
}
