import { Component, Inject, Input } from '@angular/core';
import { API } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@nebular/theme";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@ngx-translate/core";
export class EmployeeEducationNonFormalPromptComponent {
    constructor(api, formBuilder, ref) {
        this.ref = ref;
        this.action = 'Add';
        this.formGroup = formBuilder.group({
            trainingName: [],
            trainingDate: [],
        });
    }
    ngOnInit() {
        if (this.training) {
            this.action = 'Edit';
            this.formGroup.get('trainingName').setValue(this.training.name);
            this.formGroup.get('trainingDate').setValue({
                start: this.training.startDate,
                end: this.training.endDate,
            });
        }
        else {
            this.action = 'Add';
        }
    }
    onSubmit() {
        var _a, _b, _c;
        const data = {
            training: {
                id: (_a = this.training) === null || _a === void 0 ? void 0 : _a.id,
                name: this.formGroup.get('trainingName').value,
                startDate: (_b = this.formGroup.get('trainingDate').value) === null || _b === void 0 ? void 0 : _b.start,
                endDate: (_c = this.formGroup.get('trainingDate').value) === null || _c === void 0 ? void 0 : _c.end,
            }
        };
        this.ref.close(data);
    }
    onReset() {
        this.ref.close();
    }
}
EmployeeEducationNonFormalPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEducationNonFormalPromptComponent, deps: [{ token: API }, { token: i1.FormBuilder }, { token: i2.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEducationNonFormalPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEducationNonFormalPromptComponent, selector: "do-education-nonformal-prompt", inputs: { training: "training" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-nonformal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-input-text\n            [name]=\"'trainingName'\"\n            [label]=\"'Training Name'\"\n            [required]=\"true\"\n            [placeholder]=\"'Training Name'\"\n            formControlName=\"trainingName\">\n          </do-input-text>\n          <do-datepicker-range\n            [name]=\"'trainingDate'\"\n            [label]=\"'Training Date'\"\n            [placeholder]=\"'Training Date'\"\n            formControlName=\"trainingDate\">\n          </do-datepicker-range>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i2.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }, { type: i2.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i4.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEducationNonFormalPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-education-nonformal-prompt',
                    templateUrl: 'education-nonformal-prompt.component.html',
                    styleUrls: ['education-nonformal-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i1.FormBuilder }, { type: i2.NbDialogRef }]; }, propDecorators: { training: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLW5vbmZvcm1hbC1wcm9tcHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvZWRpdC9lZHVjYXRpb24vcHJvbXB0LW5vbmZvcm1hbC9lZHVjYXRpb24tbm9uZm9ybWFsLXByb21wdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9lbXBsb3llZS9lZGl0L2VkdWNhdGlvbi9wcm9tcHQtbm9uZm9ybWFsL2VkdWNhdGlvbi1ub25mb3JtYWwtcHJvbXB0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdqRSxPQUFPLEVBQUUsR0FBRyxFQUFZLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQU9qRCxNQUFNLE9BQU8seUNBQXlDO0lBTXBELFlBQ2UsR0FBYSxFQUMxQixXQUF3QixFQUNkLEdBQTJEO1FBQTNELFFBQUcsR0FBSCxHQUFHLENBQXdEO1FBTmhFLFdBQU0sR0FBbUIsS0FBSyxDQUFDO1FBT2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqQyxZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Z0JBQzlCLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFFBQVE7O1FBQ04sTUFBTSxJQUFJLEdBQVE7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLEVBQUU7Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLO2dCQUM5QyxTQUFTLEVBQUUsTUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLDBDQUFFLEtBQUs7Z0JBQzFELE9BQU8sRUFBRSxNQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssMENBQUUsR0FBRzthQUN2RDtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7dUlBM0NVLHlDQUF5QyxrQkFPMUMsR0FBRzsySEFQRix5Q0FBeUMsdUdDVnRELHluQ0FtQ0E7NEZEekJhLHlDQUF5QztrQkFMckQsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxXQUFXLEVBQUUsMkNBQTJDO29CQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztpQkFDekQ7OzBCQVFJLE1BQU07MkJBQUMsR0FBRztnR0FMRyxRQUFRO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFQSSwgQVBJTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZWR1Y2F0aW9uLW5vbmZvcm1hbC1wcm9tcHQnLFxuICB0ZW1wbGF0ZVVybDogJ2VkdWNhdGlvbi1ub25mb3JtYWwtcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2VkdWNhdGlvbi1ub25mb3JtYWwtcHJvbXB0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRWR1Y2F0aW9uTm9uRm9ybWFsUHJvbXB0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgdHJhaW5pbmc6IGFueTtcbiAgcHVibGljIGFjdGlvbjogJ0FkZCcgfCAnRWRpdCcgPSAnQWRkJztcbiAgcHVibGljIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQVBJKSBhcGk6IEFQSU1vZGVsLFxuICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgcmVmOiBOYkRpYWxvZ1JlZjxFbXBsb3llZUVkdWNhdGlvbk5vbkZvcm1hbFByb21wdENvbXBvbmVudD4pIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICB0cmFpbmluZ05hbWU6IFtdLFxuICAgICAgICB0cmFpbmluZ0RhdGU6IFtdLFxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmFpbmluZykge1xuICAgICAgdGhpcy5hY3Rpb24gPSAnRWRpdCc7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3RyYWluaW5nTmFtZScpLnNldFZhbHVlKHRoaXMudHJhaW5pbmcubmFtZSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3RyYWluaW5nRGF0ZScpLnNldFZhbHVlKHtcbiAgICAgICAgc3RhcnQ6IHRoaXMudHJhaW5pbmcuc3RhcnREYXRlLFxuICAgICAgICBlbmQ6IHRoaXMudHJhaW5pbmcuZW5kRGF0ZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdBZGQnO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIHRyYWluaW5nOiB7XG4gICAgICAgIGlkOiB0aGlzLnRyYWluaW5nPy5pZCxcbiAgICAgICAgbmFtZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCd0cmFpbmluZ05hbWUnKS52YWx1ZSxcbiAgICAgICAgc3RhcnREYXRlOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3RyYWluaW5nRGF0ZScpLnZhbHVlPy5zdGFydCxcbiAgICAgICAgZW5kRGF0ZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCd0cmFpbmluZ0RhdGUnKS52YWx1ZT8uZW5kLFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZWYuY2xvc2UoZGF0YSk7XG4gIH1cblxuICBvblJlc2V0KCkge1xuICAgIHRoaXMucmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIiwiPG5iLWNhcmQgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gIDxuYi1jYXJkLWhlYWRlcj5cbiAgICB7eyAnaGVhZGVyLicrYWN0aW9uKyctZWR1Y2F0aW9uLW5vbmZvcm1hbCcgfCB0cmFuc2xhdGUgfX1cbiAgPC9uYi1jYXJkLWhlYWRlcj5cbiAgPG5iLWNhcmQtYm9keT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIGF1dG9jb21wbGV0ZT1cIm9uXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cbiAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgW25hbWVdPVwiJ3RyYWluaW5nTmFtZSdcIlxuICAgICAgICAgICAgW2xhYmVsXT1cIidUcmFpbmluZyBOYW1lJ1wiXG4gICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ1RyYWluaW5nIE5hbWUnXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRyYWluaW5nTmFtZVwiPlxuICAgICAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgICAgICA8ZG8tZGF0ZXBpY2tlci1yYW5nZVxuICAgICAgICAgICAgW25hbWVdPVwiJ3RyYWluaW5nRGF0ZSdcIlxuICAgICAgICAgICAgW2xhYmVsXT1cIidUcmFpbmluZyBEYXRlJ1wiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ1RyYWluaW5nIERhdGUnXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRyYWluaW5nRGF0ZVwiPlxuICAgICAgICAgIDwvZG8tZGF0ZXBpY2tlci1yYW5nZT5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1ib2R5PlxuICA8bmItY2FyZC1mb290ZXI+XG4gICAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICAgIFtzdWJtaXRUaXRsZV09XCJhY3Rpb25cIlxuICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgW2Zvcm1Hcm91cEJ1dHRvbl09XCJmb3JtR3JvdXBcIlxuICAgICAgKG9uUmVzZXQpPVwib25SZXNldCgpXCJcbiAgICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgPC9kby1idXR0b24tc3VibWl0PlxuICA8L25iLWNhcmQtZm9vdGVyPlxuPC9uYi1jYXJkPlxuIl19