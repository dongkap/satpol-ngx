import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { EmployeeEducationFormalPromptComponent } from './prompt-formal/education-formal-prompt.component';
import { EmployeeEducationNonFormalPromptComponent } from './prompt-nonformal/education-nonformal-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/employee.service";
import * as i3 from "@nebular/theme";
import * as i4 from "@dongkap/do-shared";
import * as i5 from "@ngx-translate/core";
export class EmployeeEditEducationComponent extends BaseFormComponent {
    constructor(injector, router, employeeService, dialogService) {
        super(injector);
        this.router = router;
        this.employeeService = employeeService;
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
        if (!this.employeeService.getEmployeeHeader()) {
            this.router.navigate(['/app/mgmt/employee']);
        }
        this.apiPathEducation = this.api['security']['datatable-education-employee'];
        this.apiPathTraining = this.api['security']['datatable-training-employee'];
        this.apiPathDeleteEducation = this.api['security']['delete-employee-education'];
        this.apiPathDeleteTraining = this.api['security']['delete-employee-training'];
        this.sortEducation = {
            desc: ['startYear']
        };
        this.sortTraining = {
            desc: ['startDate']
        };
    }
    ngOnInit() {
        var _a;
        this.keyword = {
            employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id,
        };
    }
    loadDataMenu() {
        this.reloadEducation = true;
        this.reloadTraining = true;
        return this.loadingSubject$.asObservable();
    }
    ngOnDestroy() { }
    onAddEducation() {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeEducationFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                data['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(data, 'security', 'post-employee-education')
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
        this.dialogService.open(EmployeeEducationNonFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                data['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(data, 'security', 'post-employee-training')
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
        this.dialogService.open(EmployeeEducationFormalPromptComponent, {
            context: {
                education: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                result['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(result, 'security', 'post-employee-education')
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
        this.dialogService.open(EmployeeEducationNonFormalPromptComponent, {
            context: {
                training: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                result['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(result, 'security', 'post-employee-training')
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
EmployeeEditEducationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEducationComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.EmployeeService }, { token: i3.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditEducationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditEducationComponent, selector: "do-employee-edit-education", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <div class=\"accordion-container\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathEducation\"\n              [columns]=\"columnsEducation\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortEducation\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadEducation\"\n              (onLoading)=\"onLoadEducation()\"\n              (onEdit)=\"onEditEducation($event)\"\n              (onAdd)=\"onAddEducation()\"\n              (onDelete)=\"onDeleteEducationDialog($event, dialogdeleteeducation)\">\n            </do-datatable>              \n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathTraining\"\n              [columns]=\"columnsTraining\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortTraining\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadTraining\"\n              (onLoading)=\"onLoadTraining()\"\n              (onEdit)=\"onEditTraining($event)\"\n              (onAdd)=\"onAddTraining()\"\n              (onDelete)=\"onDeleteTrainingDialog($event, dialogdeletetraining)\">\n            </do-datatable>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </div>\n</div>\n\n<ng-template #dialogdeleteeducation let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteEducation(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialogdeletetraining let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteTraining(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i3.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i3.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i3.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i3.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i4.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i3.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i4.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEducationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-education',
                    styleUrls: ['./employee-edit-education.component.scss'],
                    templateUrl: './employee-edit-education.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.EmployeeService }, { type: i3.NbDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtZWRpdC1lZHVjYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvZWRpdC9lZHVjYXRpb24vZW1wbG95ZWUtZWRpdC1lZHVjYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvZWRpdC9lZHVjYXRpb24vZW1wbG95ZWUtZWRpdC1lZHVjYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFHNUUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFrQyxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQWtDLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDM0csT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0seURBQXlELENBQUM7Ozs7Ozs7QUFPcEgsTUFBTSxPQUFPLDhCQUErQixTQUFRLGlCQUFzQjtJQXlCeEUsWUFDRSxRQUFrQixFQUNWLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxhQUE4QjtRQUNwQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQTNCakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFLaEMscUJBQWdCLEdBQXNCO1lBQzNDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUM3RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ3hELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7U0FDdEQsQ0FBQztRQUNLLG9CQUFlLEdBQXNCO1lBQzFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDekQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1NBQ3hELENBQUM7UUFHSyxpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV2QixvQkFBZSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBUS9ELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFROztRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixVQUFVLEVBQUUsTUFBQSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLDBDQUFFLEVBQUU7U0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixjQUFjO1FBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUM7YUFDNUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUseUJBQXlCLENBQWtDO3FCQUMxRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTt3QkFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7cUJBQzdCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUM7YUFDL0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQWtDO3FCQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTt3QkFDbEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7cUJBQzVCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSTtRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRTtZQUM1RCxPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLElBQUk7YUFDaEI7U0FDRixDQUFDO2FBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ2pDLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUseUJBQXlCLENBQWtDO3FCQUM1RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTt3QkFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7cUJBQzdCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsRUFBRTtZQUMvRCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGLENBQUM7YUFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDakMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQzFELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsQ0FBa0M7cUJBQzNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3BCLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztxQkFDNUI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUF3QjtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixNQUFNLEVBQ04sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE1BQXdCO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLE1BQU0sRUFDTixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFxQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQ1IsQ0FBQyxPQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQ0QsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQXFCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FDUixDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUMzQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFDRCxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7NEhBeE1VLDhCQUE4QjtnSEFBOUIsOEJBQThCLHlGQ2pCM0MsaTlGQWlGYzs0RkRoRUQsOEJBQThCO2tCQUwxQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO29CQUN2RCxXQUFXLEVBQUUsMENBQTBDO2lCQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmLCBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIEh0dHBCYXNlTW9kZWwsIFJlc3BvbnNlQ29kZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiwgS2V5d29yZCwgU29ydCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lbXBsb3llZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVtcGxveWVlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQtZm9ybWFsL2VkdWNhdGlvbi1mb3JtYWwtcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZUVkdWNhdGlvbk5vbkZvcm1hbFByb21wdENvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0LW5vbmZvcm1hbC9lZHVjYXRpb24tbm9uZm9ybWFsLXByb21wdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1lbXBsb3llZS1lZGl0LWVkdWNhdGlvbicsXG4gIHN0eWxlVXJsczogWycuL2VtcGxveWVlLWVkaXQtZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9lbXBsb3llZS1lZGl0LWVkdWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRWRpdEVkdWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHJlbG9hZEVkdWNhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVsb2FkVHJhaW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFwaVBhdGhFZHVjYXRpb246IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhcGlQYXRoVHJhaW5pbmc6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhcGlQYXRoRGVsZXRlRWR1Y2F0aW9uOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aERlbGV0ZVRyYWluaW5nOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgY29sdW1uc0VkdWNhdGlvbjogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnTGV2ZWwnLCBwcm9wOiAnZWR1Y2F0aW9uYWxMZXZlbCcsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdTY2hvb2wnLCBwcm9wOiAnc2Nob29sTmFtZScsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdZZWFyJywgcHJvcDogJ3N0YXJ0WWVhcicsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgXTtcbiAgcHVibGljIGNvbHVtbnNUcmFpbmluZzogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnVHJhaW5pbmcgTmFtZScsIHByb3A6ICduYW1lJywgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ1N0YXJ0IERhdGUnLCBwcm9wOiAnc3RhcnREYXRlJywgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0VuZCBEYXRlJywgcHJvcDogJ2VuZERhdGUnLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gIF07XG4gIHB1YmxpYyBzb3J0RWR1Y2F0aW9uOiBTb3J0O1xuICBwdWJsaWMgc29ydFRyYWluaW5nOiBTb3J0O1xuICBwdWJsaWMgZWR1Y2F0aW9uSWRzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgdHJhaW5pbmdJZHM6IGFueVtdID0gW107XG4gIHB1YmxpYyBrZXl3b3JkOiBLZXl3b3JkO1xuICBwcml2YXRlIGxvYWRpbmdTdWJqZWN0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgICAgc3VwZXIoaW5qZWN0b3IpO1xuICAgICAgaWYgKCF0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2VtcGxveWVlJ10pO1xuICAgICAgfVxuICAgICAgdGhpcy5hcGlQYXRoRWR1Y2F0aW9uID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RhdGF0YWJsZS1lZHVjYXRpb24tZW1wbG95ZWUnXTtcbiAgICAgIHRoaXMuYXBpUGF0aFRyYWluaW5nID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RhdGF0YWJsZS10cmFpbmluZy1lbXBsb3llZSddO1xuICAgICAgdGhpcy5hcGlQYXRoRGVsZXRlRWR1Y2F0aW9uID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RlbGV0ZS1lbXBsb3llZS1lZHVjYXRpb24nXTtcbiAgICAgIHRoaXMuYXBpUGF0aERlbGV0ZVRyYWluaW5nID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RlbGV0ZS1lbXBsb3llZS10cmFpbmluZyddO1xuICAgICAgdGhpcy5zb3J0RWR1Y2F0aW9uID0ge1xuICAgICAgICBkZXNjOiBbJ3N0YXJ0WWVhciddXG4gICAgICB9O1xuICAgICAgdGhpcy5zb3J0VHJhaW5pbmcgPSB7XG4gICAgICAgIGRlc2M6IFsnc3RhcnREYXRlJ11cbiAgICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICBlbXBsb3llZUlkOiB0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpPy5pZCxcbiAgICB9O1xuICB9XG5cbiAgbG9hZERhdGFNZW51KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5yZWxvYWRFZHVjYXRpb24gPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkVHJhaW5pbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkFkZEVkdWNhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnJlbG9hZEVkdWNhdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKEVtcGxveWVlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBkYXRhWydpZCddID0gdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVIZWFkZXIoKS5pZDtcbiAgICAgICAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3Bvc3QtZW1wbG95ZWUtZWR1Y2F0aW9uJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZEVkdWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uQWRkVHJhaW5pbmcoKTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWRUcmFpbmluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKEVtcGxveWVlRWR1Y2F0aW9uTm9uRm9ybWFsUHJvbXB0Q29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBkYXRhWydpZCddID0gdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVIZWFkZXIoKS5pZDtcbiAgICAgICAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3Bvc3QtZW1wbG95ZWUtdHJhaW5pbmcnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX0RFRkFVTFQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkVHJhaW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbkVkaXRFZHVjYXRpb24oZGF0YSk6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkRWR1Y2F0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRW1wbG95ZWVFZHVjYXRpb25Gb3JtYWxQcm9tcHRDb21wb25lbnQsIHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGVkdWNhdGlvbjogZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAub25DbG9zZS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRbJ2lkJ10gPSB0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpLmlkO1xuICAgICAgICAgIChzdXBlci5vblN1Ym1pdChyZXN1bHQsICdzZWN1cml0eScsICdwb3N0LWVtcGxveWVlLWVkdWNhdGlvbicpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRFZHVjYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbkVkaXRUcmFpbmluZyhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWRUcmFpbmluZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKEVtcGxveWVlRWR1Y2F0aW9uTm9uRm9ybWFsUHJvbXB0Q29tcG9uZW50LCB7XG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICB0cmFpbmluZzogZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAub25DbG9zZS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRbJ2lkJ10gPSB0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUhlYWRlcigpLmlkO1xuICAgICAgICAgIChzdXBlci5vblN1Ym1pdChyZXN1bHQsICdzZWN1cml0eScsICdwb3N0LWVtcGxveWVlLXRyYWluaW5nJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZFRyYWluaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgb25EZWxldGVFZHVjYXRpb25EaWFsb2coZGF0YSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWRFZHVjYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmVkdWNhdGlvbklkcyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmVkdWNhdGlvbklkcy5wdXNoKHZhbHVlLmlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIGRpYWxvZyxcbiAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmRlbGV0ZScgfSk7XG4gIH1cblxuICBvbkRlbGV0ZVRyYWluaW5nRGlhbG9nKGRhdGEsIGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkVHJhaW5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRyYWluaW5nSWRzID0gW107XG4gICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudHJhaW5pbmdJZHMucHVzaCh2YWx1ZS5pZCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5kZWxldGUnIH0pO1xuICB9XG5cbiAgb25EZWxldGVFZHVjYXRpb24ocmVmOiBOYkRpYWxvZ1JlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhEZWxldGVFZHVjYXRpb24sIHRoaXMuZWR1Y2F0aW9uSWRzKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLnJlbG9hZEVkdWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICB9LFxuICAgICk7XG4gIH1cblxuICBvbkRlbGV0ZVRyYWluaW5nKHJlZjogTmJEaWFsb2dSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoRGVsZXRlVHJhaW5pbmcsIHRoaXMudHJhaW5pbmdJZHMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5yZWxvYWRUcmFpbmluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25Mb2FkRWR1Y2F0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvbkxvYWRUcmFpbmluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0JC5uZXh0KHRydWUpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiPlxuICAgICAgPG5iLWFjY29yZGlvbiBtdWx0aT5cbiAgICAgICAgPG5iLWFjY29yZGlvbi1pdGVtIFtleHBhbmRlZF09XCJ0cnVlXCI+XG4gICAgICAgICAgPG5iLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgIHt7J0Zvcm1hbCBFZHVjYXRpb24nIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICA8bmItYWNjb3JkaW9uLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDxkby1kYXRhdGFibGVcbiAgICAgICAgICAgICAgW2FwaV09XCJhcGlQYXRoRWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc0VkdWNhdGlvblwiXG4gICAgICAgICAgICAgIFtmaWx0ZXJGbl09XCJrZXl3b3JkXCJcbiAgICAgICAgICAgICAgW3NvcnRdPVwic29ydEVkdWNhdGlvblwiXG4gICAgICAgICAgICAgIFtzdGFydFdpdGhPcGVuRGF0YV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIFtyZWxvYWRGbl09XCJyZWxvYWRFZHVjYXRpb25cIlxuICAgICAgICAgICAgICAob25Mb2FkaW5nKT1cIm9uTG9hZEVkdWNhdGlvbigpXCJcbiAgICAgICAgICAgICAgKG9uRWRpdCk9XCJvbkVkaXRFZHVjYXRpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChvbkFkZCk9XCJvbkFkZEVkdWNhdGlvbigpXCJcbiAgICAgICAgICAgICAgKG9uRGVsZXRlKT1cIm9uRGVsZXRlRWR1Y2F0aW9uRGlhbG9nKCRldmVudCwgZGlhbG9nZGVsZXRlZWR1Y2F0aW9uKVwiPlxuICAgICAgICAgICAgPC9kby1kYXRhdGFibGU+ICAgICAgICAgICAgICBcbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgIDxuYi1hY2NvcmRpb24taXRlbSBbZXhwYW5kZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgICB7eydOb24gRm9ybWFsIEVkdWNhdGlvbicgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyPlxuICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1ib2R5PlxuICAgICAgICAgICAgPGRvLWRhdGF0YWJsZVxuICAgICAgICAgICAgICBbYXBpXT1cImFwaVBhdGhUcmFpbmluZ1wiXG4gICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNUcmFpbmluZ1wiXG4gICAgICAgICAgICAgIFtmaWx0ZXJGbl09XCJrZXl3b3JkXCJcbiAgICAgICAgICAgICAgW3NvcnRdPVwic29ydFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgW3N0YXJ0V2l0aE9wZW5EYXRhXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgW3JlbG9hZEZuXT1cInJlbG9hZFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgKG9uTG9hZGluZyk9XCJvbkxvYWRUcmFpbmluZygpXCJcbiAgICAgICAgICAgICAgKG9uRWRpdCk9XCJvbkVkaXRUcmFpbmluZygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKG9uQWRkKT1cIm9uQWRkVHJhaW5pbmcoKVwiXG4gICAgICAgICAgICAgIChvbkRlbGV0ZSk9XCJvbkRlbGV0ZVRyYWluaW5nRGlhbG9nKCRldmVudCwgZGlhbG9nZGVsZXRldHJhaW5pbmcpXCI+XG4gICAgICAgICAgICA8L2RvLWRhdGF0YWJsZT5cbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0+XG4gICAgICA8L25iLWFjY29yZGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNkaWFsb2dkZWxldGVlZHVjYXRpb24gbGV0LWRhdGEgbGV0LXJlZj1cImRpYWxvZ1JlZlwiPlxuICA8bmItY2FyZCBhY2NlbnQ9XCJkYW5nZXJcIj5cbiAgICA8bmItY2FyZC1oZWFkZXI+e3sgJ1dhcm5pbmcnIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtaGVhZGVyPlxuICAgIDxuYi1jYXJkLWJvZHk+e3sgZGF0YSB8IHRyYW5zbGF0ZX19PC9uYi1jYXJkLWJvZHk+XG4gICAgPG5iLWNhcmQtZm9vdGVyPlxuICAgICAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICAgICAgW2NvbExhYmVsXT1cIjBcIlxuICAgICAgICBbY29sQnV0dG9uXT1cIjEyXCJcbiAgICAgICAgW3N1Ym1pdFRpdGxlXT1cIidEZWxldGUnXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICAob25SZXNldCk9XCJyZWYuY2xvc2UoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvbkRlbGV0ZUVkdWNhdGlvbihyZWYpXCI+XG4gICAgICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG4gICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgPC9uYi1jYXJkPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkaWFsb2dkZWxldGV0cmFpbmluZyBsZXQtZGF0YSBsZXQtcmVmPVwiZGlhbG9nUmVmXCI+XG4gIDxuYi1jYXJkIGFjY2VudD1cImRhbmdlclwiPlxuICAgIDxuYi1jYXJkLWhlYWRlcj57eyAnV2FybmluZycgfCB0cmFuc2xhdGV9fTwvbmItY2FyZC1oZWFkZXI+XG4gICAgPG5iLWNhcmQtYm9keT57eyBkYXRhIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtYm9keT5cbiAgICA8bmItY2FyZC1mb290ZXI+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbY29sTGFiZWxdPVwiMFwiXG4gICAgICAgIFtjb2xCdXR0b25dPVwiMTJcIlxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiJ0RlbGV0ZSdcIlxuICAgICAgICBbcmVzZXRUaXRsZV09XCInQ2FuY2VsJ1wiXG4gICAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgICAgIChvblJlc2V0KT1cInJlZi5jbG9zZSgpXCJcbiAgICAgICAgKG9uU3VibWl0KT1cIm9uRGVsZXRlVHJhaW5pbmcocmVmKVwiPlxuICAgICAgPC9kby1idXR0b24tc3VibWl0PlxuICAgIDwvbmItY2FyZC1mb290ZXI+XG4gIDwvbmItY2FyZD5cbjwvbmctdGVtcGxhdGU+Il19