import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-translate/core";
export class DoInputIconComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.buttontype = 'btn-primary';
        this.type = 'text';
        this.iconcursor = false;
        this.eva = false;
        this.icon = 'search-outline';
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
DoInputIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputIconComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputIconComponent, selector: "do-input-icon", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", buttontype: "buttontype", type: "type", iconcursor: "iconcursor", eva: "eva", icon: "icon" }, outputs: { clickIcon: "clickIcon", focus: "focus" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}\n"], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-icon',
                    styleUrls: ['./do-input-icon.component.scss'],
                    templateUrl: './do-input-icon.component.html',
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
            }], buttontype: [{
                type: Input
            }], type: [{
                type: Input
            }], iconcursor: [{
                type: Input
            }], eva: [{
                type: Input
            }], icon: [{
                type: Input
            }], clickIcon: [{
                type: Output
            }], focus: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9pbnB1dC9pY29uL2RvLWlucHV0LWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW5wdXQvaWNvbi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7O0FBUTdFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxzQkFBOEI7SUFjdEUsWUFDc0IsU0FBb0IsRUFDZCxNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZGpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZUFBVSxHQUFXLGFBQWEsQ0FBQztRQUNuQyxTQUFJLEdBQW1DLE1BQU0sQ0FBQztRQUM5QyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDckIsU0FBSSxHQUFXLGdCQUFnQixDQUFDO1FBQy9CLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3RCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFNN0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FBRTtJQUMzRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOztrSEEzQlUsb0JBQW9CLHVFQWdCckIsU0FBUztzR0FoQlIsb0JBQW9CLGlXQ1ZqQyw2b0RBOENzQjs0RkRwQ1Qsb0JBQW9CO2tCQU5oQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDN0MsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzswQkFnQkksUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLE1BQU07MkJBQUMsU0FBUzs0Q0FmVixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9iYXNlL3ZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LWljb24nLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dEljb25Db21wb25lbnQgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgpIGJ1dHRvbnR5cGU6IHN0cmluZyA9ICdidG4tcHJpbWFyeSc7XG4gIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcbiAgQElucHV0KCkgaWNvbmN1cnNvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBldmE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJ3NlYXJjaC1vdXRsaW5lJztcbiAgQE91dHB1dCgpIGNsaWNrSWNvbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIG9uQ2xpY2tJY29uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmljb25jdXJzb3IpIHsgdGhpcy5jbGlja0ljb24uZW1pdCh0aGlzLnZhbHVlKTsgfVxuICB9XG5cbiAgb25Gb2N1cyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cy5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uVG91Y2hlZCh2YWx1ZSk7XG4gIH1cbn1cbiIsIjxkby1jb250YWluZXItb3V0bGV0XG4gIFtuYW1lXT1cIm5hbWVcIiBbbGFiZWxdPVwibGFiZWxcIiBbbm9sYWJlbF09XCJub2xhYmVsXCJcbiAgW2NvbExhYmVsXT1cImNvbExhYmVsXCIgW2NvbENvbnRlbnRdPVwiY29sSW5wdXRcIlxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbaGFzRXJyb3JzXT1cImhhc0Vycm9yc1wiXG4gIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIiBbcGFyYW1FcnJvcl09XCJwYXJhbUVycm9yXCJcbiAgW3dhcm5NZXNzYWdlXT1cIndhcm5NZXNzYWdlXCJcbiAgW3NrZWxldG9uXT1cInNrZWxldG9uXCIgW3Nob3ddPVwic2hvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fSBpbnB1dC1ncm91cFwiICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIGNvbnRlbnRza2VsZXRvblwiPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInt7dHlwZX19XCJcbiAgICAgIGlkPVwie3tuYW1lfX1cIlxuICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXG4gICAgICBbbWluTGVuZ3RoXT1cIm1pbkxlbmd0aFwiXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyAocGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JzLFxuICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiAoaGFzU3VjY2VzcyAmJiByZXF1aXJlZClcbiAgICAgIH1cIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgI2lucHV0IG5iSW5wdXQgZnVsbFdpZHRoPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInhpbnB1dC1pY29uXCJcbiAgICAgICAgW25nU3R5bGVdPVwie1xuICAgICAgICAgICdjdXJzb3InOiBpY29uY3Vyc29yID8gJ3BvaW50ZXInIDogJ3Vuc2V0J1xuICAgICAgICB9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3tpY29ufX1cIiAqbmdJZj1cIiFldmFcIj48L3NwYW4+XG4gICAgICAgIDxuYi1pY29uIGNsYXNzPVwieGlucHV0LWljb24taG92ZXJcIiBpY29uPVwie3tpY29ufX1cIiAoY2xpY2spPVwib25DbGlja0ljb24oKVwiICpuZ0lmPVwiZXZhXCI+PC9uYi1pY29uPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnRza2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fVwiPlxuICAgICAgPGRpdlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ2lucHV0LXNrZWxldG9uJzogdHJ1ZSxcbiAgICAgICAgICAnc2tlbGV0b24nOiBza2VsZXRvblxuICAgICAgICB9XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZG8tY29udGFpbmVyLW91dGxldD4iXX0=