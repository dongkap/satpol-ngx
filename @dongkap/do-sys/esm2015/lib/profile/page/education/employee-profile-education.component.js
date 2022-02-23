import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { EmployeeProfileEducationFormalPromptComponent } from './prompt-formal/profile-education-formal-prompt.component';
import { EmployeeProfileEducationNonFormalPromptComponent } from './prompt-nonformal/profile-education-nonformal-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@ngx-translate/core";
export class EmployeeProfileEducationComponent extends BaseFormComponent {
    constructor(injector, dialogService) {
        super(injector);
        this.dialogService = dialogService;
        this.reloadEducation = false;
        this.reloadTraining = false;
        this.columnsEducation = [
            { name: 'Level', prop: 'educationalLevel', frozenLeft: true },
            { name: 'School', prop: 'schoolName', frozenLeft: true },
            { name: 'Year', prop: 'startYear', frozenLeft: true },
        ];
        this.columnsTraining = [
            { name: 'Training Name', prop: 'name', frozenLeft: true },
            { name: 'Start Date', prop: 'startDate', frozenLeft: true },
            { name: 'End Date', prop: 'endDate', frozenLeft: true },
        ];
        this.educationIds = [];
        this.trainingIds = [];
        this.loadingSubject$ = new Subject();
        this.apiPathEducation = this.api['profile']['get-profile-education-employee'];
        this.apiPathTraining = this.api['profile']['get-profile-training-employee'];
        this.apiPathDeleteEducation = this.api['profile']['delete-profile-employee-education'];
        this.apiPathDeleteTraining = this.api['profile']['delete-profile-employee-training'];
        this.sortEducation = {
            desc: ['startYear']
        };
        this.sortTraining = {
            desc: ['startDate']
        };
    }
    ngOnInit() {
    }
    loadDataMenu() {
        this.reloadEducation = true;
        this.reloadTraining = true;
        return this.loadingSubject$.asObservable();
    }
    ngOnDestroy() { }
    onAddEducation() {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeProfileEducationFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                super.onSubmit(data, 'profile', 'post-profile-employee-education')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadEducation = true;
                    }
                });
            }
        });
    }
    onAddTraining() {
        this.reloadTraining = false;
        this.dialogService.open(EmployeeProfileEducationNonFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                super.onSubmit(data, 'profile', 'post-profile-employee-training')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadTraining = true;
                    }
                });
            }
        });
    }
    onEditEducation(data) {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeProfileEducationFormalPromptComponent, {
            context: {
                education: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                super.onSubmit(result, 'profile', 'post-profile-employee-education')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadEducation = true;
                    }
                });
            }
        });
    }
    onEditTraining(data) {
        this.reloadTraining = false;
        this.dialogService.open(EmployeeProfileEducationNonFormalPromptComponent, {
            context: {
                training: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                super.onSubmit(result, 'profile', 'post-profile-employee-training')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadTraining = true;
                    }
                });
            }
        });
    }
    onDeleteEducationDialog(data, dialog) {
        this.reloadEducation = false;
        this.educationIds = [];
        data.forEach(value => {
            this.educationIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteTrainingDialog(data, dialog) {
        this.reloadTraining = false;
        this.trainingIds = [];
        data.forEach(value => {
            this.trainingIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteEducation(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDeleteEducation, this.educationIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.disabled = false;
            ref.close();
            this.reloadEducation = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onDeleteTraining(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDeleteTraining, this.trainingIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.reloadTraining = true;
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onLoadEducation() {
        this.loadingSubject$.next(true);
    }
    onLoadTraining() {
        this.loadingSubject$.next(true);
    }
}
EmployeeProfileEducationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationComponent, deps: [{ token: i0.Injector }, { token: i1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileEducationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationComponent, selector: "do-employee-profile-education", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <div class=\"accordion-container\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathEducation\"\n              [columns]=\"columnsEducation\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortEducation\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadEducation\"\n              (onLoading)=\"onLoadEducation()\"\n              (onEdit)=\"onEditEducation($event)\"\n              (onAdd)=\"onAddEducation()\"\n              (onDelete)=\"onDeleteEducationDialog($event, dialogdeleteeducation)\">\n            </do-datatable>              \n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathTraining\"\n              [columns]=\"columnsTraining\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortTraining\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadTraining\"\n              (onLoading)=\"onLoadTraining()\"\n              (onEdit)=\"onEditTraining($event)\"\n              (onAdd)=\"onAddTraining()\"\n              (onDelete)=\"onDeleteTrainingDialog($event, dialogdeletetraining)\">\n            </do-datatable>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </div>\n</div>\n\n<ng-template #dialogdeleteeducation let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteEducation(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialogdeletetraining let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteTraining(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i2.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i2.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-education',
                    styleUrls: ['./employee-profile-education.component.scss'],
                    templateUrl: './employee-profile-education.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.NbDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtcHJvZmlsZS1lZHVjYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvcHJvZmlsZS9wYWdlL2VkdWNhdGlvbi9lbXBsb3llZS1wcm9maWxlLWVkdWNhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wcm9maWxlL3BhZ2UvZWR1Y2F0aW9uL2VtcGxveWVlLXByb2ZpbGUtZWR1Y2F0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBa0MsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFrQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFILE9BQU8sRUFBRSxnREFBZ0QsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7OztBQU9uSSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsaUJBQXNCO0lBeUIzRSxZQUNFLFFBQWtCLEVBQ1YsYUFBOEI7UUFDcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRFYsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBekJqQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUtoQyxxQkFBZ0IsR0FBc0I7WUFDM0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxV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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmLCBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIEh0dHBCYXNlTW9kZWwsIFJlc3BvbnNlQ29kZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiwgS2V5d29yZCwgU29ydCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBFbXBsb3llZVByb2ZpbGVFZHVjYXRpb25Gb3JtYWxQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3Byb21wdC1mb3JtYWwvcHJvZmlsZS1lZHVjYXRpb24tZm9ybWFsLXByb21wdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uTm9uRm9ybWFsUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQtbm9uZm9ybWFsL3Byb2ZpbGUtZWR1Y2F0aW9uLW5vbmZvcm1hbC1wcm9tcHQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZW1wbG95ZWUtcHJvZmlsZS1lZHVjYXRpb24nLFxuICBzdHlsZVVybHM6IFsnLi9lbXBsb3llZS1wcm9maWxlLWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1wbG95ZWUtcHJvZmlsZS1lZHVjYXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVByb2ZpbGVFZHVjYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyByZWxvYWRFZHVjYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlbG9hZFRyYWluaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhcGlQYXRoRWR1Y2F0aW9uOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aFRyYWluaW5nOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aERlbGV0ZUVkdWNhdGlvbjogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhEZWxldGVUcmFpbmluZzogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGNvbHVtbnNFZHVjYXRpb246IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0xldmVsJywgcHJvcDogJ2VkdWNhdGlvbmFsTGV2ZWwnLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnU2Nob29sJywgcHJvcDogJ3NjaG9vbE5hbWUnLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnWWVhcicsIHByb3A6ICdzdGFydFllYXInLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gIF07XG4gIHB1YmxpYyBjb2x1bW5zVHJhaW5pbmc6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ1RyYWluaW5nIE5hbWUnLCBwcm9wOiAnbmFtZScsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdTdGFydCBEYXRlJywgcHJvcDogJ3N0YXJ0RGF0ZScsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdFbmQgRGF0ZScsIHByb3A6ICdlbmREYXRlJywgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICBdO1xuICBwdWJsaWMgc29ydEVkdWNhdGlvbjogU29ydDtcbiAgcHVibGljIHNvcnRUcmFpbmluZzogU29ydDtcbiAgcHVibGljIGVkdWNhdGlvbklkczogYW55W10gPSBbXTtcbiAgcHVibGljIHRyYWluaW5nSWRzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMga2V5d29yZDogS2V5d29yZDtcbiAgcHJpdmF0ZSBsb2FkaW5nU3ViamVjdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgICAgc3VwZXIoaW5qZWN0b3IpO1xuICAgICAgdGhpcy5hcGlQYXRoRWR1Y2F0aW9uID0gdGhpcy5hcGlbJ3Byb2ZpbGUnXVsnZ2V0LXByb2ZpbGUtZWR1Y2F0aW9uLWVtcGxveWVlJ107XG4gICAgICB0aGlzLmFwaVBhdGhUcmFpbmluZyA9IHRoaXMuYXBpWydwcm9maWxlJ11bJ2dldC1wcm9maWxlLXRyYWluaW5nLWVtcGxveWVlJ107XG4gICAgICB0aGlzLmFwaVBhdGhEZWxldGVFZHVjYXRpb24gPSB0aGlzLmFwaVsncHJvZmlsZSddWydkZWxldGUtcHJvZmlsZS1lbXBsb3llZS1lZHVjYXRpb24nXTtcbiAgICAgIHRoaXMuYXBpUGF0aERlbGV0ZVRyYWluaW5nID0gdGhpcy5hcGlbJ3Byb2ZpbGUnXVsnZGVsZXRlLXByb2ZpbGUtZW1wbG95ZWUtdHJhaW5pbmcnXTtcbiAgICAgIHRoaXMuc29ydEVkdWNhdGlvbiA9IHtcbiAgICAgICAgZGVzYzogWydzdGFydFllYXInXVxuICAgICAgfTtcbiAgICAgIHRoaXMuc29ydFRyYWluaW5nID0ge1xuICAgICAgICBkZXNjOiBbJ3N0YXJ0RGF0ZSddXG4gICAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBsb2FkRGF0YU1lbnUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLnJlbG9hZEVkdWNhdGlvbiA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWRUcmFpbmluZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZ1N1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uQWRkRWR1Y2F0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkRWR1Y2F0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3Byb2ZpbGUnLCAncG9zdC1wcm9maWxlLWVtcGxveWVlLWVkdWNhdGlvbicpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRFZHVjYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbkFkZFRyYWluaW5nKCk6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkVHJhaW5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihFbXBsb3llZVByb2ZpbGVFZHVjYXRpb25Ob25Gb3JtYWxQcm9tcHRDb21wb25lbnQpXG4gICAgICAub25DbG9zZS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAncHJvZmlsZScsICdwb3N0LXByb2ZpbGUtZW1wbG95ZWUtdHJhaW5pbmcnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX0RFRkFVTFQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkVHJhaW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbkVkaXRFZHVjYXRpb24oZGF0YSk6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkRWR1Y2F0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50LCB7XG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBlZHVjYXRpb246IGRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgKHN1cGVyLm9uU3VibWl0KHJlc3VsdCwgJ3Byb2ZpbGUnLCAncG9zdC1wcm9maWxlLWVtcGxveWVlLWVkdWNhdGlvbicpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRFZHVjYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbkVkaXRUcmFpbmluZyhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWRUcmFpbmluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKEVtcGxveWVlUHJvZmlsZUVkdWNhdGlvbk5vbkZvcm1hbFByb21wdENvbXBvbmVudCwge1xuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgdHJhaW5pbmc6IGRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgKHN1cGVyLm9uU3VibWl0KHJlc3VsdCwgJ3Byb2ZpbGUnLCAncG9zdC1wcm9maWxlLWVtcGxveWVlLXRyYWluaW5nJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZFRyYWluaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgb25EZWxldGVFZHVjYXRpb25EaWFsb2coZGF0YSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWRFZHVjYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmVkdWNhdGlvbklkcyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmVkdWNhdGlvbklkcy5wdXNoKHZhbHVlLmlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIGRpYWxvZyxcbiAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmRlbGV0ZScgfSk7XG4gIH1cblxuICBvbkRlbGV0ZVRyYWluaW5nRGlhbG9nKGRhdGEsIGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkVHJhaW5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRyYWluaW5nSWRzID0gW107XG4gICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudHJhaW5pbmdJZHMucHVzaCh2YWx1ZS5pZCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5kZWxldGUnIH0pO1xuICB9XG5cbiAgb25EZWxldGVFZHVjYXRpb24ocmVmOiBOYkRpYWxvZ1JlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhEZWxldGVFZHVjYXRpb24sIHRoaXMuZWR1Y2F0aW9uSWRzKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLnJlbG9hZEVkdWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICB9LFxuICAgICk7XG4gIH1cblxuICBvbkRlbGV0ZVRyYWluaW5nKHJlZjogTmJEaWFsb2dSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoRGVsZXRlVHJhaW5pbmcsIHRoaXMudHJhaW5pbmdJZHMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5yZWxvYWRUcmFpbmluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25Mb2FkRWR1Y2F0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvbkxvYWRUcmFpbmluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0JC5uZXh0KHRydWUpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiPlxuICAgICAgPG5iLWFjY29yZGlvbiBtdWx0aT5cbiAgICAgICAgPG5iLWFjY29yZGlvbi1pdGVtIFtleHBhbmRlZF09XCJ0cnVlXCI+XG4gICAgICAgICAgPG5iLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgIHt7J0Zvcm1hbCBFZHVjYXRpb24nIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICA8bmItYWNjb3JkaW9uLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDxkby1kYXRhdGFibGVcbiAgICAgICAgICAgICAgW2FwaV09XCJhcGlQYXRoRWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc0VkdWNhdGlvblwiXG4gICAgICAgICAgICAgIFtmaWx0ZXJGbl09XCJrZXl3b3JkXCJcbiAgICAgICAgICAgICAgW3NvcnRdPVwic29ydEVkdWNhdGlvblwiXG4gICAgICAgICAgICAgIFtzdGFydFdpdGhPcGVuRGF0YV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIFtyZWxvYWRGbl09XCJyZWxvYWRFZHVjYXRpb25cIlxuICAgICAgICAgICAgICAob25Mb2FkaW5nKT1cIm9uTG9hZEVkdWNhdGlvbigpXCJcbiAgICAgICAgICAgICAgKG9uRWRpdCk9XCJvbkVkaXRFZHVjYXRpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChvbkFkZCk9XCJvbkFkZEVkdWNhdGlvbigpXCJcbiAgICAgICAgICAgICAgKG9uRGVsZXRlKT1cIm9uRGVsZXRlRWR1Y2F0aW9uRGlhbG9nKCRldmVudCwgZGlhbG9nZGVsZXRlZWR1Y2F0aW9uKVwiPlxuICAgICAgICAgICAgPC9kby1kYXRhdGFibGU+ICAgICAgICAgICAgICBcbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgIDxuYi1hY2NvcmRpb24taXRlbSBbZXhwYW5kZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgICB7eydOb24gRm9ybWFsIEVkdWNhdGlvbicgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyPlxuICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1ib2R5PlxuICAgICAgICAgICAgPGRvLWRhdGF0YWJsZVxuICAgICAgICAgICAgICBbYXBpXT1cImFwaVBhdGhUcmFpbmluZ1wiXG4gICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNUcmFpbmluZ1wiXG4gICAgICAgICAgICAgIFtmaWx0ZXJGbl09XCJrZXl3b3JkXCJcbiAgICAgICAgICAgICAgW3NvcnRdPVwic29ydFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgW3N0YXJ0V2l0aE9wZW5EYXRhXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgW3JlbG9hZEZuXT1cInJlbG9hZFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgKG9uTG9hZGluZyk9XCJvbkxvYWRUcmFpbmluZygpXCJcbiAgICAgICAgICAgICAgKG9uRWRpdCk9XCJvbkVkaXRUcmFpbmluZygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKG9uQWRkKT1cIm9uQWRkVHJhaW5pbmcoKVwiXG4gICAgICAgICAgICAgIChvbkRlbGV0ZSk9XCJvbkRlbGV0ZVRyYWluaW5nRGlhbG9nKCRldmVudCwgZGlhbG9nZGVsZXRldHJhaW5pbmcpXCI+XG4gICAgICAgICAgICA8L2RvLWRhdGF0YWJsZT5cbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0+XG4gICAgICA8L25iLWFjY29yZGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNkaWFsb2dkZWxldGVlZHVjYXRpb24gbGV0LWRhdGEgbGV0LXJlZj1cImRpYWxvZ1JlZlwiPlxuICA8bmItY2FyZCBhY2NlbnQ9XCJkYW5nZXJcIj5cbiAgICA8bmItY2FyZC1oZWFkZXI+e3sgJ1dhcm5pbmcnIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtaGVhZGVyPlxuICAgIDxuYi1jYXJkLWJvZHk+e3sgZGF0YSB8IHRyYW5zbGF0ZX19PC9uYi1jYXJkLWJvZHk+XG4gICAgPG5iLWNhcmQtZm9vdGVyPlxuICAgICAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICAgICAgW2NvbExhYmVsXT1cIjBcIlxuICAgICAgICBbY29sQnV0dG9uXT1cIjEyXCJcbiAgICAgICAgW3N1Ym1pdFRpdGxlXT1cIidEZWxldGUnXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICAob25SZXNldCk9XCJyZWYuY2xvc2UoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvbkRlbGV0ZUVkdWNhdGlvbihyZWYpXCI+XG4gICAgICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG4gICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgPC9uYi1jYXJkPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkaWFsb2dkZWxldGV0cmFpbmluZyBsZXQtZGF0YSBsZXQtcmVmPVwiZGlhbG9nUmVmXCI+XG4gIDxuYi1jYXJkIGFjY2VudD1cImRhbmdlclwiPlxuICAgIDxuYi1jYXJkLWhlYWRlcj57eyAnV2FybmluZycgfCB0cmFuc2xhdGV9fTwvbmItY2FyZC1oZWFkZXI+XG4gICAgPG5iLWNhcmQtYm9keT57eyBkYXRhIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtYm9keT5cbiAgICA8bmItY2FyZC1mb290ZXI+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbY29sTGFiZWxdPVwiMFwiXG4gICAgICAgIFtjb2xCdXR0b25dPVwiMTJcIlxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiJ0RlbGV0ZSdcIlxuICAgICAgICBbcmVzZXRUaXRsZV09XCInQ2FuY2VsJ1wiXG4gICAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgICAgIChvblJlc2V0KT1cInJlZi5jbG9zZSgpXCJcbiAgICAgICAgKG9uU3VibWl0KT1cIm9uRGVsZXRlVHJhaW5pbmcocmVmKVwiPlxuICAgICAgPC9kby1idXR0b24tc3VibWl0PlxuICAgIDwvbmItY2FyZC1mb290ZXI+XG4gIDwvbmItY2FyZD5cbjwvbmctdGVtcGxhdGU+Il19