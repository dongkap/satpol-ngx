import { Component } from '@angular/core';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
import * as i2 from "@angular/router";
export class EmployeeAddPageComponent extends BaseFormComponent {
    constructor(injector, service, router) {
        super(injector);
        this.injector = injector;
        this.service = service;
        this.router = router;
    }
    formIsValid() {
        return this.service.formIsValid();
    }
    onSubmit(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const employee = {
            fullname: data['personal-information']['name'],
            username: data['personal-information']['email'],
            email: data['personal-information']['email'],
            idEmployee: data['personal-information']['nik'],
            lastEducation: (_a = data['education']['educationalLevel']) === null || _a === void 0 ? void 0 : _a.value,
            parentId: (_b = data['employee-status']['employeeParent']) === null || _b === void 0 ? void 0 : _b.value,
            roles: null,
            occupation: {
                code: (_c = data['employee-status']['occupation']) === null || _c === void 0 ? void 0 : _c.value,
            },
            contact: {
                phoneNumber: data['personal-information']['phoneNumber'],
                address: data['personal-information']['address'],
            },
            personalInfo: {
                idNumber: data['personal-information']['idNumber'],
                genderCode: data['personal-information']['gender'],
                placeOfBirth: data['personal-information']['placeOfBirth'],
                dateOfBirth: data['personal-information']['dateOfBirth'],
                height: data['personal-information']['height'],
                weight: data['personal-information']['weight'],
                bloodType: (_d = data['personal-information']['bloodType']) === null || _d === void 0 ? void 0 : _d.value,
            },
            education: {
                educationalLevel: (_e = data['education']['educationalLevel']) === null || _e === void 0 ? void 0 : _e.value,
                schoolName: data['education']['school'],
                startYear: data['education']['startYear'],
                endYear: data['education']['endYear'],
            },
            training: {
                name: data['education']['trainingName'],
                startDate: (_f = data['education']['trainingDate']) === null || _f === void 0 ? void 0 : _f.start,
                endDate: (_g = data['education']['trainingDate']) === null || _g === void 0 ? void 0 : _g.end,
            },
        };
        const roles = [];
        const rolesTmp = (_h = data['employee-status']) === null || _h === void 0 ? void 0 : _h.role;
        rolesTmp.forEach(role => {
            roles.push({
                authority: role.value,
            });
        });
        employee['roles'] = roles;
        super.onSubmit(employee, 'security', 'post-employee')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/employee']);
            }
        });
    }
}
EmployeeAddPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPageComponent, deps: [{ token: i0.Injector }, { token: i1.DoWizardService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
EmployeeAddPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddPageComponent, selector: "do-employee-add-page", usesInheritance: true, ngImport: i0, template: "<do-wizard (onSubmit)=\"onSubmit($event)\" [loading]=\"disabled\">\n</do-wizard>", styles: [""], components: [{ type: i1.DoWizardComponent, selector: "do-wizard", inputs: ["extra", "loading"], outputs: ["onNext", "onPrevious", "onSubmit"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-add-page',
                    templateUrl: 'employee-add-page.component.html',
                    styleUrls: ['./employee-add-page.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.DoWizardService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtYWRkLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvYWRkL2VtcGxveWVlLWFkZC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2VtcGxveWVlL2FkZC9lbXBsb3llZS1hZGQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBbUIsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU8zQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsaUJBQXNCO0lBRWxFLFlBQ1MsUUFBa0IsRUFDakIsT0FBd0IsRUFDeEIsTUFBYztRQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFeEIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFTOztRQUNoQixNQUFNLFFBQVEsR0FBUTtZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzlDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDL0MsS0FBSyxFQUFFLElBQUksQ0FBQyxz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LEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O3NIQWpFVSx3QkFBd0I7MEdBQXhCLHdCQUF3QixtRkNackMsa0ZBQ1k7NEZEV0Msd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIFJlc3BvbnNlQ29kZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIERvV2l6YXJkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWVtcGxveWVlLWFkZC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdlbXBsb3llZS1hZGQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VtcGxveWVlLWFkZC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQWRkUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBEb1dpemFyZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIGZvcm1Jc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZm9ybUlzVmFsaWQoKTtcbiAgfVxuXG4gIG9uU3VibWl0KGRhdGE6IGFueSl7XG4gICAgY29uc3QgZW1wbG95ZWU6IGFueSA9IHtcbiAgICAgIGZ1bGxuYW1lOiBkYXRhWydwZXJzb25hbC1pbmZvcm1hdGlvbiddWyduYW1lJ10sXG4gICAgICB1c2VybmFtZTogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsnZW1haWwnXSxcbiAgICAgIGVtYWlsOiBkYXRhWydwZXJzb25hbC1pbmZvcm1hdGlvbiddWydlbWFpbCddLFxuICAgICAgaWRFbXBsb3llZTogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsnbmlrJ10sXG4gICAgICBsYXN0RWR1Y2F0aW9uOiBkYXRhWydlZHVjYXRpb24nXVsnZWR1Y2F0aW9uYWxMZXZlbCddPy52YWx1ZSxcbiAgICAgIHBhcmVudElkOiBkYXRhWydlbXBsb3llZS1zdGF0dXMnXVsnZW1wbG95ZWVQYXJlbnQnXT8udmFsdWUsXG4gICAgICByb2xlczogbnVsbCxcbiAgICAgIG9jY3VwYXRpb246IHtcbiAgICAgICAgY29kZTogZGF0YVsnZW1wbG95ZWUtc3RhdHVzJ11bJ29jY3VwYXRpb24nXT8udmFsdWUsXG4gICAgICB9LFxuICAgICAgY29udGFjdDoge1xuICAgICAgICBwaG9uZU51bWJlcjogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsncGhvbmVOdW1iZXInXSxcbiAgICAgICAgYWRkcmVzczogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsnYWRkcmVzcyddLFxuICAgICAgfSxcbiAgICAgIHBlcnNvbmFsSW5mbzoge1xuICAgICAgICBpZE51bWJlcjogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsnaWROdW1iZXInXSxcbiAgICAgICAgZ2VuZGVyQ29kZTogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsnZ2VuZGVyJ10sXG4gICAgICAgIHBsYWNlT2ZCaXJ0aDogZGF0YVsncGVyc29uYWwtaW5mb3JtYXRpb24nXVsncGxhY2VPZkJpcnRoJ10sXG4gICAgICAgIGRhdGVPZkJpcnRoOiBkYXRhWydwZXJzb25hbC1pbmZvcm1hdGlvbiddWydkYXRlT2ZCaXJ0aCddLFxuICAgICAgICBoZWlnaHQ6IGRhdGFbJ3BlcnNvbmFsLWluZm9ybWF0aW9uJ11bJ2hlaWdodCddLFxuICAgICAgICB3ZWlnaHQ6IGRhdGFbJ3BlcnNvbmFsLWluZm9ybWF0aW9uJ11bJ3dlaWdodCddLFxuICAgICAgICBibG9vZFR5cGU6IGRhdGFbJ3BlcnNvbmFsLWluZm9ybWF0aW9uJ11bJ2Jsb29kVHlwZSddPy52YWx1ZSxcbiAgICAgIH0sXG4gICAgICBlZHVjYXRpb246IHtcbiAgICAgICAgZWR1Y2F0aW9uYWxMZXZlbDogZGF0YVsnZWR1Y2F0aW9uJ11bJ2VkdWNhdGlvbmFsTGV2ZWwnXT8udmFsdWUsXG4gICAgICAgIHNjaG9vbE5hbWU6IGRhdGFbJ2VkdWNhdGlvbiddWydzY2hvb2wnXSxcbiAgICAgICAgc3RhcnRZZWFyOiBkYXRhWydlZHVjYXRpb24nXVsnc3RhcnRZZWFyJ10sXG4gICAgICAgIGVuZFllYXI6IGRhdGFbJ2VkdWNhdGlvbiddWydlbmRZZWFyJ10sXG4gICAgICB9LFxuICAgICAgdHJhaW5pbmc6IHtcbiAgICAgICAgbmFtZTogZGF0YVsnZWR1Y2F0aW9uJ11bJ3RyYWluaW5nTmFtZSddLFxuICAgICAgICBzdGFydERhdGU6IGRhdGFbJ2VkdWNhdGlvbiddWyd0cmFpbmluZ0RhdGUnXT8uc3RhcnQsXG4gICAgICAgIGVuZERhdGU6IGRhdGFbJ2VkdWNhdGlvbiddWyd0cmFpbmluZ0RhdGUnXT8uZW5kLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJvbGVzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IHJvbGVzVG1wOiBhbnlbXSA9IGRhdGFbJ2VtcGxveWVlLXN0YXR1cyddPy5yb2xlO1xuICAgIHJvbGVzVG1wLmZvckVhY2gocm9sZSA9PiB7XG4gICAgICByb2xlcy5wdXNoKHtcbiAgICAgICAgYXV0aG9yaXR5OiByb2xlLnZhbHVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZW1wbG95ZWVbJ3JvbGVzJ10gPSByb2xlcztcbiAgICAoc3VwZXIub25TdWJtaXQoZW1wbG95ZWUsICdzZWN1cml0eScsICdwb3N0LWVtcGxveWVlJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX0RFRkFVTFQudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2VtcGxveWVlJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZG8td2l6YXJkIChvblN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCIgW2xvYWRpbmddPVwiZGlzYWJsZWRcIj5cbjwvZG8td2l6YXJkPiJdfQ==