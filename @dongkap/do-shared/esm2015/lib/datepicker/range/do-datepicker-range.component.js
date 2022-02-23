import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { NbCalendarSize } from '@nebular/theme';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/common";
import * as i5 from "../../base/directive/text-mask.directive";
import * as i6 from "@ngx-translate/core";
export class DoDatePickerRangeComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.icon = false;
        this.size = NbCalendarSize.MEDIUM;
        this.dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/,
            ' ', '-', ' ',
            /[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];
    }
    get value() { return this._value; }
    set value(value) {
        if (value) {
            if (this._value !== value) {
                if ((value === null || value === void 0 ? void 0 : value.start) && (value === null || value === void 0 ? void 0 : value.end)) {
                    this._value = value;
                    this.onChange({
                        start: formatDate(value === null || value === void 0 ? void 0 : value.start, this.format, this.locale),
                        end: formatDate(value === null || value === void 0 ? void 0 : value.end, this.format, this.locale),
                    });
                    const control = this.ngControl.control;
                    if (control) {
                        control.updateValueAndValidity();
                        control.markAsTouched();
                        control.markAsDirty();
                    }
                }
                else {
                    this.enableError();
                }
            }
        }
        else {
            this.onChange(null);
            if (this.ngControl.control.hasError('daterange')) {
                this.disableError();
            }
        }
    }
    writeValue(value) {
        if (value) {
            const dates = {};
            const dateStart = new Date(this.parse(value === null || value === void 0 ? void 0 : value.start));
            const dateEnd = new Date(this.parse(value === null || value === void 0 ? void 0 : value.end));
            if (dateStart.getTime() < dateEnd.getTime()) {
                const startDateParse = this.parse(value === null || value === void 0 ? void 0 : value.start);
                if (!isNaN(Date.parse(startDateParse))) {
                    dates['start'] = new Date(startDateParse);
                }
                const endDateParse = this.parse(value === null || value === void 0 ? void 0 : value.end);
                if (!isNaN(Date.parse(endDateParse))) {
                    dates['end'] = new Date(endDateParse);
                }
                this._value = dates;
                this.onChange(dates);
            }
        }
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
    onTyped(value) {
        if (value) {
            if (value.includes(' - ')) {
                const arr = value.split(' - ');
                const dateStart = new Date(this.parse(arr[0]));
                const dateEnd = new Date(this.parse(arr[1]));
                if (dateStart.getTime() <= dateEnd.getTime()) {
                    this.onChange({
                        start: formatDate(dateStart, this.format, this.locale),
                        end: formatDate(dateEnd, this.format, this.locale),
                    });
                }
                else {
                    this.enableError();
                }
            }
            else {
                this.enableError();
            }
        }
        else {
            if (this.ngControl.control.hasError('daterange')) {
                this.disableError();
            }
        }
    }
    enableError() {
        this.ngControl.control.setErrors({ daterange: true });
    }
    disableError() {
        this.ngControl.control.setErrors({ daterange: false });
        this.ngControl.control.updateValueAndValidity();
    }
    /**
     * Parsing from String to Date, not return format date
     */
    parse(value) {
        const year = String(value).split('/')[2];
        const month = String(value).split('/')[1];
        const day = String(value).split('/')[0];
        return year + '/' + month + '/' + day;
    }
}
DoDatePickerRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerRangeComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoDatePickerRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", icon: "icon", min: "min", max: "max", size: "size", dateMask: "dateMask" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [do-mask]=\"{mask: dateMask, guide: false}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onTyped($event.target.value)\"\n      (change)=\"onTyped($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"rangepicker\"\n      #input nbInput fullWidth>\n      <nb-rangepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        #rangepicker>\n      </nb-rangepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3.NbRangepickerComponent, selector: "nb-rangepicker", inputs: ["range"], outputs: ["rangeChange"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i5.MaskedInputDirective, selector: "[do-mask]", inputs: ["do-mask"], exportAs: ["do-mask"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerRangeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datepicker-range',
                    styleUrls: ['./do-datepicker-range.component.scss'],
                    templateUrl: './do-datepicker-range.component.html',
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
            }], icon: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }], dateMask: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9kYXRlcGlja2VyL3JhbmdlL2RvLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvZGF0ZXBpY2tlci9yYW5nZS9kby1kYXRlcGlja2VyLXJhbmdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7OztBQU83RSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsc0JBQTJCO0lBWXZFLFlBQ3NCLFNBQW9CLEVBQ2QsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUd0QixTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDN0MsYUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNq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RUFjekIsU0FBUzs0R0FkViwwQkFBMEIsZ1BDbEJ2Qyw2MkNBd0NzQjs0RkR0QlQsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO29CQUNuRCxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRDs7MEJBY00sUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLE1BQU07MkJBQUMsU0FBUzs0Q0FiVixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBJbmplY3QsXG4gIExPQ0FMRV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclNpemUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vYmFzZS92YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1kYXRlcGlja2VyLXJhbmdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERvRGF0ZVBpY2tlclJhbmdlQ29tcG9uZW50IGV4dGVuZHMgVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTxhbnk+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIGljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBtaW46IERhdGU7XG4gICAgQElucHV0KCkgbWF4OiBEYXRlO1xuICAgIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICAgIEBJbnB1dCgpIGRhdGVNYXNrID0gWy9bMC0zXS8sIC9cXGQvLCAnLycsIC9bMC0xXS8sIC9cXGQvLCAnLycsIC9bMS0zXS8sIC9cXGQvLCAvXFxkLywgL1xcZC8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgJyAnLCAnLScsICcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAvWzAtM10vLCAvXFxkLywgJy8nLCAvWzAtMV0vLCAvXFxkLywgJy8nLCAvWzEtM10vLCAvXFxkLywgL1xcZC8sIC9cXGQvXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWU/LnN0YXJ0ICYmIHZhbHVlPy5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgc3RhcnQ6IGZvcm1hdERhdGUodmFsdWU/LnN0YXJ0LCB0aGlzLmZvcm1hdCwgdGhpcy5sb2NhbGUpLFxuICAgICAgICAgICAgICBlbmQ6IGZvcm1hdERhdGUodmFsdWU/LmVuZCwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC5oYXNFcnJvcignZGF0ZXJhbmdlJykpIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGVzOiBhbnkgPSB7fTtcbiAgICAgICAgY29uc3QgZGF0ZVN0YXJ0OiBEYXRlID0gbmV3IERhdGUodGhpcy5wYXJzZSh2YWx1ZT8uc3RhcnQpKTtcbiAgICAgICAgY29uc3QgZGF0ZUVuZDogRGF0ZSA9IG5ldyBEYXRlKHRoaXMucGFyc2UodmFsdWU/LmVuZCkpO1xuICAgICAgICBpZiAoZGF0ZVN0YXJ0LmdldFRpbWUoKSA8IGRhdGVFbmQuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnREYXRlUGFyc2U6IHN0cmluZyA9IHRoaXMucGFyc2UodmFsdWU/LnN0YXJ0KTtcbiAgICAgICAgICBpZiAoIWlzTmFOKERhdGUucGFyc2Uoc3RhcnREYXRlUGFyc2UpKSkge1xuICAgICAgICAgICAgZGF0ZXNbJ3N0YXJ0J10gPSBuZXcgRGF0ZShzdGFydERhdGVQYXJzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGVuZERhdGVQYXJzZTogc3RyaW5nID0gdGhpcy5wYXJzZSh2YWx1ZT8uZW5kKTtcbiAgICAgICAgICBpZiAoIWlzTmFOKERhdGUucGFyc2UoZW5kRGF0ZVBhcnNlKSkpIHtcbiAgICAgICAgICAgIGRhdGVzWydlbmQnXSA9IG5ldyBEYXRlKGVuZERhdGVQYXJzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZGF0ZXM7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZShkYXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UeXBlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcgLSAnKSkge1xuICAgICAgICAgIGNvbnN0IGFycjogYW55W10gPSB2YWx1ZS5zcGxpdCgnIC0gJyk7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0OiBEYXRlID0gbmV3IERhdGUodGhpcy5wYXJzZShhcnJbMF0pKTtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kOiBEYXRlID0gbmV3IERhdGUodGhpcy5wYXJzZShhcnJbMV0pKTtcbiAgICAgICAgICBpZiAoZGF0ZVN0YXJ0LmdldFRpbWUoKSA8PSBkYXRlRW5kLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgIHN0YXJ0OiBmb3JtYXREYXRlKGRhdGVTdGFydCwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKSxcbiAgICAgICAgICAgICAgZW5kOiBmb3JtYXREYXRlKGRhdGVFbmQsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgdGhpcy5lbmFibGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC5oYXNFcnJvcignZGF0ZXJhbmdlJykpIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmFibGVFcnJvcigpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0RXJyb3JzKHsgZGF0ZXJhbmdlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGlzYWJsZUVycm9yKCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMoeyBkYXRlcmFuZ2U6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2luZyBmcm9tIFN0cmluZyB0byBEYXRlLCBub3QgcmV0dXJuIGZvcm1hdCBkYXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBwYXJzZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHllYXI6IHN0cmluZyA9IFN0cmluZyh2YWx1ZSkuc3BsaXQoJy8nKVsyXTtcbiAgICAgIGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBTdHJpbmcodmFsdWUpLnNwbGl0KCcvJylbMV07XG4gICAgICBjb25zdCBkYXk6IHN0cmluZyA9IFN0cmluZyh2YWx1ZSkuc3BsaXQoJy8nKVswXTtcbiAgICAgIHJldHVybiB5ZWFyICsgJy8nICsgbW9udGggKyAnLycgKyBkYXk7XG4gICAgfVxufVxuIiwiPGRvLWNvbnRhaW5lci1vdXRsZXRcbiAgW25hbWVdPVwibmFtZVwiIFtsYWJlbF09XCJsYWJlbFwiIFtub2xhYmVsXT1cIm5vbGFiZWxcIiBcbiAgW2NvbExhYmVsXT1cImNvbExhYmVsXCIgW2NvbENvbnRlbnRdPVwiY29sSW5wdXRcIlxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbaGFzRXJyb3JzXT1cImhhc0Vycm9yc1wiXG4gIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIiBbcGFyYW1FcnJvcl09XCJwYXJhbUVycm9yXCJcbiAgW3dhcm5NZXNzYWdlXT1cIndhcm5NZXNzYWdlXCJcbiAgW3NrZWxldG9uXT1cInNrZWxldG9uXCIgW3Nob3ddPVwic2hvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fVwiICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIGNvbnRlbnRza2VsZXRvblwiPlxuICAgIDxpbnB1dFxuICAgICAgaWQ9XCJ7e25hbWV9fVwiXG4gICAgICBbZG8tbWFza109XCJ7bWFzazogZGF0ZU1hc2ssIGd1aWRlOiBmYWxzZX1cIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyID8gKHBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgc2tlbGV0b25cIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9ycyxcbiAgICAgICAgJ3N0YXR1cy1zdWNjZXNzJzogaGFzU3VjY2Vzc1xuICAgICAgfVwiXG4gICAgICAoaW5wdXQpPVwib25UeXBlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoY2hhbmdlKT1cIm9uVHlwZWQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgW25iRGF0ZXBpY2tlcl09XCJyYW5nZXBpY2tlclwiXG4gICAgICAjaW5wdXQgbmJJbnB1dCBmdWxsV2lkdGg+XG4gICAgICA8bmItcmFuZ2VwaWNrZXJcbiAgICAgICAgW2Zvcm1hdF09XCJmb3JtYXRcIlxuICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgI3JhbmdlcGlja2VyPlxuICAgICAgPC9uYi1yYW5nZXBpY2tlcj5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjY29udGVudHNrZWxldG9uPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20te3tjb2xJbnB1dH19XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAnaW5wdXQtc2tlbGV0b24nOiB0cnVlLFxuICAgICAgICAgICdza2VsZXRvbic6IHNrZWxldG9uXG4gICAgICAgIH1cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kby1jb250YWluZXItb3V0bGV0PiJdfQ==