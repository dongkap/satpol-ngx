import { Component, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
import * as i2 from "@nebular/theme";
import * as i3 from "./personal-information/employee-profile-personal-information.component";
import * as i4 from "./education/employee-profile-education.component";
import * as i5 from "./employee-status/employee-profile-employee-status.component";
import * as i6 from "@ngx-translate/core";
export class EmployeeProfilePageComponent extends BaseComponent {
    constructor(injector, toastr) {
        super(injector);
        this.injector = injector;
        this.toastr = toastr;
        this.loading = false;
        this.tab = 'personalInfo';
        this.destroy$ = new Subject();
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
EmployeeProfilePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePageComponent, deps: [{ token: i0.Injector }, { token: i1.DoToastrService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfilePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfilePageComponent, selector: "do-employee-profile-page", viewQueries: [{ propertyName: "personalInfo", first: true, predicate: ["personalInfo"], descendants: true, static: true }, { propertyName: "education", first: true, predicate: ["education"], descendants: true, static: true }, { propertyName: "employeeStatus", first: true, predicate: ["employeeStatus"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Profile'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"personalInfo\" tabTitle=\"{{'tab.personal-info' | translate}}\" [lazyLoad]=\"true\">\n      <do-employee-profile-personal-information #personalInfo></do-employee-profile-personal-information>\n    </nb-tab>\n    <nb-tab tabId=\"education\" tabTitle=\"{{'tab.education' | translate}}\">\n      <do-employee-profile-education #education></do-employee-profile-education>\n    </nb-tab>\n    <nb-tab tabId=\"employeeStatus\" tabTitle=\"{{'tab.employee-status' | translate}}\">\n      <do-employee-profile-employee-status #employeeStatus></do-employee-profile-employee-status>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i1.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i2.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i3.EmployeeProfilePersonalInformationComponent, selector: "do-employee-profile-personal-information" }, { type: i4.EmployeeProfileEducationComponent, selector: "do-employee-profile-education" }, { type: i5.EmployeeProfileEmployeeStatusComponent, selector: "do-employee-profile-employee-status" }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-page',
                    styleUrls: ['./employee-profile-page.component.scss'],
                    templateUrl: './employee-profile-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.DoToastrService }]; }, propDecorators: { personalInfo: [{
                type: ViewChild,
                args: ['personalInfo', { static: true }]
            }], education: [{
                type: ViewChild,
                args: ['education', { static: true }]
            }], employeeStatus: [{
                type: ViewChild,
                args: ['employeeStatus', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3Byb2ZpbGUvcGFnZS9lbXBsb3llZS1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvcHJvZmlsZS9wYWdlL2VtcGxveWVlLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF1QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7QUFVcEUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGFBQWtCO0lBVWxFLFlBQW1CLFFBQWtCLEVBQVUsTUFBdUI7UUFDcEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBREMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBUi9ELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUMxQixhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFRdEQsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFD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QkFBNUQsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IEVtcGxveWVlUHJvZmlsZVBlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BlcnNvbmFsLWluZm9ybWF0aW9uL2VtcGxveWVlLXByb2ZpbGUtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlUHJvZmlsZUVkdWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZWR1Y2F0aW9uL2VtcGxveWVlLXByb2ZpbGUtZWR1Y2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZVByb2ZpbGVFbXBsb3llZVN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vZW1wbG95ZWUtc3RhdHVzL2VtcGxveWVlLXByb2ZpbGUtZW1wbG95ZWUtc3RhdHVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWVtcGxveWVlLXByb2ZpbGUtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2VtcGxveWVlLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1wbG95ZWUtcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVQcm9maWxlUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGFiOiBzdHJpbmcgPSAncGVyc29uYWxJbmZvJztcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgncGVyc29uYWxJbmZvJywgeyBzdGF0aWM6IHRydWUgfSkgcGVyc29uYWxJbmZvOiBFbXBsb3llZVByb2ZpbGVQZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdlZHVjYXRpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBlZHVjYXRpb246IEVtcGxveWVlUHJvZmlsZUVkdWNhdGlvbkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZW1wbG95ZWVTdGF0dXMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBlbXBsb3llZVN0YXR1czogRW1wbG95ZWVQcm9maWxlRW1wbG95ZWVTdGF0dXNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSB0b2FzdHI6IERvVG9hc3RyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUxvYWRpbmdBbmltYXRpb24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudGFiID0gZXZlbnQudGFiSWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy50YWIgPT09ICdwZXJzb25hbEluZm8nKSB7XG4gICAgICB0aGlzLnBlcnNvbmFsSW5mby5sb2FkRGF0YU1lbnUoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKGVycm9yOiBhbnkgfCBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3JbJ2Vycm9yJ10gYXMgQXBpQmFzZVJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PT0gJ2VkdWNhdGlvbicpIHtcbiAgICAgIHRoaXMuZWR1Y2F0aW9uLmxvYWREYXRhTWVudSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9LCAoZXJyb3I6IGFueSB8IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvclsnZXJyb3InXSBhcyBBcGlCYXNlUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbXBsb3llZVN0YXR1cy5sb2FkRGF0YU1lbnUoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSwgKGVycm9yOiBhbnkgfCBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3JbJ2Vycm9yJ10gYXMgQXBpQmFzZVJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkby1wYWdlLW91dGxldCBbaGVhZGVyXT1cIidQcm9maWxlJ1wiIFtoaWRlZm9vdGVyXT1cInRydWVcIj5cbiAgPG5iLXRhYnNldCBmdWxsV2lkdGggKGNoYW5nZVRhYik9XCJ0b2dnbGVMb2FkaW5nQW5pbWF0aW9uKCRldmVudClcIiBwYWdlY29udGVudD5cbiAgICA8bmItdGFiIHRhYklkPVwicGVyc29uYWxJbmZvXCIgdGFiVGl0bGU9XCJ7eyd0YWIucGVyc29uYWwtaW5mbycgfCB0cmFuc2xhdGV9fVwiIFtsYXp5TG9hZF09XCJ0cnVlXCI+XG4gICAgICA8ZG8tZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbiAjcGVyc29uYWxJbmZvPjwvZG8tZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbj5cbiAgICA8L25iLXRhYj5cbiAgICA8bmItdGFiIHRhYklkPVwiZWR1Y2F0aW9uXCIgdGFiVGl0bGU9XCJ7eyd0YWIuZWR1Y2F0aW9uJyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgICA8ZG8tZW1wbG95ZWUtcHJvZmlsZS1lZHVjYXRpb24gI2VkdWNhdGlvbj48L2RvLWVtcGxveWVlLXByb2ZpbGUtZWR1Y2F0aW9uPlxuICAgIDwvbmItdGFiPlxuICAgIDxuYi10YWIgdGFiSWQ9XCJlbXBsb3llZVN0YXR1c1wiIHRhYlRpdGxlPVwie3sndGFiLmVtcGxveWVlLXN0YXR1cycgfCB0cmFuc2xhdGV9fVwiPlxuICAgICAgPGRvLWVtcGxveWVlLXByb2ZpbGUtZW1wbG95ZWUtc3RhdHVzICNlbXBsb3llZVN0YXR1cz48L2RvLWVtcGxveWVlLXByb2ZpbGUtZW1wbG95ZWUtc3RhdHVzPlxuICAgIDwvbmItdGFiPlxuICA8L25iLXRhYnNldD5cbjwvZG8tcGFnZS1vdXRsZXQ+XG4iXX0=