import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextMaskConfig {
    mask: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false;
    guide?: boolean;
    placeholderChar?: string;
    pipe?: (conformedValue: string, config: TextMaskConfig) => false | string | object;
    keepCharPositions?: boolean;
    showMask?: boolean;
}
export declare class MaskedInputDirective implements ControlValueAccessor, OnChanges {
    private _renderer;
    private _elementRef;
    private _compositionMode;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _compositionMode: boolean);
    textMaskConfig: TextMaskConfig;
    private textMaskInputElement;
    private inputElement;
    /** Whether the user is creating a composition string (IME events). */
    private _composing;
    onChange: (_: any) => void;
    onTouched: () => void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(value: any): void;
    _setupMask(create?: boolean): void;
    _compositionStart(): void;
    _compositionEnd(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaskedInputDirective, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MaskedInputDirective, "[do-mask]", ["do-mask"], { "textMaskConfig": "do-mask"; }, {}, never>;
}
