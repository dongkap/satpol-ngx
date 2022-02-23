import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/employee.service";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@angular/forms";
export class EmployeeEditEmployeeStatusComponent extends BaseFormComponent {
    constructor(injector, router, employeeService) {
        super(injector, {
            occupation: [],
            role: [],
            employeeParent: [],
            permissions: [],
        });
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.permissionsData = [];
        this.apiSelectOccupation = this.api['security']['select-occupation'];
        this.apiSelectRole = this.api['security']['select-role'];
        this.apiSelectEmployeeParent = this.api['security']['select-employee'];
    }
    ngOnInit() {
        if (!this.employeeService.getEmployeeHeader()) {
            this.router.navigate(['/app/mgmt/employee']);
            return;
        }
        this.http.HTTP_AUTH(this.api['master']['checkbox-parameter'], {
            keyword: {
                parameterGroupCode: 'PERMISSION',
            },
        }).pipe(takeUntil(this.destroy$), map((response) => {
            this.permissionsData = response;
        }), catchError(() => of([]))).subscribe(() => { });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    loadDataMenu() {
        var _a;
        this.loadingForm = true;
        return this.exec('security', 'get-employee-status', {
            employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id
        }).pipe(map((success) => {
            var _a, _b;
            this.loadingForm = false;
            this.username = success.username;
            const roles = success.roles;
            const selectRoles = [];
            roles.forEach(role => {
                selectRoles.push({
                    label: role.description,
                    value: role.authority,
                    disabled: false,
                });
            });
            this.formGroup.controls['role'].setValue(selectRoles);
            this.formGroup.controls['occupation'].setValue({
                label: (_a = success.occupation) === null || _a === void 0 ? void 0 : _a.name,
                value: (_b = success.occupation) === null || _b === void 0 ? void 0 : _b.code
            });
            this.formGroup.controls['employeeParent'].setValue({
                label: success.parentLabel,
                value: success.parentValue
            });
            const permissions = this.permissionsData;
            permissions.forEach((permission) => {
                if (permission.id === 'PERMISSION.DISABLED') {
                    permission['selected'] = success.disabled;
                }
                if (permission.id === 'PERMISSION.LOCKED') {
                    permission['selected'] = success.locked;
                }
                if (permission.id === 'PERMISSION.ACCOUNT_EXPIRED') {
                    permission['selected'] = success.accountExpired;
                }
            });
            this.formGroup.controls['permissions'].setValue(permissions);
            this.formGroup.markAsPristine();
        }));
    }
    onReset() {
        this.router.navigate(['/app/mgmt/employee']);
    }
    onSubmit() {
        var _a, _b;
        const roles = [];
        const tmpRoles = this.formGroup.get('role').value;
        tmpRoles.forEach(role => {
            roles.push({
                authority: role.value
            });
        });
        let disabled = false;
        let locked = false;
        let accountExpired = false;
        const permissions = this.formGroup.get('permissions').value ? this.formGroup.get('permissions').value : this.permissionsData;
        permissions.forEach((permission) => {
            if (permission.id === 'PERMISSION.DISABLED') {
                disabled = permission['selected'];
            }
            if (permission.id === 'PERMISSION.LOCKED') {
                locked = permission['selected'];
            }
            if (permission.id === 'PERMISSION.ACCOUNT_EXPIRED') {
                accountExpired = permission['selected'];
            }
        });
        const data = {
            id: this.employeeService.getEmployeeHeader().id,
            disabled,
            locked,
            accountExpired,
            parentId: (_a = this.formGroup.get('employeeParent').value) === null || _a === void 0 ? void 0 : _a.value,
            roles,
            occupation: {
                code: (_b = this.formGroup.get('occupation').value) === null || _b === void 0 ? void 0 : _b.value
            },
        };
        super.onSubmit(data, 'security', 'put-employee-status')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/employee']);
            }
        });
    }
}
EmployeeEditEmployeeStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEmployeeStatusComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.EmployeeService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditEmployeeStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditEmployeeStatusComponent, selector: "do-employee-edit-employee-status", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n      <do-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"username\">\n      </do-label-text>\n      <do-select\n        [name]=\"'occupation'\"\n        [label]=\"'Occupation'\"\n        [placeholder]=\"'Occupation'\"\n        [required]=\"true\"\n        [api]=\"apiSelectOccupation\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"occupation\">\n      </do-select>\n      <do-select\n        [name]=\"'role'\"\n        [label]=\"'Role'\"\n        [placeholder]=\"'Role'\"\n        [required]=\"true\"\n        [api]=\"apiSelectRole\"\n        [searchable]=\"false\"\n        [multiple]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"role\">\n      </do-select>\n      <do-select\n        [name]=\"'employeeParent'\"\n        [label]=\"'Supervisor'\"\n        [placeholder]=\"'Supervisor'\"\n        [api]=\"apiSelectEmployeeParent\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeParent\">\n      </do-select>\n      <do-checkbox\n        [name]=\"'permissions'\"\n        [label]=\"'Permissions'\"\n        [data]=\"permissionsData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"permissions\">\n      </do-checkbox>\n      <do-button-submit\n        [submitTitle]=\"'Edit'\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        [skeleton]=\"loadingForm\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit()\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>", styles: [""], components: [{ type: i3.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEmployeeStatusComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-employee-status',
                    styleUrls: ['./employee-edit-employee-status.component.scss'],
                    templateUrl: './employee-edit-employee-status.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.EmployeeService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvZWRpdC9lbXBsb3llZS1zdGF0dXMvZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvZWRpdC9lbXBsb3llZS1zdGF0dXMvZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFHL0QsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQW1CLFlBQVksRUFBNEIsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQXNDLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQVEzRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsaUJBQXNCO0lBUTdFLFlBQ1MsUUFBa0IsRUFDakIsTUFBYyxFQUNkLGVBQWdDO1FBQ3hDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLElBQUksRUFBRSxFQUFFO1lBQ1IsY0FBYyxFQUFFLEVBQUU7WUFDbEIsV0FBVyxFQUFFLEVBQUU7U0FDaEIsQ0FBQyxDQUFDO1FBUkksYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLG9CQUFlLEdBQW9CLEVB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Q0wsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssMENBQUUsS0FBSzthQUNwRDtTQUNGLENBQUM7UUFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUscUJBQXFCLENBQWtDO2FBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2lJQXBJVSxtQ0FBbUM7cUhBQW5DLG1DQUFtQywrRkNkaEQsaTBEQTBETTs0RkQ1Q08sbUNBQW1DO2tCQUwvQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDO29CQUM3RCxXQUFXLEVBQUUsZ0RBQWdEO2lCQUM5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBSZXNwb25zZUNvZGUsIEh0dHBCYXNlTW9kZWwsIFJvbGVNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIENoZWNrYm94TW9kZWwsIFNlbGVjdFJlc3BvbnNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZW1wbG95ZWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWVtcGxveWVlLWVkaXQtZW1wbG95ZWUtc3RhdHVzJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXMuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2VtcGxveWVlLWVkaXQtZW1wbG95ZWUtc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVFZGl0RW1wbG95ZWVTdGF0dXNDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RPY2N1cGF0aW9uOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpU2VsZWN0Um9sZTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVNlbGVjdEVtcGxveWVlUGFyZW50OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZztcbiAgcHVibGljIHBlcm1pc3Npb25zRGF0YTogQ2hlY2tib3hNb2RlbFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgb2NjdXBhdGlvbjogW10sXG4gICAgICByb2xlOiBbXSxcbiAgICAgIGVtcGxveWVlUGFyZW50OiBbXSxcbiAgICAgIHBlcm1pc3Npb25zOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVNlbGVjdE9jY3VwYXRpb24gPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnc2VsZWN0LW9jY3VwYXRpb24nXTtcbiAgICB0aGlzLmFwaVNlbGVjdFJvbGUgPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnc2VsZWN0LXJvbGUnXTtcbiAgICB0aGlzLmFwaVNlbGVjdEVtcGxveWVlUGFyZW50ID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ3NlbGVjdC1lbXBsb3llZSddO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9lbXBsb3llZSddKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ2NoZWNrYm94LXBhcmFtZXRlciddLCB7XG4gICAgICBrZXl3b3JkIDoge1xuICAgICAgICBwYXJhbWV0ZXJHcm91cENvZGU6ICdQRVJNSVNTSU9OJyxcbiAgICAgIH0sXG4gICAgfSkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCksIG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25zRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgfSksIGNhdGNoRXJyb3IoKCkgPT4gb2YoW10pKSkuc3Vic2NyaWJlKCgpID0+IHt9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbG9hZERhdGFNZW51KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZXhlYygnc2VjdXJpdHknLCAnZ2V0LWVtcGxveWVlLXN0YXR1cycsIHtcbiAgICAgIGVtcGxveWVlSWQ6IHRoaXMuZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlSGVhZGVyKCk/LmlkXG4gICAgfSkucGlwZShtYXAoXG4gICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN1Y2Nlc3MudXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IHJvbGVzOiBhbnlbXSA9IHN1Y2Nlc3Mucm9sZXM7XG4gICAgICAgIGNvbnN0IHNlbGVjdFJvbGVzOiBTZWxlY3RSZXNwb25zZU1vZGVsW10gPSBbXTtcbiAgICAgICAgcm9sZXMuZm9yRWFjaChyb2xlID0+IHtcbiAgICAgICAgICBzZWxlY3RSb2xlcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiByb2xlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdmFsdWU6IHJvbGUuYXV0aG9yaXR5LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3JvbGUnXS5zZXRWYWx1ZShzZWxlY3RSb2xlcyk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydvY2N1cGF0aW9uJ10uc2V0VmFsdWUoe1xuICAgICAgICAgIGxhYmVsOiBzdWNjZXNzLm9jY3VwYXRpb24/Lm5hbWUsXG4gICAgICAgICAgdmFsdWU6IHN1Y2Nlc3Mub2NjdXBhdGlvbj8uY29kZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtcGxveWVlUGFyZW50J10uc2V0VmFsdWUoe1xuICAgICAgICAgIGxhYmVsOiBzdWNjZXNzLnBhcmVudExhYmVsLFxuICAgICAgICAgIHZhbHVlOiBzdWNjZXNzLnBhcmVudFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwZXJtaXNzaW9uczogYW55W10gPSB0aGlzLnBlcm1pc3Npb25zRGF0YTtcbiAgICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICAgIGlmIChwZXJtaXNzaW9uLmlkID09PSAnUEVSTUlTU0lPTi5ESVNBQkxFRCcpIHtcbiAgICAgICAgICAgIHBlcm1pc3Npb25bJ3NlbGVjdGVkJ10gPSBzdWNjZXNzLmRpc2FibGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGVybWlzc2lvbi5pZCA9PT0gJ1BFUk1JU1NJT04uTE9DS0VEJykge1xuICAgICAgICAgICAgcGVybWlzc2lvblsnc2VsZWN0ZWQnXSA9IHN1Y2Nlc3MubG9ja2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGVybWlzc2lvbi5pZCA9PT0gJ1BFUk1JU1NJT04uQUNDT1VOVF9FWFBJUkVEJykge1xuICAgICAgICAgICAgcGVybWlzc2lvblsnc2VsZWN0ZWQnXSA9IHN1Y2Nlc3MuYWNjb3VudEV4cGlyZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Blcm1pc3Npb25zJ10uc2V0VmFsdWUocGVybWlzc2lvbnMpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgfSkpO1xuICB9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9lbXBsb3llZSddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IHJvbGVzOiBSb2xlTW9kZWxbXSA9IFtdO1xuICAgIGNvbnN0IHRtcFJvbGVzOiBTZWxlY3RSZXNwb25zZU1vZGVsW10gPSAodGhpcy5mb3JtR3JvdXAuZ2V0KCdyb2xlJykudmFsdWUgYXMgU2VsZWN0UmVzcG9uc2VNb2RlbFtdKTtcbiAgICB0bXBSb2xlcy5mb3JFYWNoKHJvbGUgPT4ge1xuICAgICAgcm9sZXMucHVzaCh7XG4gICAgICAgIGF1dGhvcml0eTogcm9sZS52YWx1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGV0IGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBhY2NvdW50RXhwaXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0IHBlcm1pc3Npb25zOiBDaGVja2JveE1vZGVsW10gPVxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwZXJtaXNzaW9ucycpLnZhbHVlID8gdGhpcy5mb3JtR3JvdXAuZ2V0KCdwZXJtaXNzaW9ucycpLnZhbHVlIDogdGhpcy5wZXJtaXNzaW9uc0RhdGE7XG4gICAgcGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgaWYgKHBlcm1pc3Npb24uaWQgPT09ICdQRVJNSVNTSU9OLkRJU0FCTEVEJykge1xuICAgICAgICBkaXNhYmxlZCA9IHBlcm1pc3Npb25bJ3NlbGVjdGVkJ107XG4gICAgICB9XG4gICAgICBpZiAocGVybWlzc2lvbi5pZCA9PT0gJ1BFUk1JU1NJT04uTE9DS0VEJykge1xuICAgICAgICBsb2NrZWQgPSBwZXJtaXNzaW9uWydzZWxlY3RlZCddO1xuICAgICAgfVxuICAgICAgaWYgKHBlcm1pc3Npb24uaWQgPT09ICdQRVJNSVNTSU9OLkFDQ09VTlRfRVhQSVJFRCcpIHtcbiAgICAgICAgYWNjb3VudEV4cGlyZWQgPSBwZXJtaXNzaW9uWydzZWxlY3RlZCddO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIGlkOiB0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpLmlkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsb2NrZWQsXG4gICAgICBhY2NvdW50RXhwaXJlZCxcbiAgICAgIHBhcmVudElkOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtcGxveWVlUGFyZW50JykudmFsdWU/LnZhbHVlLFxuICAgICAgcm9sZXMsXG4gICAgICBvY2N1cGF0aW9uOiB7XG4gICAgICAgIGNvZGU6IHRoaXMuZm9ybUdyb3VwLmdldCgnb2NjdXBhdGlvbicpLnZhbHVlPy52YWx1ZVxuICAgICAgfSxcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnc2VjdXJpdHknLCAncHV0LWVtcGxveWVlLXN0YXR1cycpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvZW1wbG95ZWUnXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIGF1dG9jb21wbGV0ZT1cIm9uXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cbiAgICAgIDxkby1sYWJlbC10ZXh0XG4gICAgICAgIFtsYWJlbF09XCInVXNlcm5hbWUnXCJcbiAgICAgICAgW2NvbExhYmVsXT1cIjNcIlxuICAgICAgICBbY29sQ29udGVudF09XCI5XCJcbiAgICAgICAgW2RpdmlkZXJsYWJlbF09XCJmYWxzZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIFtjb250ZW50XT1cInVzZXJuYW1lXCI+XG4gICAgICA8L2RvLWxhYmVsLXRleHQ+XG4gICAgICA8ZG8tc2VsZWN0XG4gICAgICAgIFtuYW1lXT1cIidvY2N1cGF0aW9uJ1wiXG4gICAgICAgIFtsYWJlbF09XCInT2NjdXBhdGlvbidcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ09jY3VwYXRpb24nXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbYXBpXT1cImFwaVNlbGVjdE9jY3VwYXRpb25cIlxuICAgICAgICBbc2VhcmNoYWJsZV09XCJmYWxzZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm9jY3VwYXRpb25cIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRvLXNlbGVjdFxuICAgICAgICBbbmFtZV09XCIncm9sZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ1JvbGUnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidSb2xlJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RSb2xlXCJcbiAgICAgICAgW3NlYXJjaGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbbXVsdGlwbGVdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJvbGVcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRvLXNlbGVjdFxuICAgICAgICBbbmFtZV09XCInZW1wbG95ZWVQYXJlbnQnXCJcbiAgICAgICAgW2xhYmVsXT1cIidTdXBlcnZpc29yJ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInU3VwZXJ2aXNvcidcIlxuICAgICAgICBbYXBpXT1cImFwaVNlbGVjdEVtcGxveWVlUGFyZW50XCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1wbG95ZWVQYXJlbnRcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRvLWNoZWNrYm94XG4gICAgICAgIFtuYW1lXT1cIidwZXJtaXNzaW9ucydcIlxuICAgICAgICBbbGFiZWxdPVwiJ1Blcm1pc3Npb25zJ1wiXG4gICAgICAgIFtkYXRhXT1cInBlcm1pc3Npb25zRGF0YVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBlcm1pc3Npb25zXCI+XG4gICAgICA8L2RvLWNoZWNrYm94PlxuICAgICAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICAgICAgW3N1Ym1pdFRpdGxlXT1cIidFZGl0J1wiXG4gICAgICAgIFtyZXNldFRpdGxlXT1cIidDYW5jZWwnXCJcbiAgICAgICAgW2Zvcm1Hcm91cEJ1dHRvbl09XCJmb3JtR3JvdXBcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAob25SZXNldCk9XCJvblJlc2V0KClcIlxuICAgICAgICAob25TdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgPC9kby1idXR0b24tc3VibWl0PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=