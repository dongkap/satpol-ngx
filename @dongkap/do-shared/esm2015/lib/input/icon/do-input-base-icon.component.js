import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@nebular/theme";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
export class DoInputBaseIconComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.minLength = 0;
        this.maxLength = 100;
        this.iconcursor = false;
        this.icon = 'search-outline';
        this.buttontype = 'btn-primary';
        this.type = 'text';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    onClickIcon() {
        if (this.iconcursor) {
            this.clickIcon.emit(this.value);
        }
    }
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
DoInputBaseIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputBaseIconComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputBaseIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputBaseIconComponent, selector: "do-input-base-icon", inputs: { placeholder: "placeholder", minLength: "minLength", maxLength: "maxLength", iconcursor: "iconcursor", icon: "icon", buttontype: "buttontype", type: "type" }, outputs: { clickIcon: "clickIcon", focus: "focus" }, usesInheritance: true, ngImport: i0, template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n", styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i4.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputBaseIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-base-icon',
                    styleUrls: ['./do-input-base-icon.component.scss'],
                    templateUrl: './do-input-base-icon.component.html',
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
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], iconcursor: [{
                type: Input
            }], icon: [{
                type: Input
            }], buttontype: [{
                type: Input
            }], type: [{
                type: Input
            }], clickIcon: [{
                type: Output
            }], focus: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2lucHV0L2ljb24vZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2lucHV0L2ljb24vZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7QUFRN0UsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUE4QjtJQVcxRSxZQUNzQixTQUFvQixFQUNkLE1BQWM7UUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYakMsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsU0FBSSxHQUFXLGdCQUFnQixDQUFDO1FBQ2hDLGVBQVUsR0FBVyxhQUFhLENBQUM7UUFDbkMsU0FBSSxHQUFtQyxNQUFNLENBQUM7UUFDN0MsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU03RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFFO0lBQzNELENBQUM7SUFFRCxPQUFPLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O3NIQXhCVSx3QkFBd0IsdUVBYXpCLFNBQVM7MEdBYlIsd0JBQXdCLDhTQ1ZyQyx3MkJBNEJBOzRGRGxCYSx3QkFBd0I7a0JBTnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7b0JBQ2xELFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBYUksUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLE1BQU07MkJBQUMsU0FBUzs0Q0FaVixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vYmFzZS92YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1pbnB1dC1iYXNlLWljb24nLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvSW5wdXRCYXNlSWNvbkNvbXBvbmVudCBleHRlbmRzIFZhbHVlQWNjZXNzb3JEaXJlY3RpdmU8c3RyaW5nPiB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgpIGljb25jdXJzb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJ3NlYXJjaC1vdXRsaW5lJztcbiAgQElucHV0KCkgYnV0dG9udHlwZTogc3RyaW5nID0gJ2J0bi1wcmltYXJ5JztcbiAgQElucHV0KCkgdHlwZTogJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInID0gJ3RleHQnO1xuICBAT3V0cHV0KCkgY2xpY2tJY29uOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgb25DbGlja0ljb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaWNvbmN1cnNvcikgeyB0aGlzLmNsaWNrSWNvbi5lbWl0KHRoaXMudmFsdWUpOyB9XG4gIH1cblxuICBvbkZvY3VzKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQodmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaGVkKHZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gIDxpbnB1dFxuICAgIHR5cGU9XCJ7e3R5cGV9fVwiXG4gICAgaWQ9XCJ7e25hbWV9fVwiXG4gICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXG4gICAgW21pbkxlbmd0aF09XCJtaW5MZW5ndGhcIlxuICAgIFttYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyAocGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbmdDbGFzc109XCJ7XG4gICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9ycyxcbiAgICAgICdzdGF0dXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3NcbiAgICB9XCJcbiAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICNpbnB1dCBuYklucHV0IGZ1bGxXaWR0aD5cbiAgPGRpdlxuICAgIGNsYXNzPVwiaW5wdXQtaWNvblwiXG4gICAgW25nU3R5bGVdPVwie1xuICAgICAgJ2N1cnNvcic6IGljb25jdXJzb3IgPyAncG9pbnRlcicgOiAndW5zZXQnXG4gICAgfVwiPlxuICAgIDxuYi1pY29uIGNsYXNzPVwiaW5wdXQtaWNvbi1ob3ZlclwiIGljb249XCJ7e2ljb259fVwiIChjbGljayk9XCJvbkNsaWNrSWNvbigpXCI+PC9uYi1pY29uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19