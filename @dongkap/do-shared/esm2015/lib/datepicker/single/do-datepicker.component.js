import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { NbCalendarSize } from '@nebular/theme';
import { DatePattern } from '@dongkap/do-core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@nebular/theme";
import * as i3 from "../../base/container-outlet/do-container-outlet.component";
import * as i4 from "@angular/common";
import * as i5 from "../../base/directive/text-mask.directive";
import * as i6 from "@ngx-translate/core";
export class DoDatePickerComponent extends ValueAccessorDirective {
    constructor(ngControl, dateService, locale) {
        super(ngControl, locale);
        this.dateService = dateService;
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.size = NbCalendarSize.MEDIUM;
        this.dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];
        this.pattern = DatePattern.SLASH_DDMMYYYY;
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(formatDate(value, this.format, this.locale));
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    writeValue(value) {
        let date = null;
        if (value) {
            if (String(value).match(this.pattern)) {
                const dateParse = this.parse(value);
                if (!isNaN(Date.parse(dateParse))) {
                    date = new Date(dateParse);
                }
            }
            this._value = date;
            this.onChange(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        }
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
DoDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.NbDateService }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatePickerComponent, selector: "do-datepicker", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", min: "min", max: "max", size: "size", dateMask: "dateMask" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [do-mask]=\"{mask: dateMask, guide: false}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"dodatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #dodatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: i3.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i5.MaskedInputDirective, selector: "[do-mask]", inputs: ["do-mask"], exportAs: ["do-mask"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datepicker',
                    styleUrls: ['./do-datepicker.component.scss'],
                    templateUrl: './do-datepicker.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i2.NbDateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9kYXRlcGlja2VyL3NpbmdsZS9kby1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2RhdGVwaWNrZXIvc2luZ2xlL2RvLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFpQixNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7QUFPN0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHNCQUE0QjtJQVNuRSxZQUNzQixTQUFvQixFQUNqQyxXQUFnQyxFQUNiLE1BQWM7UUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZsQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVmpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDN0MsYUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVB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QUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJDYWxlbmRhclNpemUsIE5iRGF0ZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEYXRlUGF0dGVybiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Jhc2UvdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZGF0ZXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL2RvLWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlPERhdGU+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIG1pbjogRGF0ZTtcbiAgICBASW5wdXQoKSBtYXg6IERhdGU7XG4gICAgQElucHV0KCkgc2l6ZTogTmJDYWxlbmRhclNpemUgPSBOYkNhbGVuZGFyU2l6ZS5NRURJVU07XG4gICAgQElucHV0KCkgZGF0ZU1hc2sgPSBbL1swLTNdLywgL1xcZC8sICcvJywgL1swLTFdLywgL1xcZC8sICcvJywgL1sxLTNdLywgL1xcZC8sIC9cXGQvLCAvXFxkL107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBwdWJsaWMgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RGF0ZT4sXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgICB0aGlzLnBhdHRlcm4gPSBEYXRlUGF0dGVybi5TTEFTSF9ERE1NWVlZWTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogRGF0ZSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGxldCBkYXRlOiBEYXRlID0gbnVsbDtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAoU3RyaW5nKHZhbHVlKS5tYXRjaCh0aGlzLnBhdHRlcm4pKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZVBhcnNlOiBzdHJpbmcgPSB0aGlzLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICBpZiAoIWlzTmFOKERhdGUucGFyc2UoZGF0ZVBhcnNlKSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlUGFyc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92YWx1ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNpbmcgZnJvbSBTdHJpbmcgdG8gRGF0ZSwgbm90IHJldHVybiBmb3JtYXQgZGF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgcGFyc2UodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICBjb25zdCB5ZWFyOiBzdHJpbmcgPSBTdHJpbmcodmFsdWUpLnNwbGl0KCcvJylbMl07XG4gICAgICBjb25zdCBtb250aDogc3RyaW5nID0gU3RyaW5nKHZhbHVlKS5zcGxpdCgnLycpWzFdO1xuICAgICAgY29uc3QgZGF5OiBzdHJpbmcgPSBTdHJpbmcodmFsdWUpLnNwbGl0KCcvJylbMF07XG4gICAgICByZXR1cm4geWVhciArICcvJyArIG1vbnRoICsgJy8nICsgZGF5O1xuICAgIH1cbn1cbiIsIjxkby1jb250YWluZXItb3V0bGV0XG4gIFtuYW1lXT1cIm5hbWVcIiBbbGFiZWxdPVwibGFiZWxcIiBbbm9sYWJlbF09XCJub2xhYmVsXCIgXG4gIFtjb2xMYWJlbF09XCJjb2xMYWJlbFwiIFtjb2xDb250ZW50XT1cImNvbElucHV0XCJcbiAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2hhc0Vycm9yc109XCJoYXNFcnJvcnNcIlxuICBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCIgW3BhcmFtRXJyb3JdPVwicGFyYW1FcnJvclwiXG4gIFt3YXJuTWVzc2FnZV09XCJ3YXJuTWVzc2FnZVwiXG4gIFtza2VsZXRvbl09XCJza2VsZXRvblwiIFtzaG93XT1cInNob3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX1cIiAqbmdJZj1cIiFza2VsZXRvbjsgZWxzZSBjb250ZW50c2tlbGV0b25cIj5cbiAgICA8aW5wdXRcbiAgICAgIGlkPVwie3tuYW1lfX1cIlxuICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXG4gICAgICBbZG8tbWFza109XCJ7bWFzazogZGF0ZU1hc2ssIGd1aWRlOiBmYWxzZX1cIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyID8gKHBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgc2tlbGV0b25cIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9ycyxcbiAgICAgICAgJ3N0YXR1cy1zdWNjZXNzJzogaGFzU3VjY2Vzc1xuICAgICAgfVwiXG4gICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICBbbmJEYXRlcGlja2VyXT1cImRvZGF0ZXBpY2tlclwiXG4gICAgICAjaW5wdXQgbmJJbnB1dCBmdWxsV2lkdGg+XG4gICAgICA8bmItZGF0ZXBpY2tlclxuICAgICAgICBbZm9ybWF0XT1cImZvcm1hdFwiXG4gICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgI2RvZGF0ZXBpY2tlcj5cbiAgICAgIDwvbmItZGF0ZXBpY2tlcj5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjY29udGVudHNrZWxldG9uPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20te3tjb2xJbnB1dH19XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAnaW5wdXQtc2tlbGV0b24nOiB0cnVlLFxuICAgICAgICAgICdza2VsZXRvbic6IHNrZWxldG9uXG4gICAgICAgIH1cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kby1jb250YWluZXItb3V0bGV0PiJdfQ==