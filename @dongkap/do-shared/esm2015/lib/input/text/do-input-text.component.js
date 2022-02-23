import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@angular/common";
import * as i4 from "@nebular/theme";
import * as i5 from "@ngx-translate/core";
export class DoInputTextComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.min = 0;
        this.max = 999;
        this.step = 1;
        this.capslock = false;
        this.type = 'text';
    }
    onKeyUp(event) {
        if (this.capslock) {
            this.value = this.value.toUpperCase();
        }
    }
    onKeyDown(event) {
        if (this.type === 'number') {
            if (event.key.toUpperCase() === 'E') {
                return false;
            }
            if (this.step >= 1 && event.key === '.') {
                return false;
            }
            if (this.min >= 0 && event.key === '-') {
                return false;
            }
            if (this.value) {
                if (this.value.length >= this.maxLength) {
                    if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER'].indexOf(event.key.toUpperCase()) !== -1 ||
                        (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                        (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                        (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                        (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                        (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                        (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                        (event.key.toUpperCase() === 'END') ||
                        (event.key.toUpperCase() === 'HOME') ||
                        (event.key.toUpperCase() === 'ARROWLEFT') ||
                        (event.key.toUpperCase() === 'ARROWRIGHT')) {
                        return true;
                    }
                    return false;
                }
            }
            return true;
        }
        return true;
    }
}
DoInputTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputTextComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputTextComponent, selector: "do-input-text", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", min: "min", max: "max", step: "step", capslock: "capslock", type: "type" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".input-capslock{text-transform:uppercase}\n"], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-text',
                    styleUrls: ['./do-input-text.component.scss'],
                    templateUrl: './do-input-text.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], capslock: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9pbnB1dC90ZXh0L2RvLWlucHV0LXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW5wdXQvdGV4dC9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7OztBQVE3RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsc0JBQThCO0lBWXRFLFlBQ3NCLFNBQW9CLEVBQ2QsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQUNsQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFtQyxNQUFNLENBQUM7SUFNdkQsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFvQjtRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxD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c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9iYXNlL3ZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LXRleHQnLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dFRleHRDb21wb25lbnQgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgPSA5OTk7XG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIGNhcHNsb2NrOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2Fwc2xvY2spIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0UnKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RlcCA+PSAxICYmIGV2ZW50LmtleSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1pbiA+PSAwICYmIGV2ZW50LmtleSA9PT0gJy0nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+PSB0aGlzLm1heExlbmd0aCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFsnREVMRVRFJywgJ0JBQ0tTUEFDRScsICdUQUInLCAnRVNDQVBFJywgJ0VOVEVSJ10uaW5kZXhPZihldmVudC5rZXkudG9VcHBlckNhc2UoKSkgIT09IC0xIHx8XG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdDJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtDXG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdYJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBJyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQSAoTWFjKVxuICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQycgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK0MgKE1hYylcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ1gnICYmIGV2ZW50Lm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtYIChNYWMpXG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTkQnKSB8fFxuICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnSE9NRScpIHx8XG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBUlJPV0xFRlQnKSB8fFxuICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dSSUdIVCcpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG4iLCI8ZG8tY29udGFpbmVyLW91dGxldFxuICBbbmFtZV09XCJuYW1lXCIgW2xhYmVsXT1cImxhYmVsXCIgW25vbGFiZWxdPVwibm9sYWJlbFwiIFxuICBbY29sTGFiZWxdPVwiY29sTGFiZWxcIiBbY29sQ29udGVudF09XCJjb2xJbnB1dFwiXG4gIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtoYXNFcnJvcnNdPVwiaGFzRXJyb3JzXCJcbiAgW2Vycm9yTWVzc2FnZXNdPVwiZXJyb3JNZXNzYWdlc1wiIFtwYXJhbUVycm9yXT1cInBhcmFtRXJyb3JcIlxuICBbd2Fybk1lc3NhZ2VdPVwid2Fybk1lc3NhZ2VcIlxuICBbc2tlbGV0b25dPVwic2tlbGV0b25cIiBbc2hvd109XCJzaG93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20te3tjb2xJbnB1dH19XCIgKm5nSWY9XCIhc2tlbGV0b247IGVsc2UgY29udGVudHNrZWxldG9uXCI+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwie3t0eXBlfX1cIlxuICAgICAgaWQ9XCJ7e25hbWV9fVwiXG4gICAgICBbc3RlcF09XCJzdGVwXCJcbiAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5cIlxuICAgICAgW21pbkxlbmd0aF09XCJtaW5MZW5ndGhcIlxuICAgICAgW21heExlbmd0aF09XCJtYXhMZW5ndGhcIlxuICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgW21heF09XCJtYXhcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyID8gKHBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9ycyxcbiAgICAgICAgJ3N0YXR1cy1zdWNjZXNzJzogKGhhc1N1Y2Nlc3MgJiYgcmVxdWlyZWQpLFxuICAgICAgICAnaW5wdXQtY2Fwc2xvY2snOiBjYXBzbG9ja1xuICAgICAgfVwiXG4gICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGZvY3VzKT1cIm9uVG91Y2hlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAoa2V5cHJlc3MpPVwib25LZXlVcCgkZXZlbnQpXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgI2lucHV0IG5iSW5wdXQgZnVsbFdpZHRoPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX1cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdpbnB1dC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgJ3NrZWxldG9uJzogc2tlbGV0b25cbiAgICAgICAgfVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2RvLWNvbnRhaW5lci1vdXRsZXQ+Il19