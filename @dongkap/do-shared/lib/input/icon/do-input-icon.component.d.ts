import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoInputIconComponent extends ValueAccessorDirective<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    buttontype: string;
    type: 'text' | 'password' | 'number';
    iconcursor: boolean;
    eva: boolean;
    icon: string;
    clickIcon: EventEmitter<string>;
    focus: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onClickIcon(): void;
    onFocus(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoInputIconComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoInputIconComponent, "do-input-icon", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "minLength": "minLength"; "maxLength": "maxLength"; "buttontype": "buttontype"; "type": "type"; "iconcursor": "iconcursor"; "eva": "eva"; "icon": "icon"; }, { "clickIcon": "clickIcon"; "focus": "focus"; }, never, never>;
}
