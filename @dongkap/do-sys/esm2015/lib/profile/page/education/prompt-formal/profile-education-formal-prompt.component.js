import { Component, Inject, Input } from '@angular/core';
import { API } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@nebular/theme";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@ngx-translate/core";
export class EmployeeProfileEducationFormalPromptComponent {
    constructor(api, formBuilder, ref) {
        this.ref = ref;
        this.action = 'Add';
        this.formGroup = formBuilder.group({
            educationalLevel: [],
            school: [],
            startYear: [],
            endYear: [],
        });
        this.apiSelectEducationalLevel = api['master']['select-parameter'];
        this.paramSelectEducationalLevel = [{
                key: 'parameterGroupCode',
                value: 'EDUCATIONAL_LEVEL',
            }, {
                key: 'parameterCodeNotIn',
                value: 'EDUCATIONAL_LEVEL.NO_EDUCATION',
            }];
    }
    ngOnInit() {
        if (this.education) {
            this.action = 'Edit';
            this.formGroup.get('educationalLevel').setValue({
                label: this.education.educationalLevel,
                value: this.education.educationalLevelCode
            });
            this.formGroup.get('educationalLevel').disable({ onlySelf: true });
            this.formGroup.get('school').setValue(this.education.schoolName);
            this.formGroup.get('startYear').setValue(this.education.startYear);
            this.formGroup.get('endYear').setValue(this.education.endYear);
        }
        else {
            this.action = 'Add';
        }
    }
    onSubmit() {
        var _a, _b;
        const data = {
            education: {
                id: (_a = this.education) === null || _a === void 0 ? void 0 : _a.id,
                educationalLevel: (_b = this.formGroup.get('educationalLevel').value) === null || _b === void 0 ? void 0 : _b.value,
                schoolName: this.formGroup.get('school').value,
                startYear: this.formGroup.get('startYear').value,
                endYear: this.formGroup.get('endYear').value,
            }
        };
        this.ref.close(data);
    }
    onReset() {
        this.ref.close();
    }
}
EmployeeProfileEducationFormalPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationFormalPromptComponent, deps: [{ token: API }, { token: i1.FormBuilder }, { token: i2.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileEducationFormalPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationFormalPromptComponent, selector: "do-profile-education-formal-prompt", inputs: { education: "education" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-formal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-select\n            [name]=\"'educationalLevel'\"\n            [label]=\"'Educational Level'\"\n            [placeholder]=\"'Educational Level'\"\n            [required]=\"true\"\n            [api]=\"apiSelectEducationalLevel\"\n            [queryParam]=\"paramSelectEducationalLevel\"\n            [searchable]=\"false\"\n            formControlName=\"educationalLevel\">\n          </do-select>\n          <do-input-text\n            [name]=\"'school'\"\n            [label]=\"'School'\"\n            [placeholder]=\"'School'\"\n            formControlName=\"school\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'startYear'\"\n            [label]=\"'Start Year'\"\n            [placeholder]=\"'Start Year'\"\n            [type]=\"'number'\"\n            formControlName=\"startYear\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'endYear'\"\n            [label]=\"'End Year'\"\n            [placeholder]=\"'End Year'\"\n            [type]=\"'number'\"\n            formControlName=\"endYear\">\n          </do-input-text>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i2.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i2.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i4.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationFormalPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-profile-education-formal-prompt',
                    templateUrl: 'profile-education-formal-prompt.component.html',
                    styleUrls: ['profile-education-formal-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i1.FormBuilder }, { type: i2.NbDialogRef }]; }, propDecorators: { education: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZHVjYXRpb24tZm9ybWFsLXByb21wdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wcm9maWxlL3BhZ2UvZWR1Y2F0aW9uL3Byb21wdC1mb3JtYWwvcHJvZmlsZS1lZHVjYXRpb24tZm9ybWFsLXByb21wdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wcm9maWxlL3BhZ2UvZWR1Y2F0aW9uL3Byb21wdC1mb3JtYWwvcHJvZmlsZS1lZHVjYXRpb24tZm9ybWFsLXByb21wdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHakUsT0FBTyxFQUFFLEdBQUcsRUFBMkIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBUWhFLE1BQU0sT0FBTyw2Q0FBNkM7SUFReEQsWUFDZSxHQUFhLEVBQzFCLFdBQXdCLEVBQ2QsR0FBK0Q7UUFBL0QsUUFBRyxHQUFILEdBQUcsQ0FBNEQ7UUFScEUsV0FBTSxHQUFtQixLQUFLLENBQUM7UUFTbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDO2dCQUNsQyxHQUFHLEVBQUUsb0JBQW9CO2dCQUN6QixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLG9CQUFvQjtnQkFDekIsS0FBSyxFQUFFLGdDQUFnQzthQUN4QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCO2dCQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0I7YUFDM0MsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsUUFBUTs7UUFDTixNQUFNLElBQUksR0FBUTtZQUNoQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxFQUFFLE1BQUEsSUFBSSxDQUFDLFNBQVMsMENBQUUsRUFBRTtnQkFDdEIsZ0JBQWdCLEVBQUUsTUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssMENBQUUsS0FBSztnQkFDckUsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUs7Z0JBQzlDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLO2dCQUNoRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSzthQUM3QztTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7MklBM0RVLDZDQUE2QyxrQkFTOUMsR0FBRzsrSEFURiw2Q0FBNkMsOEdDWDFELGl0REFvREE7NEZEekNhLDZDQUE2QztrQkFMekQsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxXQUFXLEVBQUUsZ0RBQWdEO29CQUM3RCxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsQ0FBQztpQkFDOUQ7OzBCQVVJLE1BQU07MkJBQUMsR0FBRztnR0FQRyxTQUFTO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFQSSwgQVBJTW9kZWwsIEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlbGVjdFBhcmFtTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1wcm9maWxlLWVkdWNhdGlvbi1mb3JtYWwtcHJvbXB0JyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9maWxlLWVkdWNhdGlvbi1mb3JtYWwtcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Byb2ZpbGUtZWR1Y2F0aW9uLWZvcm1hbC1wcm9tcHQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgZWR1Y2F0aW9uOiBhbnk7XG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGFwaVNlbGVjdEVkdWNhdGlvbmFsTGV2ZWw6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdEVkdWNhdGlvbmFsTGV2ZWw6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFQSSkgYXBpOiBBUElNb2RlbCxcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIHJlZjogTmJEaWFsb2dSZWY8RW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50Pikge1xuICAgICAgdGhpcy5mb3JtR3JvdXAgPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVkdWNhdGlvbmFsTGV2ZWw6IFtdLFxuICAgICAgICBzY2hvb2w6IFtdLFxuICAgICAgICBzdGFydFllYXI6IFtdLFxuICAgICAgICBlbmRZZWFyOiBbXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcGlTZWxlY3RFZHVjYXRpb25hbExldmVsID0gYXBpWydtYXN0ZXInXVsnc2VsZWN0LXBhcmFtZXRlciddO1xuICAgICAgdGhpcy5wYXJhbVNlbGVjdEVkdWNhdGlvbmFsTGV2ZWwgPSBbe1xuICAgICAgICBrZXk6ICdwYXJhbWV0ZXJHcm91cENvZGUnLFxuICAgICAgICB2YWx1ZTogJ0VEVUNBVElPTkFMX0xFVkVMJyxcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncGFyYW1ldGVyQ29kZU5vdEluJyxcbiAgICAgICAgdmFsdWU6ICdFRFVDQVRJT05BTF9MRVZFTC5OT19FRFVDQVRJT04nLFxuICAgICAgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lZHVjYXRpb24pIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlZHVjYXRpb25hbExldmVsJykuc2V0VmFsdWUoe1xuICAgICAgICBsYWJlbDogdGhpcy5lZHVjYXRpb24uZWR1Y2F0aW9uYWxMZXZlbCxcbiAgICAgICAgdmFsdWU6IHRoaXMuZWR1Y2F0aW9uLmVkdWNhdGlvbmFsTGV2ZWxDb2RlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZWR1Y2F0aW9uYWxMZXZlbCcpLmRpc2FibGUoe29ubHlTZWxmOiB0cnVlfSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3NjaG9vbCcpLnNldFZhbHVlKHRoaXMuZWR1Y2F0aW9uLnNjaG9vbE5hbWUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdzdGFydFllYXInKS5zZXRWYWx1ZSh0aGlzLmVkdWNhdGlvbi5zdGFydFllYXIpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbmRZZWFyJykuc2V0VmFsdWUodGhpcy5lZHVjYXRpb24uZW5kWWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gJ0FkZCc7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgZWR1Y2F0aW9uOiB7XG4gICAgICAgIGlkOiB0aGlzLmVkdWNhdGlvbj8uaWQsXG4gICAgICAgIGVkdWNhdGlvbmFsTGV2ZWw6IHRoaXMuZm9ybUdyb3VwLmdldCgnZWR1Y2F0aW9uYWxMZXZlbCcpLnZhbHVlPy52YWx1ZSxcbiAgICAgICAgc2Nob29sTmFtZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCdzY2hvb2wnKS52YWx1ZSxcbiAgICAgICAgc3RhcnRZZWFyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3N0YXJ0WWVhcicpLnZhbHVlLFxuICAgICAgICBlbmRZZWFyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VuZFllYXInKS52YWx1ZSxcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVmLmNsb3NlKGRhdGEpO1xuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICB0aGlzLnJlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsIjxuYi1jYXJkIGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAge3sgJ2hlYWRlci4nK2FjdGlvbisnLWVkdWNhdGlvbi1mb3JtYWwnIHwgdHJhbnNsYXRlIH19XG4gIDwvbmItY2FyZC1oZWFkZXI+XG4gIDxuYi1jYXJkLWJvZHk+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiBhdXRvY29tcGxldGU9XCJvblwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XG4gICAgICAgICAgPGRvLXNlbGVjdFxuICAgICAgICAgICAgW25hbWVdPVwiJ2VkdWNhdGlvbmFsTGV2ZWwnXCJcbiAgICAgICAgICAgIFtsYWJlbF09XCInRWR1Y2F0aW9uYWwgTGV2ZWwnXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInRWR1Y2F0aW9uYWwgTGV2ZWwnXCJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFthcGldPVwiYXBpU2VsZWN0RWR1Y2F0aW9uYWxMZXZlbFwiXG4gICAgICAgICAgICBbcXVlcnlQYXJhbV09XCJwYXJhbVNlbGVjdEVkdWNhdGlvbmFsTGV2ZWxcIlxuICAgICAgICAgICAgW3NlYXJjaGFibGVdPVwiZmFsc2VcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZWR1Y2F0aW9uYWxMZXZlbFwiPlxuICAgICAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgICBbbmFtZV09XCInc2Nob29sJ1wiXG4gICAgICAgICAgICBbbGFiZWxdPVwiJ1NjaG9vbCdcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidTY2hvb2wnXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNjaG9vbFwiPlxuICAgICAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgW25hbWVdPVwiJ3N0YXJ0WWVhcidcIlxuICAgICAgICAgICAgW2xhYmVsXT1cIidTdGFydCBZZWFyJ1wiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ1N0YXJ0IFllYXInXCJcbiAgICAgICAgICAgIFt0eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0WWVhclwiPlxuICAgICAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgW25hbWVdPVwiJ2VuZFllYXInXCJcbiAgICAgICAgICAgIFtsYWJlbF09XCInRW5kIFllYXInXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInRW5kIFllYXInXCJcbiAgICAgICAgICAgIFt0eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVuZFllYXJcIj5cbiAgICAgICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtYm9keT5cbiAgPG5iLWNhcmQtZm9vdGVyPlxuICAgIDxkby1idXR0b24tc3VibWl0XG4gICAgICBbc3VibWl0VGl0bGVdPVwiYWN0aW9uXCJcbiAgICAgIFtyZXNldFRpdGxlXT1cIidDYW5jZWwnXCJcbiAgICAgIFtmb3JtR3JvdXBCdXR0b25dPVwiZm9ybUdyb3VwXCJcbiAgICAgIChvblJlc2V0KT1cIm9uUmVzZXQoKVwiXG4gICAgICAob25TdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgIDwvZG8tYnV0dG9uLXN1Ym1pdD5cbiAgPC9uYi1jYXJkLWZvb3Rlcj5cbjwvbmItY2FyZD5cbiJdfQ==