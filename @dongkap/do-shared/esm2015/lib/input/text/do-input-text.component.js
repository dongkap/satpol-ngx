import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/common";
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
        this.togglePassword = false;
        this.showPassword = false;
        this.icon = 'eye-outline';
    }
    onInit() {
        if (this.type === 'password') {
            this.togglePassword = true;
        }
    }
    onShowPassword() {
        this.showPassword = !this.showPassword;
        this.icon = this.showPassword ? 'eye-off-outline' : 'eye-outline';
        this.type = this.showPassword ? 'text' : 'password';
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
DoInputTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputTextComponent, selector: "do-input-text", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", min: "min", max: "max", step: "step", capslock: "capslock", type: "type", togglePassword: "togglePassword", showPassword: "showPassword" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div class=\"input-icon\" *ngIf=\"togglePassword\">\n        <nb-icon [options]=\"{ animation: { type: 'zoom' } }\" class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onShowPassword()\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:.7rem 1.7rem}.input-icon-hover:hover{color:#598bff;cursor:pointer}.input-capslock{text-transform:uppercase}\n"], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
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
            }], togglePassword: [{
                type: Input
            }], showPassword: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9pbnB1dC90ZXh0L2RvLWlucHV0LXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW5wdXQvdGV4dC9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7OztBQVE3RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsc0JBQThCO0lBZXRFLFlBQ3NCLFNBQW9CLEVBQ2QsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWZqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQUNsQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFtQyxNQUFNLENBQUM7UUFDOUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDaEMsU0FBSSxHQUFXLGFBQWEsQ0FBQztJQU1wQyxDQUFDO0lBRUQsTUFBTTtRQUNK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Q0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUU7d0JBQzFDLE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNELE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztrSEF4RVUsb0JBQW9CLHVFQWlCckIsU0FBUztzR0FqQlIsb0JBQW9CLDBWQ1ZqQyxpdURBK0NzQjs0RkRyQ1Qsb0JBQW9CO2tCQU5oQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDN0MsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzswQkFpQkksUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLE1BQU07MkJBQUMsU0FBUzs0Q0FoQlYsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9iYXNlL3ZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LXRleHQnLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dFRleHRDb21wb25lbnQgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgPSA5OTk7XG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIGNhcHNsb2NrOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcbiAgQElucHV0KCkgdG9nZ2xlUGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1Bhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnZXllLW91dGxpbmUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIG9uSW5pdCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhc3N3b3JkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvblNob3dQYXNzd29yZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZDtcbiAgICB0aGlzLmljb24gPSB0aGlzLnNob3dQYXNzd29yZCA/ICdleWUtb2ZmLW91dGxpbmUnIDogICdleWUtb3V0bGluZSc7XG4gICAgdGhpcy50eXBlID0gdGhpcy5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAgJ3Bhc3N3b3JkJztcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYXBzbG9jaykge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnRScpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGVwID49IDEgJiYgZXZlbnQua2V5ID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWluID49IDAgJiYgZXZlbnQua2V5ID09PSAnLScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID49IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgWydERUxFVEUnLCAnQkFDS1NQQUNFJywgJ1RBQicsICdFU0NBUEUnLCAnRU5URVInXS5pbmRleE9mKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSAhPT0gLTEgfHxcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0EnICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0FcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0MnICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ1gnICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1hcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0EnICYmIGV2ZW50Lm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtBIChNYWMpXG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdDJyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQyAoTWFjKVxuICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnWCcgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK1ggKE1hYylcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0VORCcpIHx8XG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdIT01FJykgfHxcbiAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0FSUk9XTEVGVCcpIHx8XG4gICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBUlJPV1JJR0hUJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cbiIsIjxkby1jb250YWluZXItb3V0bGV0XG4gIFtuYW1lXT1cIm5hbWVcIiBbbGFiZWxdPVwibGFiZWxcIiBbbm9sYWJlbF09XCJub2xhYmVsXCIgXG4gIFtjb2xMYWJlbF09XCJjb2xMYWJlbFwiIFtjb2xDb250ZW50XT1cImNvbElucHV0XCJcbiAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2hhc0Vycm9yc109XCJoYXNFcnJvcnNcIlxuICBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCIgW3BhcmFtRXJyb3JdPVwicGFyYW1FcnJvclwiXG4gIFt3YXJuTWVzc2FnZV09XCJ3YXJuTWVzc2FnZVwiXG4gIFtza2VsZXRvbl09XCJza2VsZXRvblwiIFtzaG93XT1cInNob3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX0gaW5wdXQtZ3JvdXBcIiAqbmdJZj1cIiFza2VsZXRvbjsgZWxzZSBjb250ZW50c2tlbGV0b25cIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ7e3R5cGV9fVwiXG4gICAgICBpZD1cInt7bmFtZX19XCJcbiAgICAgIFtzdGVwXT1cInN0ZXBcIlxuICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXG4gICAgICBbbWluTGVuZ3RoXT1cIm1pbkxlbmd0aFwiXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyAocGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JzLFxuICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiAoaGFzU3VjY2VzcyAmJiByZXF1aXJlZCksXG4gICAgICAgICdpbnB1dC1jYXBzbG9jayc6IGNhcHNsb2NrXG4gICAgICB9XCJcbiAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoZm9jdXMpPVwib25Ub3VjaGVkKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChrZXlwcmVzcyk9XCJvbktleVVwKCRldmVudClcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAjaW5wdXQgbmJJbnB1dCBmdWxsV2lkdGg+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtaWNvblwiICpuZ0lmPVwidG9nZ2xlUGFzc3dvcmRcIj5cbiAgICAgICAgPG5iLWljb24gW29wdGlvbnNdPVwieyBhbmltYXRpb246IHsgdHlwZTogJ3pvb20nIH0gfVwiIGNsYXNzPVwiaW5wdXQtaWNvbi1ob3ZlclwiIGljb249XCJ7e2ljb259fVwiIChjbGljayk9XCJvblNob3dQYXNzd29yZCgpXCI+PC9uYi1pY29uPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnRza2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fVwiPlxuICAgICAgPGRpdlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ2lucHV0LXNrZWxldG9uJzogdHJ1ZSxcbiAgICAgICAgICAnc2tlbGV0b24nOiBza2VsZXRvblxuICAgICAgICB9XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZG8tY29udGFpbmVyLW91dGxldD4iXX0=