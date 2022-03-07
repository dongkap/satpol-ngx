import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoInputTextComponent extends ValueAccessorDirective<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    min: number;
    max: number;
    step: number;
    capslock: boolean;
    type: 'text' | 'password' | 'number';
    togglePassword: boolean;
    showPassword: boolean;
    icon: string;
    constructor(ngControl: NgControl, locale: string);
    onInit(): void;
    onShowPassword(): void;
    onKeyUp(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoInputTextComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoInputTextComponent, "do-input-text", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "minLength": "minLength"; "maxLength": "maxLength"; "min": "min"; "max": "max"; "step": "step"; "capslock": "capslock"; "type": "type"; "togglePassword": "togglePassword"; "showPassword": "showPassword"; }, {}, never, never>;
}
