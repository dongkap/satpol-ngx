import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoInputFileComponent extends ValueAccessorDirective<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    multiple: boolean;
    constructor(ngControl: NgControl, locale: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<DoInputFileComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoInputFileComponent, "do-input-file", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "multiple": "multiple"; }, {}, never, never>;
}
