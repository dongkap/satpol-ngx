import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-shared';
import { EmployeePromptComponent } from './prompt-employee/employee-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@nebular/theme";
import * as i4 from "../services/job-placement.service";
import * as i5 from "@ngx-translate/core";
export class JobPlacementEditPageComponent extends BaseComponent {
    constructor(injector, router, toastr, dialogService, jobPlacementService) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.jobPlacementService = jobPlacementService;
        this.loading = false;
        this.disabled = false;
        this.destroy$ = new Subject();
        this.reload = false;
        this.columns = [
            { name: 'Employee Name', prop: 'employee.fullname', frozenLeft: true, sortable: true },
            { name: 'NIK', prop: 'employee.idEmployee', frozenLeft: true },
            { name: 'Occupation', prop: 'employee.occupation.name', frozenLeft: true },
        ];
        this.assignmentIds = [];
    }
    ngOnInit() {
        var _a;
        if (this.jobPlacementService.getAssignmentGroup()) {
            this.apiPath = this.api['activity']['datatable-assignment'];
            this.apiPathAdd = this.api['activity']['post-assignment'];
            this.apiPathDelete = this.api['activity']['delete-assignment'];
            this.sort = {
                asc: ['employee.fullname']
            };
            this.sortsDefault = [
                { prop: 'employee.fullname', dir: 'asc' }
            ];
            this.assignmentGroup = this.jobPlacementService.getAssignmentGroup();
            this.loading = true;
            this.keyword = {
                assignmentGroupId: this.assignmentGroup.id,
            };
            this.exec('master', 'get-business-partner', {
                id: (_a = this.jobPlacementService.getAssignmentGroup()) === null || _a === void 0 ? void 0 : _a.bpId
            }).
                pipe(takeUntil(this.destroy$)).subscribe((success) => {
                this.loading = false;
                this.businessPartner = success;
            }, (error) => {
                this.loading = true;
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else {
            this.router.navigate(['/app/mgmt/job-placement']);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onAddAssignment() {
        this.dialogService.open(EmployeePromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                if (data.length) {
                    const employeeIds = [];
                    data.forEach(employee => {
                        employeeIds.push(employee.id);
                    });
                    const dataRequest = {
                        id: this.assignmentGroup.id,
                        bpId: this.assignmentGroup.bpId,
                        employeeIds,
                    };
                    this.disabled = true;
                    this.http.HTTP_AUTH(this.apiPathAdd, dataRequest)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((success) => {
                        this.disabled = false;
                        this.reload = true;
                        if (this.assignmentGroup) {
                            this.assignmentGroup['id'] = success.respStatusMessage['assignmentGroupId'];
                        }
                        this.keyword = {
                            assignmentGroupId: success.respStatusMessage['assignmentGroupId'],
                        };
                        this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                    }, (error) => {
                        this.disabled = false;
                        this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                    });
                }
            }
        });
    }
    onDeleteAssignmentDialog(data, dialog) {
        this.reload = false;
        this.assignmentIds = [];
        data.forEach(value => {
            this.assignmentIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteAssignment(ref) {
        this.disabled = true;
        const data = {
            id: this.assignmentGroup.id,
            assignmentIds: this.assignmentIds,
        };
        this.http.HTTP_AUTH(this.apiPathDelete, data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.disabled = false;
            ref.close();
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
}
JobPlacementEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.DoToastrService }, { token: i3.NbDialogService }, { token: i4.JobPlacementService }], target: i0.ɵɵFactoryTarget.Component });
JobPlacementEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: JobPlacementEditPageComponent, selector: "do-job-placement-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.job-placement-management'\" [url]=\"'/app/mgmt/job-placement'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-label-text\n        [name]=\"'bpName'\"\n        [label]=\"'Business Partner'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.bpName\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.email\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.address\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'telpNumber'\"\n        [label]=\"'Telp.'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.telpNumber\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-datatable\n        [api]=\"apiPath\"\n        [columns]=\"columns\"\n        [filterFn]=\"keyword\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        [edit]=\"false\"\n        (onAdd)=\"onAddAssignment()\"\n        (onDelete)=\"onDeleteAssignmentDialog($event, dialogdeleteassignment)\">\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdeleteassignment let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteAssignment(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i2.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i3.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i2.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-job-placement-edit-page',
                    styleUrls: ['./job-placement-edit-page.component.scss'],
                    templateUrl: './job-placement-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.DoToastrService }, { type: i3.NbDialogService }, { type: i4.JobPlacementService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLXBsYWNlbWVudC1lZGl0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvam9iLXBsYWNlbWVudC9lZGl0L2pvYi1wbGFjZW1lbnQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2pvYi1wbGFjZW1lbnQvZWRpdC9qb2ItcGxhY2VtZW50LWVkaXQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUc1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsYUFBYSxFQUFtRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7O0FBT3RGLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxhQUFrQjtJQXFCbkUsWUFDUyxRQUFrQixFQUNqQixNQUFjLEVBQ2QsTUFBdUIsRUFDdkIsYUFBOEIsRUFDOUIsbUJBQXdDO1FBQ2hELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUxULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBeEIzQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENB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UyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO2FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FDUixDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFDRCxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDOzsySEEvSVUsNkJBQTZCOytHQUE3Qiw2QkFBNkIseUZDbEIxQywrdUVBc0VBOzRGRHBEYSw2QkFBNkI7a0JBTHpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7b0JBQ3ZELFdBQVcsRUFBRSwwQ0FBMEM7aUJBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50LCBEYXRhdGFibGVDb2x1bW4sIERvVG9hc3RyU2VydmljZSwgS2V5d29yZCwgU29ydCwgU29ydFByb3BlcnRpZXMgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgSm9iUGxhY2VtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2pvYi1wbGFjZW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBc3NpZ25tZW50R3JvdXBNb2RlbCB9IGZyb20gJy4uL21vZGVscy9qb2ItcGxhY2VtZW50Lm1vZGVsJztcbmltcG9ydCB7IEVtcGxveWVlUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQtZW1wbG95ZWUvZW1wbG95ZWUtcHJvbXB0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWpvYi1wbGFjZW1lbnQtZWRpdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vam9iLXBsYWNlbWVudC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2pvYi1wbGFjZW1lbnQtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSm9iUGxhY2VtZW50RWRpdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwdWJsaWMgYXNzaWdubWVudEdyb3VwOiBBc3NpZ25tZW50R3JvdXBNb2RlbDtcbiAgcHVibGljIGJ1c2luZXNzUGFydG5lcjogYW55O1xuICBwdWJsaWMgcmVsb2FkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aEFkZDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhEZWxldGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdFbXBsb3llZSBOYW1lJywgcHJvcDogJ2VtcGxveWVlLmZ1bGxuYW1lJywgZnJvemVuTGVmdDogdHJ1ZSwgc29ydGFibGU6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdOSUsnLCBwcm9wOiAnZW1wbG95ZWUuaWRFbXBsb3llZScsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdPY2N1cGF0aW9uJywgcHJvcDogJ2VtcGxveWVlLm9jY3VwYXRpb24ubmFtZScsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgXTtcbiAgcHVibGljIHNvcnQ6IFNvcnQ7XG4gIHB1YmxpYyBzb3J0c0RlZmF1bHQ6IFNvcnRQcm9wZXJ0aWVzW107XG4gIHB1YmxpYyBrZXl3b3JkOiBLZXl3b3JkO1xuICBwdWJsaWMgYXNzaWdubWVudElkczogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB0b2FzdHI6IERvVG9hc3RyU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGpvYlBsYWNlbWVudFNlcnZpY2U6IEpvYlBsYWNlbWVudFNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5qb2JQbGFjZW1lbnRTZXJ2aWNlLmdldEFzc2lnbm1lbnRHcm91cCgpKSB7XG4gICAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnYWN0aXZpdHknXVsnZGF0YXRhYmxlLWFzc2lnbm1lbnQnXTtcbiAgICAgIHRoaXMuYXBpUGF0aEFkZCA9IHRoaXMuYXBpWydhY3Rpdml0eSddWydwb3N0LWFzc2lnbm1lbnQnXTtcbiAgICAgIHRoaXMuYXBpUGF0aERlbGV0ZSA9IHRoaXMuYXBpWydhY3Rpdml0eSddWydkZWxldGUtYXNzaWdubWVudCddO1xuICAgICAgdGhpcy5zb3J0ID0ge1xuICAgICAgICBhc2M6IFsnZW1wbG95ZWUuZnVsbG5hbWUnXVxuICAgICAgfTtcbiAgICAgIHRoaXMuc29ydHNEZWZhdWx0ID0gW1xuICAgICAgICB7IHByb3A6ICdlbXBsb3llZS5mdWxsbmFtZScsIGRpcjogJ2FzYycgfVxuICAgICAgXTtcbiAgICAgIHRoaXMuYXNzaWdubWVudEdyb3VwID0gdGhpcy5qb2JQbGFjZW1lbnRTZXJ2aWNlLmdldEFzc2lnbm1lbnRHcm91cCgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgYXNzaWdubWVudEdyb3VwSWQ6IHRoaXMuYXNzaWdubWVudEdyb3VwLmlkLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZXhlYygnbWFzdGVyJywgJ2dldC1idXNpbmVzcy1wYXJ0bmVyJywge1xuICAgICAgICBpZDogdGhpcy5qb2JQbGFjZW1lbnRTZXJ2aWNlLmdldEFzc2lnbm1lbnRHcm91cCgpPy5icElkXG4gICAgICB9KS5cbiAgICAgIHBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1c2luZXNzUGFydG5lciA9IHN1Y2Nlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55IHwgQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgICBlcnJvciA9IGVycm9yWydlcnJvciddIGFzIEFwaUJhc2VSZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9qb2ItcGxhY2VtZW50J10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkFkZEFzc2lnbm1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRW1wbG95ZWVQcm9tcHRDb21wb25lbnQpXG4gICAgICAub25DbG9zZS5zdWJzY3JpYmUoKGRhdGE6IGFueVtdKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZUlkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbXBsb3llZSA9PiB7XG4gICAgICAgICAgICAgIGVtcGxveWVlSWRzLnB1c2goZW1wbG95ZWUuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhUmVxdWVzdDogYW55ID0ge1xuICAgICAgICAgICAgICBpZDogdGhpcy5hc3NpZ25tZW50R3JvdXAuaWQsXG4gICAgICAgICAgICAgIGJwSWQ6IHRoaXMuYXNzaWdubWVudEdyb3VwLmJwSWQsXG4gICAgICAgICAgICAgIGVtcGxveWVlSWRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhBZGQsIGRhdGFSZXF1ZXN0KVxuICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXNzaWdubWVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaWdubWVudEdyb3VwWydpZCddID0gc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVsnYXNzaWdubWVudEdyb3VwSWQnXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudEdyb3VwSWQ6IHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2VbJ2Fzc2lnbm1lbnRHcm91cElkJ10sXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlQXNzaWdubWVudERpYWxvZyhkYXRhLCBkaWFsb2c6IFRlbXBsYXRlUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnJlbG9hZCA9IGZhbHNlO1xuICAgIHRoaXMuYXNzaWdubWVudElkcyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmFzc2lnbm1lbnRJZHMucHVzaCh2YWx1ZS5pZCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5kZWxldGUnIH0pO1xuICB9XG5cbiAgb25EZWxldGVBc3NpZ25tZW50KHJlZjogTmJEaWFsb2dSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIGlkOiB0aGlzLmFzc2lnbm1lbnRHcm91cC5pZCxcbiAgICAgIGFzc2lnbm1lbnRJZHM6IHRoaXMuYXNzaWdubWVudElkcyxcbiAgICB9O1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoRGVsZXRlLCBkYXRhKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLnJlbG9hZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICB9LFxuICAgICk7XG4gIH1cblxufVxuIiwiPGRvLXBhZ2Utb3V0bGV0IFtoZWFkZXJdPVwiJ2hlYWRlci5qb2ItcGxhY2VtZW50LW1hbmFnZW1lbnQnXCIgW3VybF09XCInL2FwcC9tZ210L2pvYi1wbGFjZW1lbnQnXCIgW2hpZGVmb290ZXJdPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzPVwicm93XCIgcGFnZWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgIDxkby1sYWJlbC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidicE5hbWUnXCJcbiAgICAgICAgW2xhYmVsXT1cIidCdXNpbmVzcyBQYXJ0bmVyJ1wiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nXCJcbiAgICAgICAgW2NvbnRlbnRdPVwiYnVzaW5lc3NQYXJ0bmVyPy5icE5hbWVcIlxuICAgICAgICBbY29sTGFiZWxdPVwiM1wiXG4gICAgICAgIFtjb2xDb250ZW50XT1cIjlcIlxuICAgICAgICBbZGl2aWRlcmxhYmVsXT1cImZhbHNlXCI+XG4gICAgICA8L2RvLWxhYmVsLXRleHQ+XG4gICAgICA8ZG8tbGFiZWwtdGV4dFxuICAgICAgICBbbmFtZV09XCInZW1haWwnXCJcbiAgICAgICAgW2xhYmVsXT1cIidFbWFpbCdcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ1wiXG4gICAgICAgIFtjb250ZW50XT1cImJ1c2luZXNzUGFydG5lcj8uZW1haWxcIlxuICAgICAgICBbY29sTGFiZWxdPVwiM1wiXG4gICAgICAgIFtjb2xDb250ZW50XT1cIjlcIlxuICAgICAgICBbZGl2aWRlcmxhYmVsXT1cImZhbHNlXCI+XG4gICAgICA8L2RvLWxhYmVsLXRleHQ+XG4gICAgICA8ZG8tbGFiZWwtdGV4dFxuICAgICAgICBbbmFtZV09XCInYWRkcmVzcydcIlxuICAgICAgICBbbGFiZWxdPVwiJ0FkZHJlc3MnXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdcIlxuICAgICAgICBbY29udGVudF09XCJidXNpbmVzc1BhcnRuZXI/LmFkZHJlc3NcIlxuICAgICAgICBbY29sTGFiZWxdPVwiM1wiXG4gICAgICAgIFtjb2xDb250ZW50XT1cIjlcIlxuICAgICAgICBbZGl2aWRlcmxhYmVsXT1cImZhbHNlXCI+XG4gICAgICA8L2RvLWxhYmVsLXRleHQ+XG4gICAgICA8ZG8tbGFiZWwtdGV4dFxuICAgICAgICBbbmFtZV09XCIndGVscE51bWJlcidcIlxuICAgICAgICBbbGFiZWxdPVwiJ1RlbHAuJ1wiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nXCJcbiAgICAgICAgW2NvbnRlbnRdPVwiYnVzaW5lc3NQYXJ0bmVyPy50ZWxwTnVtYmVyXCJcbiAgICAgICAgW2NvbExhYmVsXT1cIjNcIlxuICAgICAgICBbY29sQ29udGVudF09XCI5XCJcbiAgICAgICAgW2RpdmlkZXJsYWJlbF09XCJmYWxzZVwiPlxuICAgICAgPC9kby1sYWJlbC10ZXh0PlxuICAgICAgPGRvLWRhdGF0YWJsZVxuICAgICAgICBbYXBpXT1cImFwaVBhdGhcIlxuICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgW2ZpbHRlckZuXT1cImtleXdvcmRcIlxuICAgICAgICBbc29ydF09XCJzb3J0XCJcbiAgICAgICAgW3JlbG9hZEZuXT1cInJlbG9hZFwiXG4gICAgICAgIFtlZGl0XT1cImZhbHNlXCJcbiAgICAgICAgKG9uQWRkKT1cIm9uQWRkQXNzaWdubWVudCgpXCJcbiAgICAgICAgKG9uRGVsZXRlKT1cIm9uRGVsZXRlQXNzaWdubWVudERpYWxvZygkZXZlbnQsIGRpYWxvZ2RlbGV0ZWFzc2lnbm1lbnQpXCI+XG4gICAgICA8L2RvLWRhdGF0YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2RvLXBhZ2Utb3V0bGV0PlxuXG48bmctdGVtcGxhdGUgI2RpYWxvZ2RlbGV0ZWFzc2lnbm1lbnQgbGV0LWRhdGEgbGV0LXJlZj1cImRpYWxvZ1JlZlwiPlxuICA8bmItY2FyZCBhY2NlbnQ9XCJkYW5nZXJcIj5cbiAgICA8bmItY2FyZC1oZWFkZXI+e3sgJ1dhcm5pbmcnIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtaGVhZGVyPlxuICAgIDxuYi1jYXJkLWJvZHk+e3sgZGF0YSB8IHRyYW5zbGF0ZX19PC9uYi1jYXJkLWJvZHk+XG4gICAgPG5iLWNhcmQtZm9vdGVyPlxuICAgICAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICAgICAgW2NvbExhYmVsXT1cIjBcIlxuICAgICAgICBbY29sQnV0dG9uXT1cIjEyXCJcbiAgICAgICAgW3N1Ym1pdFRpdGxlXT1cIidEZWxldGUnXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICAob25SZXNldCk9XCJyZWYuY2xvc2UoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvbkRlbGV0ZUFzc2lnbm1lbnQocmVmKVwiPlxuICAgICAgPC9kby1idXR0b24tc3VibWl0PlxuICAgIDwvbmItY2FyZC1mb290ZXI+XG4gIDwvbmItY2FyZD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=