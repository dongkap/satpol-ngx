import { Component, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/employee.service";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@nebular/theme";
import * as i5 from "./personal-information/employee-edit-personal-information.component";
import * as i6 from "./education/employee-edit-education.component";
import * as i7 from "./employee-status/employee-edit-employee-status.component";
import * as i8 from "@ngx-translate/core";
export class EmployeeEditPageComponent extends BaseComponent {
    constructor(injector, router, employeeService, toastr) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.toastr = toastr;
        this.loading = false;
        this.tab = 'personalInfo';
        this.destroy$ = new Subject();
        if (this.employeeService.getEmployeeHeader()) {
        }
        else {
            this.router.navigate(['/app/mgmt/employee']);
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'personalInfo') {
            this.personalInfo.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else if (this.tab === 'education') {
            this.education.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else {
            this.employeeStatus.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
    }
}
EmployeeEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.EmployeeService }, { token: i3.DoToastrService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditPageComponent, selector: "do-employee-edit-page", viewQueries: [{ propertyName: "personalInfo", first: true, predicate: ["personalInfo"], descendants: true, static: true }, { propertyName: "education", first: true, predicate: ["education"], descendants: true, static: true }, { propertyName: "employeeStatus", first: true, predicate: ["employeeStatus"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.employee-management'\" [url]=\"'/app/mgmt/employee'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"personalInfo\" tabTitle=\"{{'tab.personal-info' | translate}}\" [lazyLoad]=\"true\">\n      <do-employee-edit-personal-information #personalInfo></do-employee-edit-personal-information>\n    </nb-tab>\n    <nb-tab tabId=\"education\" tabTitle=\"{{'tab.education' | translate}}\">\n      <do-employee-edit-education #education></do-employee-edit-education>\n    </nb-tab>\n    <nb-tab tabId=\"employeeStatus\" tabTitle=\"{{'tab.employee-status' | translate}}\">\n      <do-employee-edit-employee-status #employeeStatus></do-employee-edit-employee-status>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i4.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i4.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i5.EmployeeEditPersonalInformationComponent, selector: "do-employee-edit-personal-information" }, { type: i6.EmployeeEditEducationComponent, selector: "do-employee-edit-education" }, { type: i7.EmployeeEditEmployeeStatusComponent, selector: "do-employee-edit-employee-status" }], pipes: { "translate": i8.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-page',
                    styleUrls: ['./employee-edit-page.component.scss'],
                    templateUrl: './employee-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.EmployeeService }, { type: i3.DoToastrService }]; }, propDecorators: { personalInfo: [{
                type: ViewChild,
                args: ['personalInfo', { static: true }]
            }], education: [{
                type: ViewChild,
                args: ['education', { static: true }]
            }], employeeStatus: [{
                type: ViewChild,
                args: ['employeeStatus', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtZWRpdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2VtcGxveWVlL2VkaXQvZW1wbG95ZWUtZWRpdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2VtcGxveWVlL2VkaXQvZW1wbG95ZWUtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFtQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0FBV3BFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxhQUFrQjtJQVUvRCxZQUNTLFFBQWtCLEVBQ2pCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxNQUF1QjtRQUMvQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFKVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFaMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixRQUFHLEdBQVcsY0FBYyxDQUFDO1FBQzFCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVlwRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtTQUM3QzthQUFNO1lBQ0ws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QVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO29CQUNsRCxXQUFXLEVBQUUscUNBQXFDO2lCQUNuRDtnTEFPOEMsWUFBWTtzQkFBeEQsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNELFNBQVM7c0JBQWxELFNBQVM7dUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDTyxjQUFjO3NCQUE1RCxTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZGl0UGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGVyc29uYWwtaW5mb3JtYXRpb24vZW1wbG95ZWUtZWRpdC1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZGl0RWR1Y2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9lZHVjYXRpb24vZW1wbG95ZWUtZWRpdC1lZHVjYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlRWRpdEVtcGxveWVlU3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnLi9lbXBsb3llZS1zdGF0dXMvZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZW1wbG95ZWUtZWRpdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW1wbG95ZWUtZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9lbXBsb3llZS1lZGl0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZUVkaXRQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0YWI6IHN0cmluZyA9ICdwZXJzb25hbEluZm8nO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdwZXJzb25hbEluZm8nLCB7IHN0YXRpYzogdHJ1ZSB9KSBwZXJzb25hbEluZm86IEVtcGxveWVlRWRpdFBlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2VkdWNhdGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIGVkdWNhdGlvbjogRW1wbG95ZWVFZGl0RWR1Y2F0aW9uQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdlbXBsb3llZVN0YXR1cycsIHsgc3RhdGljOiB0cnVlIH0pIGVtcGxveWVlU3RhdHVzOiBFbXBsb3llZUVkaXRFbXBsb3llZVN0YXR1c0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICAgIGlmICh0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2VtcGxveWVlJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUxvYWRpbmdBbmltYXRpb24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudGFiID0gZXZlbnQudGFiSWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy50YWIgPT09ICdwZXJzb25hbEluZm8nKSB7XG4gICAgICB0aGlzLnBlcnNvbmFsSW5mby5sb2FkRGF0YU1lbnUoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKGVycm9yOiBhbnkgfCBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3JbJ2Vycm9yJ10gYXMgQXBpQmFzZVJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PT0gJ2VkdWNhdGlvbicpIHtcbiAgICAgIHRoaXMuZWR1Y2F0aW9uLmxvYWREYXRhTWVudSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9LCAoZXJyb3I6IGFueSB8IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvclsnZXJyb3InXSBhcyBBcGlCYXNlUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbXBsb3llZVN0YXR1cy5sb2FkRGF0YU1lbnUoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKGVycm9yOiBhbnkgfCBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3JbJ2Vycm9yJ10gYXMgQXBpQmFzZVJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkby1wYWdlLW91dGxldCBbaGVhZGVyXT1cIidoZWFkZXIuZW1wbG95ZWUtbWFuYWdlbWVudCdcIiBbdXJsXT1cIicvYXBwL21nbXQvZW1wbG95ZWUnXCIgW2hpZGVmb290ZXJdPVwidHJ1ZVwiPlxuICA8bmItdGFic2V0IGZ1bGxXaWR0aCAoY2hhbmdlVGFiKT1cInRvZ2dsZUxvYWRpbmdBbmltYXRpb24oJGV2ZW50KVwiIHBhZ2Vjb250ZW50PlxuICAgIDxuYi10YWIgdGFiSWQ9XCJwZXJzb25hbEluZm9cIiB0YWJUaXRsZT1cInt7J3RhYi5wZXJzb25hbC1pbmZvJyB8IHRyYW5zbGF0ZX19XCIgW2xhenlMb2FkXT1cInRydWVcIj5cbiAgICAgIDxkby1lbXBsb3llZS1lZGl0LXBlcnNvbmFsLWluZm9ybWF0aW9uICNwZXJzb25hbEluZm8+PC9kby1lbXBsb3llZS1lZGl0LXBlcnNvbmFsLWluZm9ybWF0aW9uPlxuICAgIDwvbmItdGFiPlxuICAgIDxuYi10YWIgdGFiSWQ9XCJlZHVjYXRpb25cIiB0YWJUaXRsZT1cInt7J3RhYi5lZHVjYXRpb24nIHwgdHJhbnNsYXRlfX1cIj5cbiAgICAgIDxkby1lbXBsb3llZS1lZGl0LWVkdWNhdGlvbiAjZWR1Y2F0aW9uPjwvZG8tZW1wbG95ZWUtZWRpdC1lZHVjYXRpb24+XG4gICAgPC9uYi10YWI+XG4gICAgPG5iLXRhYiB0YWJJZD1cImVtcGxveWVlU3RhdHVzXCIgdGFiVGl0bGU9XCJ7eyd0YWIuZW1wbG95ZWUtc3RhdHVzJyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgICA8ZG8tZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXMgI2VtcGxveWVlU3RhdHVzPjwvZG8tZW1wbG95ZWUtZWRpdC1lbXBsb3llZS1zdGF0dXM+XG4gICAgPC9uYi10YWI+XG4gIDwvbmItdGFic2V0PlxuPC9kby1wYWdlLW91dGxldD5cbiJdfQ==