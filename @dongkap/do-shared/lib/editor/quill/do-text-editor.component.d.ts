import { NgControl } from '@angular/forms';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class DoTextEditorComponent extends ValueAccessorDirective<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    height: number;
    constructor(ngControl: NgControl, locale: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<DoTextEditorComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoTextEditorComponent, "do-text-editor", never, { "placeholder": "placeholder"; "colLabel": "colLabel"; "colInput": "colInput"; "minLength": "minLength"; "maxLength": "maxLength"; "height": "height"; }, {}, never, never>;
}
