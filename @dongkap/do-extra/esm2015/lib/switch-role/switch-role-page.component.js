import { Component } from '@angular/core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-auth";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@angular/forms";
export class SwitchRolePageComponent extends BaseFormComponent {
    constructor(injector, authIndexedDB) {
        super(injector, {
            role: [],
        });
        this.injector = injector;
        this.authIndexedDB = authIndexedDB;
        this.apiSelectUserRole = this.api['security']['select-user-role'];
    }
    ngOnInit() {
        this.loadingForm = true;
        this.exec('security', 'get-user-role')
            .subscribe((success) => {
            this.loadingForm = false;
            this.authority = success['authority'];
            this.formGroup.controls['role'].setValue(success['description']);
            this.formGroup.markAsPristine();
        }, (error) => {
            this.loadingForm = true;
            if (error.respStatusMessage) {
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }
        });
    }
    onSubmit() {
        if (this.formGroup.get('role').value['value']) {
            this.authority = this.formGroup.get('role').value['value'];
        }
        this.disabled = true;
        this.loadingForm = true;
        const data = {
            authority: this.authority
        };
        super.onSubmit(data, 'security', 'switch-role')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                this.toastr.showI18n('notification.default', true);
                Promise.all([
                    this.authIndexedDB.putEnc('menus', JSON.stringify(response['main'])),
                    this.authIndexedDB.putEnc('extras', JSON.stringify(response['extra'])),
                ]).then(() => {
                    this.loadingForm = false;
                    window.location.href = '/app/home';
                });
            }
        });
    }
}
SwitchRolePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SwitchRolePageComponent, deps: [{ token: i0.Injector }, { token: i1.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
SwitchRolePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SwitchRolePageComponent, selector: "do-switch-role-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Switch Role'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n      <do-select\n      [name]=\"'role'\"\n      [label]=\"'Role'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectUserRole\"\n      formControlName=\"role\">\n      </do-select>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Switch Role'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SwitchRolePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-switch-role-page',
                    styleUrls: ['./switch-role-page.component.scss'],
                    templateUrl: './switch-role-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.AuthIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLXJvbGUtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1leHRyYS9zcmMvbGliL3N3aXRjaC1yb2xlL3N3aXRjaC1yb2xlLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9zd2l0Y2gtcm9sZS9zd2l0Y2gtcm9sZS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBTTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPM0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUFzQjtJQUtqRSxZQUNTLFFBQWtCLEVBQ2pCLGFBQW1DO1FBQzNDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUMsQ0FBQztRQUpJLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBSTNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7YUFDbkMsU0FBUyxDQUNSLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQ0QsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMzRjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFRO1lBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBaUM7YUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUN2RSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztxSEF4RFUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsa0ZDZnBDLGttQkFxQkE7NEZETmEsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO29CQUNoRCxXQUFXLEVBQUUsbUNBQW1DO2lCQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7XG4gIEFwaUJhc2VSZXNwb25zZSxcbiAgSHR0cEJhc2VNb2RlbCxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXN3aXRjaC1yb2xlLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2gtcm9sZS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2gtcm9sZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoUm9sZVBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBpU2VsZWN0VXNlclJvbGU6IEh0dHBCYXNlTW9kZWw7XG4gIHByaXZhdGUgYXV0aG9yaXR5OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGF1dGhJbmRleGVkREI6IEF1dGhJbmRleGVkREJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgIHJvbGU6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpU2VsZWN0VXNlclJvbGUgPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnc2VsZWN0LXVzZXItcm9sZSddO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmV4ZWMoJ3NlY3VyaXR5JywgJ2dldC11c2VyLXJvbGUnKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHN1Y2Nlc3NbJ2F1dGhvcml0eSddO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydyb2xlJ10uc2V0VmFsdWUoc3VjY2Vzc1snZGVzY3JpcHRpb24nXSk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcFN0YXR1c01lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdyb2xlJykudmFsdWVbJ3ZhbHVlJ10pIHtcbiAgICAgIHRoaXMuYXV0aG9yaXR5ID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdyb2xlJykudmFsdWVbJ3ZhbHVlJ107XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIGF1dGhvcml0eTogdGhpcy5hdXRob3JpdHlcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnc2VjdXJpdHknLCAnc3dpdGNoLXJvbGUnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKCdub3RpZmljYXRpb24uZGVmYXVsdCcsIHRydWUpO1xuICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5wdXRFbmMoJ21lbnVzJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbJ21haW4nXSkpLFxuICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLnB1dEVuYygnZXh0cmFzJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbJ2V4dHJhJ10pKSxcbiAgICAgICAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcHAvaG9tZSc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkby1wYWdlLW91dGxldCBbaGVhZGVyXT1cIidTd2l0Y2ggUm9sZSdcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBwYWdlY29udGVudD5cbiAgICAgIDxkby1zZWxlY3RcbiAgICAgIFtuYW1lXT1cIidyb2xlJ1wiXG4gICAgICBbbGFiZWxdPVwiJ1JvbGUnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgIFtzZWFyY2hhYmxlXT1cImZhbHNlXCJcbiAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICBbYXBpXT1cImFwaVNlbGVjdFVzZXJSb2xlXCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cInJvbGVcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICA8L2Zvcm0+XG4gIDxkaXYgY2xhc3M9XCJvZmZzZXQtc20tMyBjb2wtc20tOVwiIHBhZ2Vmb290ZXI+XG4gICAgPGRvLWJ1dHRvblxuICAgICAgKG9uU3VibWl0KT1cIm9uU3VibWl0KClcIlxuICAgICAgW25hbWVdPVwiJ1N3aXRjaCBSb2xlJ1wiXG4gICAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cFwiXG4gICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIj5cbiAgICA8L2RvLWJ1dHRvbj5cbiAgPC9kaXY+XG48L2RvLXBhZ2Utb3V0bGV0PlxuIl19