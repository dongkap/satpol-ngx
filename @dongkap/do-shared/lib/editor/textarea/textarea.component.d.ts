import { OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoTextareaComponent extends ValueAccessorDirective<string> implements OnDestroy {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    height: number;
    constructor(ngControl: NgControl, locale: string);
    onInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoTextareaComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoTextareaComponent, "do-textarea", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "minLength": "minLength"; "maxLength": "maxLength"; "height": "height"; }, {}, never, never>;
}
