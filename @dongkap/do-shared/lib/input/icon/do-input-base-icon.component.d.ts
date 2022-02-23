import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoInputBaseIconComponent extends ValueAccessorDirective<string> {
    locale: string;
    placeholder: string;
    minLength: number;
    maxLength: number;
    iconcursor: boolean;
    icon: string;
    buttontype: string;
    type: 'text' | 'password' | 'number';
    clickIcon: EventEmitter<string>;
    focus: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onClickIcon(): void;
    onFocus(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoInputBaseIconComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoInputBaseIconComponent, "do-input-base-icon", never, { "placeholder": "placeholder"; "minLength": "minLength"; "maxLength": "maxLength"; "iconcursor": "iconcursor"; "icon": "icon"; "buttontype": "buttontype"; "type": "type"; }, { "clickIcon": "clickIcon"; "focus": "focus"; }, never, never>;
}
