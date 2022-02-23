import { Directive, Input, Inject, Optional, HostListener, } from '@angular/core';
import { COMPOSITION_BUFFER_MODE, } from '@angular/forms';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore';
import * as i0 from "@angular/core";
export class TextMaskConfig {
}
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    const userAgent = getDOM() ? getDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
export class MaskedInputDirective {
    constructor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
            showMask: false,
        };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    ngOnChanges(changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    }
    writeValue(value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    _handleInput(value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    }
    _setupMask(create = false) {
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    }
    _compositionStart() { this._composing = true; }
    _compositionEnd(value) {
        this._composing = false;
        // tslint:disable-next-line: no-unused-expression
        this._compositionMode && this._handleInput(value);
    }
}
MaskedInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaskedInputDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
MaskedInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: MaskedInputDirective, selector: "[do-mask]", inputs: { textMaskConfig: ["do-mask", "textMaskConfig"] }, host: { listeners: { "blur": "onTouched()", "input": "_handleInput($event.target.value)", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($event.target.value)" } }, exportAs: ["do-mask"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaskedInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[do-mask]',
                    exportAs: 'do-mask',
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [COMPOSITION_BUFFER_MODE]
                }] }]; }, propDecorators: { textMaskConfig: [{
                type: Input,
                args: ['do-mask']
            }], onTouched: [{
                type: HostListener,
                args: ['blur']
            }], _handleInput: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], _compositionStart: [{
                type: HostListener,
                args: ['compositionstart']
            }], _compositionEnd: [{
                type: HostListener,
                args: ['compositionend', ['$event.target.value']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tYXNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2Jhc2UvZGlyZWN0aXZlL3RleHQtbWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFHUixZQUFZLEdBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVILHVCQUF1QixHQUMxQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRTlFLE1BQU0sT0FBTyxjQUFjO0NBTzFCO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sU0FBUyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBTUQsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUNVLFNBQW9CLEVBQ3BCLFdBQXVCLEVBQ3FCLGdCQUF5QjtRQUZyRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3FCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUztRQU83RCxtQkFBYyxHQUFtQjtZQUNqRCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxJQUFJO1lBQ1gsZUFBZSxFQUFFLEdBQUc7WUFDcEIsSUFBSSxFQUFFLFNBQVM7WUFDZixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7UUFLRixzRUFBc0U7UUFDOUQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUUzQixhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUUxQixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBO1FBdEJsQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBcUJELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLDZEQUE2RDtRQUM3RCxNQUFNLGVBQWUsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV4RSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7WUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFvQixJQUFVLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRSxpQkFBaUIsQ0FBQyxFQUFjLElBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWhFLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBR0QsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6RSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFbEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssU0FBUyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV4Qyx3QkFBd0I7Z0JBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7Z0JBQ3BFLDREQUE0RDtnQkFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTCx5RkFBeUY7Z0JBQ3pGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckY7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLDBCQUEwQixDQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ3RFLENBQUM7U0FDSDtJQUVILENBQUM7SUFHRCxpQkFBaUIsS0FBVyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFHckQsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2tIQW5HVSxvQkFBb0IscUVBS1QsdUJBQXVCO3NHQUxsQyxvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCOzswQkFNSSxRQUFROzswQkFBSSxNQUFNOzJCQUFDLHVCQUF1Qjs0Q0FPM0IsY0FBYztzQkFBL0IsS0FBSzt1QkFBQyxTQUFTO2dCQWlCaEIsU0FBUztzQkFEUixZQUFZO3VCQUFDLE1BQU07Z0JBOEJwQixZQUFZO3NCQURYLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBbUM5QyxpQkFBaUI7c0JBRGhCLFlBQVk7dUJBQUMsa0JBQWtCO2dCQUloQyxlQUFlO3NCQURkLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgSW5qZWN0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPcHRpb25hbCxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHvJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQgfSBmcm9tICd0ZXh0LW1hc2stY29yZS9kaXN0L3RleHRNYXNrQ29yZSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0TWFza0NvbmZpZyB7XG4gIG1hc2s6IEFycmF5PHN0cmluZyB8IFJlZ0V4cD4gfCAoKHJhdzogc3RyaW5nKSA9PiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+KSB8IGZhbHNlO1xuICBndWlkZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQ2hhcj86IHN0cmluZztcbiAgcGlwZT86IChjb25mb3JtZWRWYWx1ZTogc3RyaW5nLCBjb25maWc6IFRleHRNYXNrQ29uZmlnKSA9PiBmYWxzZSB8IHN0cmluZyB8IG9iamVjdDtcbiAga2VlcENoYXJQb3NpdGlvbnM/OiBib29sZWFuO1xuICBzaG93TWFzaz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogV2UgbXVzdCBjaGVjayB3aGV0aGVyIHRoZSBhZ2VudCBpcyBBbmRyb2lkIGJlY2F1c2UgY29tcG9zaXRpb24gZXZlbnRzXG4gKiBiZWhhdmUgZGlmZmVyZW50bHkgYmV0d2VlbiBpT1MgYW5kIEFuZHJvaWQuXG4gKi9cbmZ1bmN0aW9uIF9pc0FuZHJvaWQoKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVzZXJBZ2VudCA9IGdldERPTSgpID8gZ2V0RE9NKCkuZ2V0VXNlckFnZW50KCkgOiAnJztcbiAgcmV0dXJuIC9hbmRyb2lkIChcXGQrKS8udGVzdCh1c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkby1tYXNrXScsXG4gIGV4cG9ydEFzOiAnZG8tbWFzaycsXG59KVxuZXhwb3J0IGNsYXNzIE1hc2tlZElucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ09NUE9TSVRJT05fQlVGRkVSX01PREUpcHJpdmF0ZSBfY29tcG9zaXRpb25Nb2RlOiBib29sZWFuXG4gICkge1xuICAgIGlmICh0aGlzLl9jb21wb3NpdGlvbk1vZGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29tcG9zaXRpb25Nb2RlID0gIV9pc0FuZHJvaWQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoJ2RvLW1hc2snKSB0ZXh0TWFza0NvbmZpZzogVGV4dE1hc2tDb25maWcgPSB7XG4gICAgbWFzazogW10sXG4gICAgZ3VpZGU6IHRydWUsXG4gICAgcGxhY2Vob2xkZXJDaGFyOiAnXycsXG4gICAgcGlwZTogdW5kZWZpbmVkLFxuICAgIGtlZXBDaGFyUG9zaXRpb25zOiBmYWxzZSxcbiAgICBzaG93TWFzazogZmFsc2UsXG4gIH07XG5cbiAgcHJpdmF0ZSB0ZXh0TWFza0lucHV0RWxlbWVudDogYW55O1xuICBwcml2YXRlIGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICAvKiogV2hldGhlciB0aGUgdXNlciBpcyBjcmVhdGluZyBhIGNvbXBvc2l0aW9uIHN0cmluZyAoSU1FIGV2ZW50cykuICovXG4gIHByaXZhdGUgX2NvbXBvc2luZyA9IGZhbHNlO1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvblRvdWNoZWQgPSAoKSA9PiB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl9zZXR1cE1hc2sodHJ1ZSk7XG4gICAgaWYgKHRoaXMudGV4dE1hc2tJbnB1dEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50ZXh0TWFza0lucHV0RWxlbWVudC51cGRhdGUodGhpcy5pbnB1dEVsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3NldHVwTWFzaygpO1xuXG4gICAgLy8gc2V0IHRoZSBpbml0aWFsIHZhbHVlIGZvciBjYXNlcyB3aGVyZSB0aGUgbWFzayBpcyBkaXNhYmxlZFxuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuXG4gICAgaWYgKHRoaXMudGV4dE1hc2tJbnB1dEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50ZXh0TWFza0lucHV0RWxlbWVudC51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcbiAgX2hhbmRsZUlucHV0KHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLl9jb21wb3NpdGlvbk1vZGUgfHwgKHRoaXMuX2NvbXBvc2l0aW9uTW9kZSAmJiAhdGhpcy5fY29tcG9zaW5nKSkge1xuICAgICAgdGhpcy5fc2V0dXBNYXNrKCk7XG5cbiAgICAgIGlmICh0aGlzLnRleHRNYXNrSW5wdXRFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50ZXh0TWFza0lucHV0RWxlbWVudC51cGRhdGUodmFsdWUpO1xuXG4gICAgICAgIC8vIGdldCB0aGUgdXBkYXRlZCB2YWx1ZVxuICAgICAgICB2YWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2V0dXBNYXNrKGNyZWF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgLy8gYHRleHRNYXNrYCBkaXJlY3RpdmUgaXMgdXNlZCBkaXJlY3RseSBvbiBhbiBpbnB1dCBlbGVtZW50XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYHRleHRNYXNrYCBkaXJlY3RpdmUgaXMgdXNlZCBvbiBhbiBhYnN0cmFjdGVkIGlucHV0IGVsZW1lbnQsIGBtZC1pbnB1dC1jb250YWluZXJgLCBldGNcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lOUFVUJylbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIGNyZWF0ZSkge1xuICAgICAgdGhpcy50ZXh0TWFza0lucHV0RWxlbWVudCA9IGNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50KFxuICAgICAgICBPYmplY3QuYXNzaWduKHtpbnB1dEVsZW1lbnQ6IHRoaXMuaW5wdXRFbGVtZW50fSwgdGhpcy50ZXh0TWFza0NvbmZpZylcbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JylcbiAgX2NvbXBvc2l0aW9uU3RhcnQoKTogdm9pZCB7IHRoaXMuX2NvbXBvc2luZyA9IHRydWU7IH1cblxuICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxuICBfY29tcG9zaXRpb25FbmQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2NvbXBvc2luZyA9IGZhbHNlO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICB0aGlzLl9jb21wb3NpdGlvbk1vZGUgJiYgdGhpcy5faGFuZGxlSW5wdXQodmFsdWUpO1xuICB9XG59XG4iXX0=