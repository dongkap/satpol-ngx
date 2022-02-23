import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@angular/common";
import * as i4 from "./directive/currency.directive";
import * as i5 from "@nebular/theme";
import * as i6 from "@ngx-translate/core";
export class DoInputCurrencyComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    writeValue(value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    transform(value) {
        const { val, frac } = this.toNumber(value);
        const v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    }
    toNumber(value) {
        const [val = '', frac = ''] = (value || '').split(this.decimalSeparator);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val, frac: fraction };
    }
    pad(val, size) {
        while (val.length < size) {
            val = val + '0';
        }
        return val;
    }
}
DoInputCurrencyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputCurrencyComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputCurrencyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputCurrencyComponent, selector: "do-input-currency", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", prefix: "prefix", decimalSeparator: ["decimal", "decimalSeparator"], thousandsSeparator: ["thousand", "thousandsSeparator"], suffix: "suffix", padding: "padding" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.CurrencyMaskDirective, selector: "input[doCurrency]", inputs: ["prefix", "decimal", "thousand", "suffix", "padding"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i6.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputCurrencyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-currency',
                    styleUrls: ['./do-input-currency.component.scss'],
                    templateUrl: './do-input-currency.component.html',
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
            }], prefix: [{
                type: Input,
                args: ['prefix']
            }], decimalSeparator: [{
                type: Input,
                args: ['decimal']
            }], thousandsSeparator: [{
                type: Input,
                args: ['thousand']
            }], suffix: [{
                type: Input,
                args: ['suffix']
            }], padding: [{
                type: Input,
                args: ['padding']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW5wdXQvY3VycmVuY3kvZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW5wdXQvY3VycmVuY3kvZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7OztBQVE3RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsc0JBQThCO0lBWTFFLFlBQ3NCLFNBQW9CLEVBQ2QsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUNuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxDQUFDLENBQUM7SUFNdEMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJ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bmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9iYXNlL3ZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LWN1cnJlbmN5JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dEN1cnJlbmN5Q29tcG9uZW50IGV4dGVuZHMgVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTxzdHJpbmc+IHtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoJ3ByZWZpeCcpIHByZWZpeDogc3RyaW5nID0gJ1JwJztcbiAgQElucHV0KCdkZWNpbWFsJykgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID0gJy4nO1xuICBASW5wdXQoJ3Rob3VzYW5kJykgdGhvdXNhbmRzU2VwYXJhdG9yOiBzdHJpbmcgPSAnLCc7XG4gIEBJbnB1dCgnc3VmZml4Jykgc3VmZml4OiBzdHJpbmcgPSAnLC0nO1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlID8gdGhpcy50cmFuc2Zvcm0odmFsdWUpIDogdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHt2YWwsIGZyYWN9ID0gdGhpcy50b051bWJlcih2YWx1ZSk7XG4gICAgY29uc3QgdiA9IHZhbC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4LmNvbmNhdCgnICcpLmNvbmNhdCh2KS5jb25jYXQoZnJhYykuY29uY2F0KHRoaXMuc3VmZml4KTtcbiAgfVxuXG4gIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiB7dmFsOiBzdHJpbmcsIGZyYWM6IHN0cmluZ30ge1xuICAgIGNvbnN0IFsgdmFsID0gJycsIGZyYWMgPSAnJ10gPSAodmFsdWUgfHwgJycpLnNwbGl0KHRoaXMuZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgbGV0IGZyYWN0aW9uID0gJyc7XG4gICAgaWYgKGZyYWMpIHtcbiAgICAgIGlmIChwYXJzZUludChmcmFjLCAxMCkgPiAwKSB7XG4gICAgICAgIGZyYWN0aW9uID0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yICsgdGhpcy5wYWQoZnJhYywgdGhpcy5wYWRkaW5nKS5zdWJzdHJpbmcoMCwgdGhpcy5wYWRkaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt2YWwsIGZyYWM6IGZyYWN0aW9ufTtcbiAgfVxuXG4gIHByaXZhdGUgcGFkKHZhbCwgc2l6ZSk6IHN0cmluZyB7XG4gICAgd2hpbGUgKHZhbC5sZW5ndGggPCBzaXplKSB7IHZhbCA9IHZhbCArICcwJzsgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxufVxuIiwiPGRvLWNvbnRhaW5lci1vdXRsZXRcbiAgW25hbWVdPVwibmFtZVwiIFtsYWJlbF09XCJsYWJlbFwiIFtub2xhYmVsXT1cIm5vbGFiZWxcIiBcbiAgW2NvbExhYmVsXT1cImNvbExhYmVsXCIgW2NvbENvbnRlbnRdPVwiY29sSW5wdXRcIlxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbaGFzRXJyb3JzXT1cImhhc0Vycm9yc1wiXG4gIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIiBbcGFyYW1FcnJvcl09XCJwYXJhbUVycm9yXCJcbiAgW3dhcm5NZXNzYWdlXT1cIndhcm5NZXNzYWdlXCJcbiAgW3NrZWxldG9uXT1cInNrZWxldG9uXCIgW3Nob3ddPVwic2hvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fVwiICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIGNvbnRlbnRza2VsZXRvblwiPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgaWQ9XCJ7e25hbWV9fVwiXG4gICAgICBbbWluTGVuZ3RoXT1cIm1pbkxlbmd0aFwiXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgPyAocGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBza2VsZXRvblwiXG4gICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JzLFxuICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiAoaGFzU3VjY2VzcyAmJiByZXF1aXJlZClcbiAgICAgIH1cIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQudG9OdW1iZXIpXCJcbiAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC50b051bWJlcilcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudC50YXJnZXQudG9OdW1iZXIpXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgZG9DdXJyZW5jeVxuICAgICAgW3ByZWZpeF09XCJwcmVmaXhcIlxuICAgICAgW2RlY2ltYWxdPVwiZGVjaW1hbFNlcGFyYXRvclwiXG4gICAgICBbdGhvdXNhbmRdPVwidGhvdXNhbmRzU2VwYXJhdG9yXCJcbiAgICAgIFtzdWZmaXhdPVwic3VmZml4XCJcbiAgICAgIFtwYWRkaW5nXT1cInBhZGRpbmdcIlxuICAgICAgI2lucHV0IG5iSW5wdXQgZnVsbFdpZHRoPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX1cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdpbnB1dC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgJ3NrZWxldG9uJzogc2tlbGV0b25cbiAgICAgICAgfVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2RvLWNvbnRhaW5lci1vdXRsZXQ+Il19